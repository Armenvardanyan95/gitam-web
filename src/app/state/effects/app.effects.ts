import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { appLoaded, loadBookmarks, getAuthStatus} from '../actions';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AppEffects {

  appLoaded$ = createEffect(() => this.actions$.pipe(
    ofType(appLoaded),
    switchMap(() => ([
      loadBookmarks(),
      getAuthStatus(),
    ])),
  ));

  constructor(
    private readonly actions$: Actions,
  ) {}
}
