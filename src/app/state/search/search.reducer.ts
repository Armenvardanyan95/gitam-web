import { createReducer, on } from '@ngrx/store';

import { searchResultsAdapter } from './search.adapter';
import { initiateSearchArticlesSuccess, continueSearchArticlesSuccess } from '../actions';

export const _searchResultsReducer = createReducer(
  searchResultsAdapter.getInitialState(),
  on(initiateSearchArticlesSuccess, (state, {articles}) => searchResultsAdapter.addAll(articles, state)),
  on(continueSearchArticlesSuccess, (state, {articles}) => searchResultsAdapter.addMany(articles, state)),
);
