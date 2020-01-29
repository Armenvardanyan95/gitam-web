import { createFeatureSelector, createSelector } from '@ngrx/store';

import { articlesByTagAdapter } from './articles-by-tag.adapter';

const { selectAll: selectAllArticlesByTag } = articlesByTagAdapter.getSelectors();

const articlesByTagSelector = createFeatureSelector('articlesByTag');

export const articlesByTag = createSelector(articlesByTagSelector, selectAllArticlesByTag);
