import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { mergeMap, switchMap, toArray, map, withLatestFrom, tap, filter } from 'rxjs/operators';

import { loadBookmarks, loadBookmarksSuccess, addToBookmarks, addToBookmarksSuccess,
         removeFromBookmarks, removeFromBookmarksSuccess, showLoginWarning } from '../actions';
import { BookmarkService } from 'src/app/common/services/bookmark.service';
import { allBookmarks } from '../selectors';
import { GlobalState } from '../types';

function requireLoginWithNotice(thisArg: {store: Store<Partial<GlobalState>>}) {
  return (source: Observable<any>) => source.pipe(
    withLatestFrom(thisArg.store.select(state => state.isAuth)),
    tap(([_, isAuth]) => !isAuth ? thisArg.store.dispatch(showLoginWarning({message: ''})) : null),
    filter(([_, isAuth]) => isAuth),
    map(([a]) => a),
  );
}

function requireLoginSilently(thisArg: {store: Store<Partial<GlobalState>>}) {
  return (source: Observable<any>) => source.pipe(
    withLatestFrom(thisArg.store.select(state => state.isAuth)),
    filter(([_, isAuth]) => isAuth),
    map(([a]) => a),
  );
}

@Injectable()
export class BookmarksEffects {
  loadBookmarks$ = createEffect(() => this.actions$.pipe(
    ofType(loadBookmarks),
    requireLoginSilently(this),
    mergeMap(() => this.bookmarkService.getBookmarks().pipe(
      switchMap(e => e),
      map(bookmark => ({...bookmark.article, bookmarkId: bookmark.id})),
      toArray(),
      map(bookmarks => loadBookmarksSuccess({bookmarks}))
    ))
  ));

  addBookmark$ = createEffect(() => this.actions$.pipe(
    ofType(addToBookmarks),
    requireLoginWithNotice(this),
    mergeMap(({article}) => this.bookmarkService.addBookmark(article.id).pipe(
      map(bookmark => addToBookmarksSuccess({article: {bookmarkId: bookmark.id, ...article}})),
    )),
  ));

  removeFromBookmarks$ = createEffect(() => this.actions$.pipe(
    ofType(removeFromBookmarks),
    withLatestFrom(this.store.select(allBookmarks)),
    map(([{id: articleId}, bookmarks]) => ({
      bookmarkId: bookmarks.find(bookmark => bookmark.id === articleId).bookmarkId,
      articleId,
    })),
    mergeMap(({articleId: id, bookmarkId}) => this.bookmarkService.deleteBookmark(bookmarkId).pipe(
      map(() => removeFromBookmarksSuccess({id})),
    ))
  ));

  constructor(
    private readonly actions$: Actions,
    public readonly store: Store<GlobalState>,
    private readonly bookmarkService: BookmarkService,
  ) {}
}
