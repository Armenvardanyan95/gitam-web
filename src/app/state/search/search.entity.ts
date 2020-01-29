import { EntityState } from '@ngrx/entity';

import { ArticleModel as Article } from 'src/app/common/models/article';

export interface SearchResultEntity extends EntityState<Article> {}
