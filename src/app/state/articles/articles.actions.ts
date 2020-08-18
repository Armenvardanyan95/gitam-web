import { createAction, props } from '@ngrx/store';

import { FeedOptions } from 'src/app/common/services/article.service';
import { ArticleModel } from 'src/app/common/models/article';
import { ArticleState } from './articles.reducer';

export const loadArticles = createAction(
  '[Article List] Load Articles',
  props<{feedOptions: FeedOptions}>()
);

export const loadArticlesSuccess = createAction(
  '[Article List] Load Articles Success',
  props<{articles: ArticleModel[]}>(),
);

export const loadArticleDetails = createAction(
  '[Article Details] Load Article Details',
  props<{id: number}>(),
);

export const loadArticleDetailsSuccess = createAction(
  '[Article Details] Load Article Details Success',
  props<{article: ArticleModel}>(),
);

export const loadArticleDetailsError = createAction(
  '[Article Details] Load Article Details',
  props<Error>(),
);

export const setArticleLoader = createAction(
  '[Articles] Set Loader',
  props<Partial<ArticleState['loading']>>(),
);
