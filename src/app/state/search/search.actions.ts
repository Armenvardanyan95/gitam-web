import { createAction, props } from '@ngrx/store';

import { ArticleModel } from 'src/app/common/models/article';

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
