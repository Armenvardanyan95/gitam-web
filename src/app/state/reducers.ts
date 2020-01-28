import { createReducer, on, State, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { setAuthStatus, loadBookmarksSuccess, removeFromBookmarksSuccess,
         addToBookmarksSuccess, loadArticlesSuccess, finishLoadingFeed,
         finishLoadingByTag, finishLoadingSearch, resetFinishSearch,
         initiateSearchArticlesSuccess, continueSearchArticlesSuccess,
         reloadArticlesByTagSuccess,
         continueLoadingArticlesByTagSuccess,
         resetFinishLoadByTag,
         resetBookmarks} from './actions';
import { ArticleModel as Article } from '../common/models/article';

export type Bookmark = Omit<Article, 'text'> & {bookmarkId: number};

export interface GlobalState {
  isAuth: boolean;
  bookmarks: Bookmark[];
  articles: Article[];
  searchResults: Article[];
  articlesByTag: Article[];
  finishLoading: {
    finishedLoadingFeed: false;
    finishedLoadingByTag: false;
    finishedLoadingSearch: false;
  };
}

interface BookmarksEntity extends EntityState<Bookmark> {}
interface ArticlesEntity extends EntityState<Article> {}
interface SearchResultEntity extends EntityState<Article> {}
interface ArticlesByTagEntity extends EntityState<Article> {}

const bookmarksAdapter: EntityAdapter<Bookmark> = createEntityAdapter<Bookmark>();
const articlesAdapter: EntityAdapter<Article> = createEntityAdapter<Article>();
const searchResultsAdapter: EntityAdapter<Article> = createEntityAdapter<Article>();
const articlesByTagAdapter: EntityAdapter<Article> = createEntityAdapter<Article>();

const { selectAll: selectAllBookmarks, selectIds: selectBookmarkIds } = bookmarksAdapter.getSelectors();
const { selectAll: selectAllArticles } = articlesAdapter.getSelectors();
const { selectAll: selectAllSearchResults } = searchResultsAdapter.getSelectors();
const { selectAll: selectAllArticlesByTag } = articlesByTagAdapter.getSelectors();

const bookmarksSelector = createFeatureSelector('bookmarks');
const articlesSelector = createFeatureSelector('articles');
const searchResultsSelector = createFeatureSelector('searchResults');
const articlesByTagSelector = createFeatureSelector('articlesByTag');
const finishedSelector = createFeatureSelector<GlobalState['finishLoading']>('finishLoading');

export const allBookmarks = createSelector(bookmarksSelector, selectAllBookmarks);
export const allBookmarkIds = createSelector(bookmarksSelector, selectBookmarkIds);

export const allArticles = createSelector(articlesSelector, selectAllArticles);

export const searchResults = createSelector(searchResultsSelector, selectAllSearchResults);

export const articlesByTag = createSelector(articlesByTagSelector, selectAllArticlesByTag);

export const finishedLoadingFeed = createSelector(
  finishedSelector,
  state => state.finishedLoadingFeed,
);

export const finishedLoadingByTag = createSelector(
  finishedSelector,
  state => state.finishedLoadingByTag,
);

export const finishedLoadingSearch = createSelector(
  finishedSelector,
  state => state.finishedLoadingSearch,
);

const _authReducer = createReducer(
  false,
  on(setAuthStatus, (state, {isAuth}) => isAuth),
);

const _bookmarksReducer = createReducer(
  bookmarksAdapter.getInitialState(),
  on(loadBookmarksSuccess, (state, {bookmarks}) => bookmarksAdapter.addAll(bookmarks, state)),
  on(addToBookmarksSuccess, (state, {article}) => bookmarksAdapter.addOne(article, state)),
  on(removeFromBookmarksSuccess, (state, {id}) => bookmarksAdapter.removeOne(id, state)),
  on(resetBookmarks, state => bookmarksAdapter.removeAll(state)),
);

const _articlesReducer = createReducer(
  articlesAdapter.getInitialState(),
  on(loadArticlesSuccess, (state, {articles}) => articlesAdapter.addMany(articles, state)),
);

const _searchResultsReducer = createReducer(
  searchResultsAdapter.getInitialState(),
  on(initiateSearchArticlesSuccess, (state, {articles}) => searchResultsAdapter.addAll(articles, state)),
  on(continueSearchArticlesSuccess, (state, {articles}) => searchResultsAdapter.addMany(articles, state)),
);

const _articlesByTagReducer = createReducer(
  articlesByTagAdapter.getInitialState(),
  on(reloadArticlesByTagSuccess, (state, {articles}) => articlesByTagAdapter.addAll(articles, state)),
  on(continueLoadingArticlesByTagSuccess, (state, {articles}) => articlesByTagAdapter.addMany(articles, state)),
);

const _finishLoadingReducer = createReducer(
  {finishedLoadingFeed: false, finishedLoadingByTag: false, finishedLoadingSearch: false},
  on(finishLoadingFeed, state => ({...state, finishedLoadingFeed: true})),
  on(finishLoadingByTag, state => ({...state, finishedLoadingByTag: true})),
  on(finishLoadingSearch, state => ({...state, finishedLoadingSearch: true})),
  on(resetFinishSearch, state => ({...state, finishedLoadingSearch: false})),
  on(resetFinishLoadByTag, state => ({...state, finishedLoadingByTag: false})),
);

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
