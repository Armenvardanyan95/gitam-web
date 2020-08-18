import { createReducer, on } from '@ngrx/store';

import { articlesByTagAdapter } from './articles-by-tag.adapter';
import { reloadArticlesByTagSuccess, continueLoadingArticlesByTagSuccess } from '../actions';

/* tslint:disable:variable-name */
export const _articlesByTagReducer = createReducer(
/* tslint:enable:variable-name */
  articlesByTagAdapter.getInitialState(),
  on(reloadArticlesByTagSuccess, (state, {articles}) => articlesByTagAdapter.addAll(articles, state)),
  on(continueLoadingArticlesByTagSuccess, (state, {articles}) => articlesByTagAdapter.addMany(articles, state)),
);
