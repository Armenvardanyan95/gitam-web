import { createReducer, on } from '@ngrx/store';

import { articlesAdapter } from './articles.adapter';
import { loadArticlesSuccess } from '../actions';

export const _articlesReducer = createReducer(
  articlesAdapter.getInitialState(),
  on(loadArticlesSuccess, (state, {articles}) => articlesAdapter.addMany(articles, state)),
);
