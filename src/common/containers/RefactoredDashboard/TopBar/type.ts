import Actions from '../../../../utils/configureActions';

//User preference types
export interface UserPreferenceState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface UserPreferenceRequestAction {
  type: typeof Actions.USER_PREFERENCE_REQUEST;
}

interface UserPreferenceSuccessAction {
  type: typeof Actions.USER_PREFERENCE_SUCCESS;
  payload: any;
}

interface UserPreferenceErrorAction {
  type: typeof Actions.USER_PREFERENCE_ERROR;
  payload: any;
}

interface UserPreferenceResetAction {
  type: typeof Actions.USER_PREFERENCE_RESET;
}

export type UserPreferenceActionTypes =
  | UserPreferenceRequestAction
  | UserPreferenceSuccessAction
  | UserPreferenceErrorAction
  | UserPreferenceResetAction;

//Update user preference types
export interface UpdateUserPreferencesState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface UpdateUserPreferencesRequestAction {
  type: typeof Actions.UPDATE_USER_PREFERENCES_REQUEST;
  payload: any;
}

interface UpdateUserPreferencesSuccessAction {
  type: typeof Actions.UPDATE_USER_PREFERENCES_SUCCESS;
  payload: any;
}

interface UpdateUserPreferencesErrorAction {
  type: typeof Actions.UPDATE_USER_PREFERENCES_ERROR;
  payload: any;
}

interface UpdateUserPreferencesResetAction {
  type: typeof Actions.UPDATE_USER_PREFERENCES_RESET;
}

export type UpdateUserPreferencesActionTypes =
  | UpdateUserPreferencesRequestAction
  | UpdateUserPreferencesSuccessAction
  | UpdateUserPreferencesErrorAction
  | UpdateUserPreferencesResetAction;