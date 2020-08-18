import { createReducer, on } from '@ngrx/store';

import { articlesAdapter } from './articles.adapter';
import { loadArticlesSuccess } from '../actions';
import { EntityState } from '@ngrx/entity';
import { ArticleModel as Article } from 'src/app/common/models/article';
import { loadArticleDetailsSuccess, setArticleLoader } from './articles.actions';
import { selectTag, deselectAllTags, deselectTag } from '../tags/tags.actions';

export interface ArticleState {
  articleList: EntityState<Article>;
  page: number;
  articleDetails: Article;
  loading: {
    articleDetails: boolean;
  };
}

const initialState: ArticleState = {
  articleList: articlesAdapter.getInitialState(),
  page: 1,
  articleDetails: null,
  loading: {
    articleDetails: false,
  },
};

/* tslint:disable:variable-name */
export const _articlesReducer = createReducer(
/* tslint:enable:variable-name */
  initialState,
  on(loadArticlesSuccess, (state, {articles}) => ({
    ...state,
    page: state.page + 1,
    articleList: articlesAdapter.addMany(articles, state.articleList),
  })),
  on(loadArticleDetailsSuccess, (state, {article: articleDetails}) => ({
    ...state,
    articleDetails,
  })),
  on(setArticleLoader, (state, payload) => ({
    ...state,
    loading: {
      ...state.loading,
      ...payload,
    },
  })),
  on(selectTag, state => ({
    ...state,
    page: 1,
    articleList: articlesAdapter.removeAll(state.articleList),
  })),
  on(deselectTag, state => ({
    ...state,
    page: 1,
    articleList: articlesAdapter.removeAll(state.articleList),
  })),
  on(deselectAllTags, state => ({
    ...state,
    page: 1,
    articleList: articlesAdapter.removeAll(state.articleList),
  })),
);
