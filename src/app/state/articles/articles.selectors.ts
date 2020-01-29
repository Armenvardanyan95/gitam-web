import { createFeatureSelector, createSelector } from '@ngrx/store';

import { articlesAdapter } from './articles.adapter';

const { selectAll: selectAllArticles } = articlesAdapter.getSelectors();

const articlesSelector = createFeatureSelector('articles');

export const allArticles = createSelector(articlesSelector, selectAllArticles);
