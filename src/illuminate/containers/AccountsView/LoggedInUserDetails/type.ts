import Actions from '../../../../utils/configureActions';

export interface AccountListState {
  accountList: any;
  isLoading: boolean;
  nextPageUrl: any;
  recPerPage: number;
}

export interface LoggedInUserDetailsState {
  loggedInUserDetails: any;
  isLoading: boolean;
}

interface GetLoggedInUserDetailsRequestAction {
  type: typeof Actions.GET_LOGGED_IN_USER_DETAILS_REQUEST;
  payload: unknown;
}

interface GetLoggedInUserDetailsSuccessAction {
  type: typeof Actions.GET_LOGGED_IN_USER_DETAILS_SUCCESS;
  payload: unknown;
}

interface GetLoggedInUserDetailsErrorAction {
  type: typeof Actions.GET_LOGGED_IN_USER_DETAILS_ERROR;
  payload: unknown;
}

export type LoggedInUserDetailsActionTypes =
  | GetLoggedInUserDetailsRequestAction
  | GetLoggedInUserDetailsSuccessAction
  | GetLoggedInUserDetailsErrorAction;
