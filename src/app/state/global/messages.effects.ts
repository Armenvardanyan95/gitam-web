import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionCreator } from '@ngrx/store';
import { mapTo, tap } from 'rxjs/operators';

import { removeFromBookmarksSuccess, noop, signIn, signInFailure, showLoginWarning, addToBookmarksSuccess } from '../actions';

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

  signIn$ = this.createMessageEffect(
    signIn,
    'Դուք հաջողությամբ մուտք եք գործել',
  );

  signInFailure$ = this.createMessageEffect(
    signInFailure,
    'Չի հաջողվել մուտք եք գործել։ Ստուգեք Ձեր մուտքագրած տվյալները',
  );

  showLoginWarning$ = this.createMessageEffect(
    showLoginWarning,
    'Այս գործողությունը անելու համար անհրաժեշտ է մուտք գործել',
  );

  constructor(
    private readonly actions$: Actions,
    private readonly snackBar: MatSnackBar,
  ) {}

  private createMessageEffect(type: ActionCreator, message: string) {
    return createEffect(() => this.actions$.pipe(
      ofType(type),
      tap(() => this.snackBar.open(message, 'Լավ', {duration: 10000})),
      mapTo(noop()),
    ));
  }
}
