import Actions from '../../../utils/configureActions';

export interface ClientUsersState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
  nextPageUrl: string | null;
}

interface ClientUsersRequestAction {
  type: typeof Actions.CLIENT_USERS_REQUEST;
  payload: any;
}

interface ClientUsersSuccessAction {
  type: typeof Actions.CLIENT_USERS_SUCCESS;
  payload: any;
}

interface ClientUsersErrorAction {
  type: typeof Actions.CLIENT_USERS_ERROR;
  payload: any;
}

interface ClientUsersResetAction {
  type: typeof Actions.CLIENT_USERS_RESET;
}

interface GetMoreClientUsersRequestAction {
  type: typeof Actions.GET_MORE_CLIENT_USERS_REQUEST;
  payload: any;
}

interface GetMoreClientUsersSuccessAction {
  type: typeof Actions.GET_MORE_CLIENT_USERS_SUCCESS;
  payload: any;
}

interface GetMoreClientUsersErrorAction {
  type: typeof Actions.GET_MORE_CLIENT_USERS_ERROR;
  payload: any;
}

export type ClientUsersActionTypes =
  | ClientUsersRequestAction
  | ClientUsersSuccessAction
  | ClientUsersErrorAction
  | ClientUsersResetAction
  | GetMoreClientUsersRequestAction
  | GetMoreClientUsersSuccessAction
  | GetMoreClientUsersErrorAction;
