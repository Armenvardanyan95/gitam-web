import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { ArticleModel as Article } from 'src/app/common/models/article';

export const articlesByTagAdapter: EntityAdapter<Article> = createEntityAdapter<Article>();
