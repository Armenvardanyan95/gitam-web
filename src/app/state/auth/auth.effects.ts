import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  getAuthStatus, setAuthStatus, signOut, signIn,
  loadBookmarks, resetBookmarks, signInFailure, noop,
} from '../actions';
import { of } from 'rxjs';
import { map, tap, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/common/services/auth.service';
import {
  signInSuccess, googleSignIn, googleSignInFailure, sendGoogleCredentials,
  sendFacebookCredentials, facebookSignIn, facebookSignInFailure,
} from './auth.actions';
import { GoogleApiService } from 'src/app/common/services/google-api.service';
import { SignInWithSocialMediaCredentialsModel as SignInWithSocialMediaCredentials } from 'src/app/common/models/sigin.model';
import { FacebookApiService } from 'src/app/common/services/facebook-api.service';

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
    mergeMap(({payload}) => this.authService.signIn(payload).pipe(
      tap(({token}) => {
        localStorage.setItem('token', token);
        this.router.navigateByUrl('/');
      }),
      switchMap(() => [
        signInSuccess(),
        loadBookmarks(),
      ]),
      catchError(() => of(signInFailure())),
    )),
  ));

  signInWithGoogle$ = createEffect(() => this.actions$.pipe(
    ofType(googleSignIn),
    mergeMap(() => this.googleApiService.signIn().pipe(
      map(user => sendGoogleCredentials({payload: user})),
      catchError(() => of(googleSignInFailure())),
    )),
  ));

  sendGoogleCredentials$ = createEffect(() => this.actions$.pipe(
    ofType(sendGoogleCredentials),
    mergeMap(({payload}) => this.authService.signInWithGoogle(payload).pipe(
      tap(({token}) => {
        localStorage.setItem('token', token);
        this.router.navigateByUrl('/');
      }),
      switchMap(() => [
        signInSuccess(),
        loadBookmarks(),
      ]),
      // catchError(),
    ),
  )));

  signInWithFacebook$ = createEffect(() => this.actions$.pipe(
    ofType(facebookSignIn),
    mergeMap(() => this.facebookApiService.signIn().pipe(
      map(user => sendFacebookCredentials({payload: user})),
      catchError(() => of(facebookSignInFailure())),
    )),
  ));

  sendFacebookCredentials$ = createEffect(() => this.actions$.pipe(
    ofType(sendFacebookCredentials),
    mergeMap(({payload}) => this.authService.signInWithFacebook(payload).pipe(
      tap(({token}) => {
        localStorage.setItem('token', token);
        this.router.navigateByUrl('/');
      }),
      switchMap(() => [
        signInSuccess(),
        loadBookmarks(),
      ]),
      // catchError(),
    ),
  )));

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly googleApiService: GoogleApiService,
    private readonly facebookApiService: FacebookApiService,
    private readonly router: Router,
  ) { }
}
