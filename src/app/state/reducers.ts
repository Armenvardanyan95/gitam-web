import { Action } from '@ngrx/store';

import { GlobalState } from './types';
import { BookmarksEntity } from './bookmarks/bookmarks.entity';
import { _bookmarksReducer } from './bookmarks/bookmarks.reducer';
import { _articlesReducer, ArticleState } from './articles/articles.reducer';
import { _tagsReducer, TagsState } from './tags/tags.reducer';
import { SearchResultEntity } from './search/search.entity';
import { _searchResultsReducer } from './search/search.reducer';
import { ArticlesByTagEntity } from './articles-by-tag/articles-by-tag.entity';
import { _articlesByTagReducer } from './articles-by-tag/articles-by-tag.reducer';
import { _authReducer } from './auth/auth.reducer';
import { _finishLoadingReducer } from './loading/loading.reducer';
import { PreferencesState, _preferencesReducer } from './global/preferences.reducer';
import { NavigationState, _navigationReducer } from './global/navigation.reducer';

export function bookmarksReducer(state: BookmarksEntity, action: Action) {
  return _bookmarksReducer(state, action);
}

export function articlesReducer(state: ArticleState, action: Action) {
  return _articlesReducer(state, action);
}

export function tagsReducer(state: TagsState, action: Action) {
  return _tagsReducer(state, action);
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

export function preferencesReducer(state: PreferencesState, action: Action) {
  return _preferencesReducer(state, action);
}

export function navigationReducer(state: NavigationState, action: Action) {
  return _navigationReducer(state, action);
}
