import Actions from '../../../../utils/configureActions';

//G2K financials types
export interface G2KFinancialsState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface G2KFinancialsRequestAction {
  type: typeof Actions.G2K_FINANCIALS_REQUEST;
  payload: any;
}

interface G2KFinancialsSuccessAction {
  type: typeof Actions.G2K_FINANCIALS_SUCCESS;
  payload: any;
}

interface G2KFinancialsErrorAction {
  type: typeof Actions.G2K_FINANCIALS_ERROR;
  payload: any;
}

interface G2KFinancialsResetAction {
  type: typeof Actions.G2K_FINANCIALS_RESET;
}

export type G2KFinancialsActionTypes =
  | G2KFinancialsRequestAction
  | G2KFinancialsSuccessAction
  | G2KFinancialsErrorAction
  | G2KFinancialsResetAction;