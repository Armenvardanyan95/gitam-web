import { createReducer, on } from '@ngrx/store';

import { finishLoadingFeed, finishLoadingByTag, finishLoadingSearch,
  resetFinishSearch, resetFinishLoadByTag, changeBookmarkLoadingStatus } from '../actions';
import { loadAllTagsSuccess, loadAllTagsFailure, loadAllTags } from '../tags/tags.actions';

export interface LoadingState {
  finishedLoadingFeed: boolean;
  finishedLoadingByTag: boolean;
  finishedLoadingSearch: boolean;
  loadingAllTags: boolean;
  loadingBookmarks: Set<number>;
}

const initialLoadingState: LoadingState = {
  finishedLoadingFeed: false,
  finishedLoadingByTag: false,
  finishedLoadingSearch: false,
  loadingAllTags: false,
  loadingBookmarks: new Set(),
};

  /* tslint:disable:variable-name */
export const _finishLoadingReducer = createReducer(
/* tslint:enable:variable-name */
  initialLoadingState,
  on(finishLoadingFeed, state => ({...state, finishedLoadingFeed: true})),
  on(finishLoadingByTag, state => ({...state, finishedLoadingByTag: true})),
  on(finishLoadingSearch, state => ({...state, finishedLoadingSearch: true})),
  on(resetFinishSearch, state => ({...state, finishedLoadingSearch: false})),
  on(resetFinishLoadByTag, state => ({...state, finishedLoadingByTag: false})),
  on(loadAllTags, state => ({...state, loadingAllTags: true})),
  on(loadAllTagsSuccess, state => ({...state, loadingAllTags: false})),
  on(loadAllTagsFailure, state => ({...state, loadingAllTags: false})),
  on(changeBookmarkLoadingStatus, (state, {payload}) => {
    payload.status ? state.loadingBookmarks.add(payload.id) : state.loadingBookmarks.delete(payload.id);
    return {...state, loadingBookmarks: new Set(state.loadingBookmarks)};
  })
);
