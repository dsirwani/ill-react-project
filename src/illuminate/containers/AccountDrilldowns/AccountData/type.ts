import Actions from '../../../../utils/configureActions';

//Account data types
export interface AccountDataState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
  nextPageUrl: string | null;
}

interface AccountDataRequestAction {
  type: typeof Actions.ACCOUNT_DATA_REQUEST;
  payload: any;
}

interface AccountDataSuccessAction {
  type: typeof Actions.ACCOUNT_DATA_SUCCESS;
  payload: any;
}

interface AccountDataErrorAction {
  type: typeof Actions.ACCOUNT_DATA_ERROR;
  payload: any;
}

interface AccountDataResetAction {
  type: typeof Actions.ACCOUNT_DATA_RESET;
}

interface GetMoreAccountDataRequestAction {
  type: typeof Actions.GET_MORE_ACCOUNT_DATA_REQUEST;
  payload: any;
}

interface GetMoreAccountDataSuccessAction {
  type: typeof Actions.GET_MORE_ACCOUNT_DATA_SUCCESS;
  payload: any;
}

interface GetMoreAccountDataErrorAction {
  type: typeof Actions.GET_MORE_ACCOUNT_DATA_ERROR;
  payload: any;
}

export type AccountDataActionTypes =
  | AccountDataRequestAction
  | AccountDataSuccessAction
  | AccountDataErrorAction
  | AccountDataResetAction
  | GetMoreAccountDataRequestAction
  | GetMoreAccountDataSuccessAction
  | GetMoreAccountDataErrorAction;