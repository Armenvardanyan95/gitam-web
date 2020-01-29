import { Action } from '@ngrx/store';

import { GlobalState } from './types';
import { BookmarksEntity } from './bookmarks/bookmarks.entity';
import { _bookmarksReducer } from './bookmarks/bookmarks.reducer';
import { ArticlesEntity } from './articles/articles.entity';
import { _articlesReducer } from './articles/articles.reducer';
import { SearchResultEntity } from './search/search.entity';
import { _searchResultsReducer } from './search/search.reducer';
import { ArticlesByTagEntity } from './articles-by-tag/articles-by-tag.entity';
import { _articlesByTagReducer } from './articles-by-tag/articles-by-tag.reducer';
import { _authReducer } from './auth/auth.reducer';
import { _finishLoadingReducer } from './loading/loading.reducer';



export function bookmarksReducer(state: BookmarksEntity, action: Action) {
  return _bookmarksReducer(state, action);
}

export function articlesReducer(state: ArticlesEntity, action: Action) {
  return _articlesReducer(state, action);
}

export function searchResultsReducer(state: SearchResultEntity, action: Action) {
  return _searchResultsReducer(state, action);
}

export function articlesByTagReducer(state: ArticlesByTagEntity, action: Action) {
  return _articlesByTagReducer(state, action);
}

export function authReducer(state: GlobalState['isAuth'], action: Action) {
  return _authReducer(state, action);
}

export function finishLoadingReducer(state: GlobalState['finishLoading'], action: Action) {
  return _finishLoadingReducer(state, action);
}
