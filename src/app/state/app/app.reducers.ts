import { AppActionTypes } from './app.actions';
import { AppState } from './app.interface';
import { createSelector } from '@ngrx/store';


export function appReducers(appState = initialAppState, action): AppState {
  switch(action.type) {

    case AppActionTypes.UPDATE_NETWORK: {
      return {
        ...appState,
        network: action.payload,
      }
    }

    case AppActionTypes.TOGGLE_THEME: {
      return {
        ...appState,
        themes: appState.themes.reverse(),
      }
    }   

    default: {
      return appState;
    }
  }
}

export const initialAppState: AppState = {
  network: 'cosmoshub-2',
  themes: [
    'light-theme',
    'dark-theme',
  ]
};

export const selectAppState = (state) => state.appState;
export const selectNetwork = createSelector(selectAppState, (state) => state.network);
export const selectActiveTheme = createSelector(selectAppState, (state) => state.themes[0]);