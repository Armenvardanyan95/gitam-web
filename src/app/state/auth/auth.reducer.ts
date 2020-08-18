import { createReducer, on } from '@ngrx/store';

import { setAuthStatus, signInSuccess, signOut } from './auth.actions';

/* tslint:disable:variable-name */
export const _authReducer = createReducer(
/* tslint:enable:variable-name */
  false,
  on(setAuthStatus, (state, {isAuth}) => isAuth),
  on(signInSuccess, () => true),
  on(signOut, () => false)
);
