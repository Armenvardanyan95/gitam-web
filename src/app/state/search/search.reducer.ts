import { createReducer, on } from '@ngrx/store';

import { searchResultsAdapter } from './search.adapter';
import { initiateSearchArticlesSuccess, continueSearchArticlesSuccess } from '../actions';

/* tslint:disable:variable-name */
export const _searchResultsReducer = createReducer(
/* tslint:enable:variable-name */
  searchResultsAdapter.getInitialState(),
  on(initiateSearchArticlesSuccess, (state, {articles}) => searchResultsAdapter.addAll(articles, state)),
  on(continueSearchArticlesSuccess, (state, {articles}) => searchResultsAdapter.addMany(articles, state)),
);
