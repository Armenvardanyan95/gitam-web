import { createAction, props } from '@ngrx/store';

export const appLoaded = createAction(
  '[App Root] App loaded',
);

export const showLoginWarning = createAction(
  '[Universal] Show Login Warning',
  props<{message: string}>(),
);

export const noop = createAction(
  '[Universal] Noop',
);

export * from './auth/auth.actions';

export * from './bookmarks/bookmarks.actions';

export * from './articles/articles.actions';

export * from './search/search.actions';

export * from './articles-by-tag/articles-by-tag.actions';

export * from './loading/loading.actions';
