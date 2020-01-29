import { createFeatureSelector, createSelector } from '@ngrx/store';

import { GlobalState } from '../types';

const finishedSelector = createFeatureSelector<GlobalState['finishLoading']>('finishLoading');

export const finishedLoadingFeed = createSelector(
  finishedSelector,
  state => state.finishedLoadingFeed,
);

export const finishedLoadingByTag = createSelector(
  finishedSelector,
  state => state.finishedLoadingByTag,
);

export const finishedLoadingSearch = createSelector(
  finishedSelector,
  state => state.finishedLoadingSearch,
);
