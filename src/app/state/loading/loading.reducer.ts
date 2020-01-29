import { createReducer, on } from '@ngrx/store';

import { finishLoadingFeed, finishLoadingByTag, finishLoadingSearch, resetFinishSearch, resetFinishLoadByTag } from '../actions';

export const _finishLoadingReducer = createReducer(
  {finishedLoadingFeed: false, finishedLoadingByTag: false, finishedLoadingSearch: false},
  on(finishLoadingFeed, state => ({...state, finishedLoadingFeed: true})),
  on(finishLoadingByTag, state => ({...state, finishedLoadingByTag: true})),
  on(finishLoadingSearch, state => ({...state, finishedLoadingSearch: true})),
  on(resetFinishSearch, state => ({...state, finishedLoadingSearch: false})),
  on(resetFinishLoadByTag, state => ({...state, finishedLoadingByTag: false})),
);
