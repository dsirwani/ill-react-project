import ACTIONS from '../../../../utils/configureActions';
import { UserPreferenceActionTypes, UpdateUserPreferencesActionTypes } from './type';

//User preference action creators
export const userPreferenceRequest = (): UserPreferenceActionTypes => ({
  type: ACTIONS.USER_PREFERENCE_REQUEST,
});

export const userPreferenceSuccess = (
  data: any
): UserPreferenceActionTypes => ({
  type: ACTIONS.USER_PREFERENCE_SUCCESS,
  payload: data,
});

export const userPreferenceError = (error: any): UserPreferenceActionTypes => ({
  type: ACTIONS.USER_PREFERENCE_ERROR,
  payload: error,
});

export const userPreferenceReset = (): UserPreferenceActionTypes => ({
  type: ACTIONS.USER_PREFERENCE_RESET,
});

//Save user preferences action creators
export const updateUserPreferencesRequest = (
  data: any
): UpdateUserPreferencesActionTypes => ({
  type: ACTIONS.UPDATE_USER_PREFERENCES_REQUEST,
  payload: data,
});

export const updateUserPreferencesSuccess = (
  data: any
): UpdateUserPreferencesActionTypes => ({
  type: ACTIONS.UPDATE_USER_PREFERENCES_SUCCESS,
  payload: data,
});

export const updateUserPreferencesError = (error: any): UpdateUserPreferencesActionTypes => ({
  type: ACTIONS.UPDATE_USER_PREFERENCES_ERROR,
  payload: error,
});

export const updateUserPreferencesReset = (): UpdateUserPreferencesActionTypes => ({
  type: ACTIONS.UPDATE_USER_PREFERENCES_RESET,
});