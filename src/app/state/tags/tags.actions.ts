import { createAction, props } from '@ngrx/store';

export const loadAllTags = createAction('[Home Page] Load All Tags');
export const loadAllTagsSuccess = createAction(
  '[Home Page] Load All Tags Success',
  props<{payload: string[]}>(),
);
export const loadAllTagsFailure = createAction('[Home Page] Load All Tags Failure');

export const selectTag = createAction(
  '[Home Page] Select Tag',
  props<{payload: string}>(),
);

export const deselectTag = createAction(
  '[Home Page] Deselect Tag',
  props<{payload: string}>(),
);

export const deselectAllTags = createAction('[Home Page] Deselect All Tags');
