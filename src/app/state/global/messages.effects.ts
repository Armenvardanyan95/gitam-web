import { Injectable, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { mapTo, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionCreator } from '@ngrx/store';

import {
  removeFromBookmarksSuccess, noop, signInSuccess, signInFailure,
  showLoginWarning, addToBookmarksSuccess, googleSignInFailure,
} from '../actions';
import { facebookSignInFailure } from '../auth/auth.actions';

@Injectable()
export class MessagesEffects {

  addToBookmarksSuccess$ = this.createMessageEffect(
    addToBookmarksSuccess,
    'Հոդվածը հաջողությամբ պահպանվել է',
  );

  removeFromBookmarksSuccess$ = this.createMessageEffect(
    removeFromBookmarksSuccess,
    'Հոդվածը հաջողությամբ հեռացվել է',
  );

  signInSuccess$ = this.createMessageEffect(
    signInSuccess,
    'Դուք հաջողությամբ մուտք եք գործել',
  );

  signInFailure$ = this.createMessageEffect(
    signInFailure,
    'Չի հաջողվել մուտք գործել։ Ստուգեք Ձեր մուտքագրած տվյալները',
  );

  signInWithGoogleFailure$ = this.createMessageEffect(
    googleSignInFailure,
    'Չի հաջողվել մուտք գործել Google-ի միջոցով։ Ստուգեք ձեր Google account-ը',
  );

  signInWithFacebookFailure$ = this.createMessageEffect(
    facebookSignInFailure,
    'Չի հաջողվել մուտք գործել Facebook-ի միջոցով։ Ստուգեք ձեր Facebook account-ը կամ փորձեք մեկ այլ սոցիալական ցանց կամ մուտք գորխեք Էլ․ Հասցեի միջոցով',
  );

  showLoginWarning$ = this.createMessageEffect(
    showLoginWarning,
    'Այս գործողությունը անելու համար անհրաժեշտ է մուտք գործել',
  );

  constructor(
    private readonly actions$: Actions,
    private readonly snackBar: MatSnackBar,
    private app: ApplicationRef,
  ) {}

  private createMessageEffect(
    type: ActionCreator,
    message: string,
  ) {
    return createEffect(() => this.actions$.pipe(
      ofType(type),
      tap(() => this.snackBar.open(message, 'Լավ', {duration: 10000})),
      tap(() => this.app.tick()),
      mapTo(noop()),
    ));
  }
}
