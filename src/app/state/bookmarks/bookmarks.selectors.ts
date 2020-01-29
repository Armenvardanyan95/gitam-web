import { createFeatureSelector, createSelector } from '@ngrx/store';

import { bookmarksAdapter } from './bookmarks.adapter';

const { selectAll: selectAllBookmarks, selectIds: selectBookmarkIds } = bookmarksAdapter.getSelectors();
const bookmarksSelector = createFeatureSelector('bookmarks');

export const allBookmarks = createSelector(bookmarksSelector, selectAllBookmarks);
export const allBookmarkIds = createSelector(bookmarksSelector, selectBookmarkIds);
