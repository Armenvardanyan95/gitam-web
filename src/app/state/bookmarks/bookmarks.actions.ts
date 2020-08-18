import { createAction, props } from '@ngrx/store';

import { ArticleModel } from 'src/app/common/models/article';
import { Bookmark } from '../types';

export const resetBookmarks = createAction(
  '[Universal] Reset Bookmarks',
);

export const loadBookmarks = createAction(
  '[App Root] Load Bookmarks',
);

export const loadBookmarksSuccess = createAction(
  '[App Root] Load Bookmarks Success',
  props<{bookmarks: Bookmark[]}>(),
);

export const addToBookmarks = createAction(
  '[Universal] Add To Bookmarks',
  props<{article: Omit<ArticleModel, 'text'>}>()
);

export const addToBookmarksSuccess = createAction(
  '[Universal] Add To Bookmarks Success',
  props<{article: Bookmark}>(),
);

export const removeFromBookmarks = createAction(
  '[Universal] Remove from Bookmarks',
  props<{id: number}>(),
);

export const removeFromBookmarksSuccess = createAction(
  '[Universal] Remove from Bookmarks Success',
  props<{id: number}>(),
);
