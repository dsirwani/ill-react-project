import Actions from '../../../utils/configureActions';

export interface AccountListState {
  accountList: any;
  isLoading: boolean;
  nextPageUrl: any;
  recPerPage: number;
  clientImg: string;
  enabledApps: any;
  loaderOverScreen: boolean;
}

interface GetAccountListAction {
  type: typeof Actions.GET_ACCOUNT_LIST_REQUEST;
  payload: unknown;
}

interface GetAccountListSuccessAction {
  type: typeof Actions.GET_ACCOUNT_LIST_SUCCESS;
  payload: unknown;
}

interface GetAccountListErrorAction {
  type: typeof Actions.GET_ACCOUNT_LIST_ERROR;
  payload: unknown;
}

interface GetMoreAccountsAction {
  type: typeof Actions.GET_MORE_ACCOUNTS_REQUEST;
  payload: unknown;
}

interface GetMoreAccountsSuccessAction {
  type: typeof Actions.GET_MORE_ACCOUNTS_SUCCESS;
  payload: unknown;
}

interface GetMoreAccountsErrorAction {
  type: typeof Actions.GET_MORE_ACCOUNTS_ERROR;
  payload: unknown;
}

/* interface SaveFilterRequestAction {
  type: typeof Actions.SAVE_FILTER_REQUEST;
  payload: unknown;
}

interface SaveFilterSuccessAction {
  type: typeof Actions.SAVE_FILTER_SUCCESSS;
  payload: unknown;
}

interface SaveFilterErrorAction {
  type: typeof Actions.SAVE_FILTER_ERROR;
  payload: unknown;
} */

interface SetClientImage {
  type: typeof Actions.SET_CLIENT_IMAGE;
  payload: unknown;
}

interface SetEnableApps {
  type: typeof Actions.SET_ENABLED_APPS;
  payload: unknown;
}

export type AccountListActionTypes =
  | GetAccountListAction
  | GetAccountListSuccessAction
  | GetAccountListErrorAction
  | GetMoreAccountsAction
  | GetMoreAccountsSuccessAction
  | GetMoreAccountsErrorAction
  /* | SaveFilterRequestAction
  | SaveFilterSuccessAction
  | SaveFilterErrorAction */
  | SetClientImage
  | SetEnableApps;
