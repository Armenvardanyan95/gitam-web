import { createReducer, on } from '@ngrx/store';

import { setAuthStatus } from './auth.actions';

export const _authReducer = createReducer(
  false,
  on(setAuthStatus, (state, {isAuth}) => isAuth),
);
