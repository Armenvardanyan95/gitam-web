import { createReducer, on } from '@ngrx/store';
import { toggleDarkMode } from './preferences.actions';

export interface PreferencesState {
  darkMode: boolean;
}

const initialPreferences: PreferencesState = {
  darkMode: false,
};

/* tslint:disable:variable-name */
export const _preferencesReducer = createReducer(
/* tslint:enable:variable-name */
  initialPreferences,
  on(toggleDarkMode, state => ({...state, darkMode: !state.darkMode})),
);
