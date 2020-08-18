import { createAction, props } from '@ngrx/store';

import {
  SignInCredentialsModel as SignInCredentials,
  SignInWithSocialMediaCredentialsModel as SignInWithSocialMediaCredentials,
} from 'src/app/common/models/sigin.model';

export const setAuthStatus = createAction(
  '[Universal] Change Auth Status',
  props<{isAuth: boolean}>(),
);

export const signOut = createAction('[Universal] Sign Out');
export const signIn = createAction(
  '[Universal] Sign In',
  props<{payload: SignInCredentials}>(),
);
export const signInSuccess = createAction('[Login Page] Sign In Success');
export const signInFailure = createAction('[Login Page] Sign In Failure');

export const googleSignIn = createAction('[Login Page] Google Sign In');
export const googleSignInSuccess = createAction('[Login Page] Google Sign In Success');
export const googleSignInFailure = createAction('[Login Page] Google Sign In Failure');

export const sendGoogleCredentials = createAction(
  '[Login Page] Send Google Credentials',
  props<{payload: SignInWithSocialMediaCredentials}>(),
);

export const sendFacebookCredentials = createAction(
  '[Login Page] Send Facebook Credentials',
  props<{payload: SignInWithSocialMediaCredentials}>(),
);

export const facebookSignIn = createAction('[Login Page] Facebook Sign In');
export const facebookSignInSuccess = createAction('[Login Page] Facebook Sign In Success');
export const facebookSignInFailure = createAction('[Login Page] Facebook Sign In Failure');

export const getAuthStatus = createAction(
  '[App Root] Change Auth Status',
);
