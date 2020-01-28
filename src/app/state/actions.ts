import { createAction, props } from '@ngrx/store';

import { ArticleModel } from '../common/models/article';
import { FeedOptions } from '../common/services/article.service';

export type Bookmark = Omit<ArticleModel, 'text'> & {bookmarkId: number};

export const setAuthStatus = createAction(
  '[Universal] Change Auth Status',
  props<{isAuth: boolean}>(),
);

export const signOut = createAction('[Universal] Sign Out');
export const signIn = createAction('[Universal] Sign In');

export const getAuthStatus = createAction(
  '[App Root] Change Auth Status',
);

export const appLoaded = createAction(
  '[App Root] App loaded',
);

export const resetBookmarks = createAction(
  '[Universl] Reset Bookmarks',
)

export const loadBookmarks = createAction(
  '[App Root] Load Bookmarks',
);

export const loadBookmarksSuccess = createAction(
  '[App Root] Load Bookmarks Success',
  props<{bookmarks: Bookmark[]}>(),
);

export const addToBookmarks = createAction(
  '[Universal] Add To Bookmarks',
  props<{article: Omit<ArticleModel, 'text'>}>()
);

export const addToBookmarksSuccess = createAction(
  '[Universal] Add To Bookmarks Success',
  props<{article: Bookmark}>(),
);

export const removeFromBookmarks = createAction(
  '[Universal] Remove from Bookmarks',
  props<{id: number}>(),
);

export const removeFromBookmarksSuccess = createAction(
  '[Universal] Remove from Bookmarks Success',
  props<{id: number}>(),
);

export const loadArticles = createAction(
  '[Article List] Load Articles',
  props<{page: number, feedOptions: FeedOptions}>()
);

export const loadArticlesSuccess = createAction(
  '[Article List] Load Articles Success',
  props<{articles: ArticleModel[]}>(),
);

export const initiateSearchArticles = createAction(
  '[Search] Initiate Search Articles',
  props<{page: number, size: number, title: string}>(),
);

export const initiateSearchArticlesSuccess = createAction(
  '[Search] Search Articles Success',
  props<{articles: ArticleModel[]}>(),
);

export const continueSearchArticles = createAction(
  '[Search] Continue Search Articles',
  props<{page: number, size: number, title: string}>(),
);

export const continueSearchArticlesSuccess = createAction(
  '[Search] Continue Search Articles Success',
  props<{articles: ArticleModel[]}>(),
);

export const searchArticles = createAction(
  '[Search] Continue or Initiate Search',
  props<{page: number, size: number, title: string}>(),
);

export const reloadArticlesByTag = createAction(
  '[Tag Details] Reload Articles By Tag',
  props<{page: number, size: number, tagName: string}>(),
);

export const reloadArticlesByTagSuccess = createAction(
  '[Tag Details] Reload Articles By Tag Success',
  props<{articles: ArticleModel[]}>(),
);

export const continueLoadingArticlesByTag = createAction(
  '[Tag Details] Continue Loading Articles By Tag',
  props<{page: number, size: number, tagName: string}>(),
);

export const continueLoadingArticlesByTagSuccess = createAction(
  '[Tag Details] Continue Loading Articles By Tag Success',
  props<{articles: ArticleModel[]}>(),
);

export const loadArticlesByTag = createAction(
  '[Tag Details] Continue or Initiate Loading Articles By Tag',
  props<{page: number, size: number, tagName: string}>(),
);



export const finishLoadingFeed = createAction('[Home Page] Finish Loading Feed');
export const finishLoadingByTag = createAction('[Tag Details] Finish Loading By Tag');
export const finishLoadingSearch = createAction('[Search] Finish Loading Search Results');
export const resetFinishSearch = createAction('[Search] Reset Finish Loading Search Results');
export const resetFinishLoadByTag = createAction('[Search] Reset Finish Loading By Tag');

export const showLoginWarning = createAction(
  '[Universal] Show Login Warning',
  props<{message: string}>(),
);

export const noop = createAction(
  '[Universal] Noop',
);
