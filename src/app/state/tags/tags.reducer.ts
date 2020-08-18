import { createReducer, on } from '@ngrx/store';

import { loadAllTagsSuccess, selectTag, deselectTag, deselectAllTags } from './tags.actions';

export interface TagsState {
  allTags: string[];
  selectedTags: string[];
}

const initialTagsState: TagsState = {
  allTags: [],
  selectedTags: [],
};

/* tslint:disable-next-line:variable-name */
export const _tagsReducer = createReducer(
  initialTagsState,
  on(loadAllTagsSuccess, (state, {payload}) => ({...state, allTags: payload})),
  on(selectTag, (state, {payload}) => ({
    ...state,
    selectedTags: Array.from(new Set([...state.selectedTags, payload])),
  })),
  on(deselectTag, (state, {payload}) => ({
    ...state,
    selectedTags: state.selectedTags.filter(tag => tag !== payload),
  })),
  on(deselectAllTags, state => ({...state, selectedTags: []})),
);
