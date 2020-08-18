import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { loadAllTags, loadAllTagsSuccess, loadAllTagsFailure } from './tags.actions';
import { ArticleService } from 'src/app/common/services/article.service';

@Injectable({
  providedIn: 'root',
})
export class TagsEffects {

  loadAllTags$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllTags),
    mergeMap(() => this.articleService.getAllTags().pipe(
      map(payload => loadAllTagsSuccess({payload})),
      catchError(() => of(loadAllTagsFailure()))
    )),
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly articleService: ArticleService,
  ) {}
}
