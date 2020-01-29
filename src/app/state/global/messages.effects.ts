import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionCreator } from '@ngrx/store';
import { mapTo, tap } from 'rxjs/operators';

import { removeFromBookmarksSuccess, noop, addToBookmarks, showLoginWarning, addToBookmarksSuccess } from '../actions';

@Injectable()
export class MessagesEffects {

  addToBookmarksSuccess$ = this.createMessageEffect(
    addToBookmarksSuccess,
    'Հոդվածը հաջողությամբ պահպանվել է'
  );

  removeFromBookmarksSuccess$ = this.createMessageEffect(
    removeFromBookmarksSuccess,
    'Հոդվածը հաջողությամբ հեռացվել է'
  );

  showLoginWarning$ = this.createMessageEffect(
    showLoginWarning,
    'Այս գործոցությունը անելու համար անհրաժեշտ է մուտք գործել',
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
