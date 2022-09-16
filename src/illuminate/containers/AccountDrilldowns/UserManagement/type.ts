import Actions from '../../../../utils/configureActions';

//Product Category types
export interface UserProfileState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  userProfile: any;
}

export interface EditUserProfileState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface UserProfileRequestAction {
  type: typeof Actions.GET_USER_PROFILE_REQUEST;
  payload: any;
}

interface UserProfileSuccessAction {
  type: typeof Actions.GET_USER_PROFILE_SUCCESS;
  payload: any;
}

interface UserProfileErrorAction {
  type: typeof Actions.GET_USER_PROFILE_ERROR;
  payload: any;
}

interface EditUserProfileRequstAction {
  type: typeof Actions.EDIT_USER_PROFILE_REQUEST;
  payload: any;
}

interface EditUserProfileSuccessAction {
  type: typeof Actions.EDIT_USER_PROFILE_SUCCESS;
  payload: any;
}

interface EditUserProfileErrorAction {
  type: typeof Actions.EDIT_USER_PROFILE_ERROR;
  payload: any;
}

export type UserProfileActionTypes =
  | UserProfileRequestAction
  | UserProfileSuccessAction
  | UserProfileErrorAction;

export type EditUserProfileActionTypes =
  | EditUserProfileRequstAction
  | EditUserProfileSuccessAction
  | EditUserProfileErrorAction
