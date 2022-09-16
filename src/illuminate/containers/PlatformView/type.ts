import Actions from '../../../utils/configureActions';

//Client data types
export interface ClientDataState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
  nextPageUrl: string | null;
  selectedClient: any;
  isAccountSelected:any;
  isClientSelected: boolean;
}

interface ClientDataRequestAction {
  type: typeof Actions.CLIENT_DATA_REQUEST;
  payload: any;
}

interface ClientDataSuccessAction {
  type: typeof Actions.CLIENT_DATA_SUCCESS;
  payload: any;
}

interface ClientDataErrorAction {
  type: typeof Actions.CLIENT_DATA_ERROR;
  payload: any;
}

interface ClientDataResetAction {
  type: typeof Actions.CLIENT_DATA_RESET;
}

interface setIsClientSelected {
  type: typeof Actions.SET_IS_CLIENT_SELECTED;
}

interface resetIsClientSelected {
  type: typeof Actions.RESET_IS_CLIENT_SELECTED;
}

// interface GetMoreClientDataRequestAction {
//   type: typeof Actions.GET_MORE_CLIENT_DATA_REQUEST;
//   payload: any;
// }

// interface GetMoreClientDataSuccessAction {
//   type: typeof Actions.GET_MORE_CLIENT_DATA_SUCCESS;
//   payload: any;
// }

// interface GetMoreClientDataErrorAction {
//   type: typeof Actions.GET_MORE_CLIENT_DATA_ERROR;
//   payload: any;
// }

export type ClientDataActionTypes =
  | ClientDataRequestAction
  | ClientDataSuccessAction
  | ClientDataErrorAction
  | setIsClientSelected
  | resetIsClientSelected
  | ClientDataResetAction;
// | GetMoreClientDataRequestAction
// | GetMoreClientDataSuccessAction
// | GetMoreClientDataErrorAction;
