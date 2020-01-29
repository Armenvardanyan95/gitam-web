import { EntityState } from '@ngrx/entity';

import { Bookmark } from '../types';

export interface BookmarksEntity extends EntityState<Bookmark> {}
