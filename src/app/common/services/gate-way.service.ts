import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bookmark } from '../../state/types';
import { addToBookmarksSuccess, removeFromBookmarksSuccess } from 'src/app/state/actions';

enum ServerEvents {
  BookmarkAdded = 'BOOKMARK_ADDED',
  BookmarkRemoved = 'BOOKMARK_REMOVED',
}

interface ServerEvent {
  type: ServerEvents;
  payload: Bookmark;
}

@Injectable({
  providedIn: 'root'
})
export class GateWayService {

  constructor(
    private readonly store: Store<any>,
    private stream$: Observable<ServerEvent>,
  ) {
    this.stream$.subscribe(event => {
      switch (event.type) {
        case ServerEvents.BookmarkAdded:
          this.store.dispatch(addToBookmarksSuccess({article: event.payload}));
          break;
        case ServerEvents.BookmarkRemoved:
          this.store.dispatch(removeFromBookmarksSuccess({id: event.payload.bookmarkId}));
      }
    });
   }
}
