import { createFeatureSelector, createSelector } from '@ngrx/store';

import { articlesAdapter } from './articles.adapter';
import { ArticleState } from './articles.reducer';

const { selectAll: selectAllArticles } = articlesAdapter.getSelectors();

const articlesSelector = createFeatureSelector('articles');

const selectArticles = (state: ArticleState) => selectAllArticles(state.articleList);

export const allArticles = createSelector(articlesSelector, selectArticles);
