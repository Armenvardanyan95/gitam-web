import { createReducer, on } from '@ngrx/store';

import { bookmarksAdapter } from './bookmarks.adapter';
import { loadBookmarksSuccess, addToBookmarksSuccess, removeFromBookmarksSuccess, resetBookmarks } from '../actions';

export const _bookmarksReducer = createReducer(
  bookmarksAdapter.getInitialState(),
  on(loadBookmarksSuccess, (state, {bookmarks}) => bookmarksAdapter.addAll(bookmarks, state)),
  on(addToBookmarksSuccess, (state, {article}) => bookmarksAdapter.addOne(article, state)),
  on(removeFromBookmarksSuccess, (state, {id}) => bookmarksAdapter.removeOne(id, state)),
  on(resetBookmarks, state => bookmarksAdapter.removeAll(state)),
);
