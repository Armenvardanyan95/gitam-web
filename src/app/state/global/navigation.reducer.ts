import { createReducer, on } from '@ngrx/store';
import {
  routerRequestAction, routerNavigatedAction, routerCancelAction,
} from '@ngrx/router-store';

export interface NavigationState {
  navigating: boolean;
}

const initialNavigation: NavigationState = {
  navigating: false,
};

/* tslint:disable-next-line:variable-name */
export const _navigationReducer = createReducer(
  initialNavigation,
  on(routerRequestAction, () => ({navigating: true})),
  on(routerNavigatedAction, () => ({navigating: false})),
  on(routerCancelAction, () => ({navigating: false})),
);
