import Actions from '../../../utils/configureActions';

export interface SessionState {
  isLoggedIn: boolean;
  session: any;
  callbackUrl: string;
  users: [];
}

interface InitSessionAction {
  type: typeof Actions.INIT_SESSION;
  payload: any;
}

interface SetSessionAction {
  type: typeof Actions.SET_SESSION;
  payload: any;
}

interface ClearSessionAction {
  type: typeof Actions.CLEAR_SESSION;
  payload: any;
}

interface GetUserListAction {
  type: typeof Actions.GET_USER_LIST;
  payload: any;
}

interface SetUsersDetailsAction {
  type: typeof Actions.SET_USERS_DETAILS;
  payload: any;
}

export type SessionActionTypes =
  | InitSessionAction
  | SetSessionAction
  | ClearSessionAction
  | GetUserListAction
  | SetUsersDetailsAction;