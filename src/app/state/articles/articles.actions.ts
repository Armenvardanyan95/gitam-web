import { createAction, props } from '@ngrx/store';

import { FeedOptions } from 'src/app/common/services/article.service';
import { ArticleModel } from 'src/app/common/models/article';

export const loadArticles = createAction(
  '[Article List] Load Articles',
  props<{page: number, feedOptions: FeedOptions}>()
);

export const loadArticlesSuccess = createAction(
  '[Article List] Load Articles Success',
  props<{articles: ArticleModel[]}>(),
);
