import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { ArticleModel as Article } from 'src/app/common/models/article';

export const articlesAdapter: EntityAdapter<Article> = createEntityAdapter<Article>();
