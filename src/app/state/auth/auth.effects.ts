import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { getAuthStatus, setAuthStatus, signOut, signIn, loadBookmarks, resetBookmarks } from '../actions';
import { map, tap, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {

  loadAuth$ = createEffect(() => this.actions$.pipe(
    ofType(getAuthStatus),
    map(() => !!localStorage.getItem('token')),
    map(isAuth => setAuthStatus({isAuth})),
  ));

  signOut$ = createEffect(() => this.actions$.pipe(
    ofType(signOut),
    tap(() => localStorage.removeItem('token')),
    switchMap(() => [
      setAuthStatus({isAuth: false}),
      resetBookmarks(),
    ]),
  ));

  signIn$ = createEffect(() => this.actions$.pipe(
    ofType(signIn),
    switchMap(() => [
      setAuthStatus({isAuth: true}),
      loadBookmarks(),
    ]),
  ));

  constructor(
    private readonly actions$: Actions,
  ) {}
}
