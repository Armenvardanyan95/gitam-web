import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { appLoaded, loadBookmarks, getAuthStatus, setAuthStatus } from '../actions';
import { switchMap, filter } from 'rxjs/operators';

@Injectable()
export class AppEffects {

  appLoaded$ = createEffect(() => this.actions$.pipe(
    ofType(appLoaded),
    switchMap(() => ([
      loadBookmarks(),
      getAuthStatus(),
    ])),
  ));

  authConfirmed$ = createEffect(() => this.actions$.pipe(
    ofType(setAuthStatus),
    filter(({isAuth}) => isAuth),
    switchMap(() => [loadBookmarks()]),
  ));

  constructor(
    private readonly actions$: Actions,
  ) {}
}
