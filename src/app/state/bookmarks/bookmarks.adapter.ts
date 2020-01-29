import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Bookmark } from '../types';

export const bookmarksAdapter: EntityAdapter<Bookmark> = createEntityAdapter<Bookmark>();
