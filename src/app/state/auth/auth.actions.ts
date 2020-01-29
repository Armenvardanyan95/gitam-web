import { createAction, props } from '@ngrx/store';

export const setAuthStatus = createAction(
  '[Universal] Change Auth Status',
  props<{isAuth: boolean}>(),
);

export const signOut = createAction('[Universal] Sign Out');
export const signIn = createAction('[Universal] Sign In');

export const getAuthStatus = createAction(
  '[App Root] Change Auth Status',
);
