import { createFeatureSelector, createSelector } from '@ngrx/store';

import { searchResultsAdapter } from './search.adapter';

const { selectAll: selectAllSearchResults } = searchResultsAdapter.getSelectors();

const searchResultsSelector = createFeatureSelector('searchResults');

export const searchResults = createSelector(searchResultsSelector, selectAllSearchResults);
