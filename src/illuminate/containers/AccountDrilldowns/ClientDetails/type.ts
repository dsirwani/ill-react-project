import Actions from '../../../../utils/configureActions';

//Product Category types
export interface ClientDetailsState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface ClientDetailsRequestAction {
  type: typeof Actions.CLIENT_DETAILS_REQUEST;
  payload: any;
}

interface ClientDetailsSuccessAction {
  type: typeof Actions.CLIENT_DETAILS_SUCCESS;
  payload: any;
}

interface ClientDetailsErrorAction {
  type: typeof Actions.CLIENT_DETAILS_ERROR;
  payload: any;
}

interface ClientDetailsResetAction {
  type: typeof Actions.CLIENT_DETAILS_RESET;
}


export type ClientDetailsActionTypes =
  | ClientDetailsRequestAction
  | ClientDetailsSuccessAction
  | ClientDetailsErrorAction
  | ClientDetailsResetAction;