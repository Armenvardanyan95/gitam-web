import { createReducer, on } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';

import { bookmarksAdapter } from './bookmarks.adapter';
import { Bookmark } from '../types';
import { loadBookmarksSuccess, addToBookmarksSuccess, removeFromBookmarksSuccess, resetBookmarks } from '../actions';

function addBookmark(state: EntityState<Bookmark>, {article}: {article: Bookmark}): EntityState<Bookmark> {
  if (state.entities[article.bookmarkId]) {
    return state;
  }

  return bookmarksAdapter.addOne(article, state);
}

/* tslint:disable:variable-name */
export const _bookmarksReducer = createReducer(
/* tslint:enable:variable-name */
  bookmarksAdapter.getInitialState(),
  on(loadBookmarksSuccess, (state, {bookmarks}) => bookmarksAdapter.addAll(bookmarks, state)),
  on(addToBookmarksSuccess, addBookmark),
  on(removeFromBookmarksSuccess, (state, {id}) => bookmarksAdapter.removeOne(id, state)),
  on(resetBookmarks, state => bookmarksAdapter.removeAll(state)),
);
