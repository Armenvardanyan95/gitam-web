import { createReducer, on } from '@ngrx/store';

import { articlesByTagAdapter } from './articles-by-tag.adapter';
import { reloadArticlesByTagSuccess, continueLoadingArticlesByTagSuccess } from '../actions';

export const _articlesByTagReducer = createReducer(
  articlesByTagAdapter.getInitialState(),
  on(reloadArticlesByTagSuccess, (state, {articles}) => articlesByTagAdapter.addAll(articles, state)),
  on(continueLoadingArticlesByTagSuccess, (state, {articles}) => articlesByTagAdapter.addMany(articles, state)),
);
