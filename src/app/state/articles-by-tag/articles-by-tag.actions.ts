import { createAction, props } from '@ngrx/store';

import { ArticleModel } from 'src/app/common/models/article';

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
