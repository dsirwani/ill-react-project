import Actions from '../../../../utils/configureActions';

//Account details types
export interface AccountDetailsState {
  loading: boolean;
  scrollLoader: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface AccountDetailsRequestAction {
  type: typeof Actions.ACCOUNT_DETAILS_REQUEST;
  payload: any;
}

interface AccountDetailsSuccessAction {
  type: typeof Actions.ACCOUNT_DETAILS_SUCCESS;
  payload: any;
}

interface AccountDetailsErrorAction {
  type: typeof Actions.ACCOUNT_DETAILS_ERROR;
  payload: any;
}

interface AccountDetailsResetAction {
  type: typeof Actions.ACCOUNT_DETAILS_RESET;
}

export type AccountDetailsActionTypes =
  | AccountDetailsRequestAction
  | AccountDetailsSuccessAction
  | AccountDetailsErrorAction
  | AccountDetailsResetAction;

//Account details user types
export interface AccountUsersState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
  nextPageUrl: string | null;
}

interface AccountUsersRequestAction {
  type: typeof Actions.ACCOUNT_USERS_REQUEST;
  payload: any;
}

interface AccountUsersSuccessAction {
  type: typeof Actions.ACCOUNT_USERS_SUCCESS;
  payload: any;
}

interface AccountUsersErrorAction {
  type: typeof Actions.ACCOUNT_USERS_ERROR;
  payload: any;
}

interface AccountUsersResetAction {
  type: typeof Actions.ACCOUNT_USERS_RESET;
}

interface GetMoreAccountUsersRequestAction {
  type: typeof Actions.GET_MORE_ACCOUNT_USERS_REQUEST;
  payload: any;
}

interface GetMoreAccountUsersSuccessAction {
  type: typeof Actions.GET_MORE_ACCOUNT_USERS_SUCCESS;
  payload: any;
}

interface GetMoreAccountUsersErrorAction {
  type: typeof Actions.GET_MORE_ACCOUNT_USERS_ERROR;
  payload: any;
}

export type AccountUsersActionTypes =
  | AccountUsersRequestAction
  | AccountUsersSuccessAction
  | AccountUsersErrorAction
  | AccountUsersResetAction
  | GetMoreAccountUsersRequestAction
  | GetMoreAccountUsersSuccessAction
  | GetMoreAccountUsersErrorAction;

//Account matching types
export interface AccountMatchingDataState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface AccountMatchingDataRequestAction {
  type: typeof Actions.ACCOUNT_MATCHING_DATA_REQUEST;
  payload: any;
}

interface AccountMatchingDataSuccessAction {
  type: typeof Actions.ACCOUNT_MATCHING_DATA_SUCCESS;
  payload: any;
}

interface AccountMatchingDataErrorAction {
  type: typeof Actions.ACCOUNT_MATCHING_DATA_ERROR;
  payload: any;
}

interface AccountMatchingDataResetAction {
  type: typeof Actions.ACCOUNT_MATCHING_DATA_RESET;
}

export type AccountMatchingDataActionTypes =
  | AccountMatchingDataRequestAction
  | AccountMatchingDataSuccessAction
  | AccountMatchingDataErrorAction
  | AccountMatchingDataResetAction;

//Account matching search types
export interface AccMatchingSearchDataState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface AccMatchingSearchDataRequestAction {
  type: typeof Actions.ACC_MATCHING_SEARCH_DATA_REQUEST;
  payload: any;
}

interface AccMatchingSearchDataSuccessAction {
  type: typeof Actions.ACC_MATCHING_SEARCH_DATA_SUCCESS;
  payload: any;
}

interface AccMatchingSearchDataErrorAction {
  type: typeof Actions.ACC_MATCHING_SEARCH_DATA_ERROR;
  payload: any;
}

interface AccMatchingSearchDataResetAction {
  type: typeof Actions.ACC_MATCHING_SEARCH_DATA_RESET;
}

export type AccMatchingSearchDataActionTypes =
  | AccMatchingSearchDataRequestAction
  | AccMatchingSearchDataSuccessAction
  | AccMatchingSearchDataErrorAction
  | AccMatchingSearchDataResetAction;



//Update account matching types
export interface UpdateAccMatchingDataState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface UpdateAccMatchingDataRequestAction {
  type: typeof Actions.UPDATE_ACC_MATCHING_DATA_REQUEST;
  payload: any;
}

interface UpdateAccMatchingDataSuccessAction {
  type: typeof Actions.UPDATE_ACC_MATCHING_DATA_SUCCESS;
  payload: any;
}

interface UpdateAccMatchingDataErrorAction {
  type: typeof Actions.UPDATE_ACC_MATCHING_DATA_ERROR;
  payload: any;
}

interface UpdateAccMatchingDataResetAction {
  type: typeof Actions.UPDATE_ACC_MATCHING_DATA_RESET;
}

export type UpdateAccMatchingDataActionTypes =
  | UpdateAccMatchingDataRequestAction
  | UpdateAccMatchingDataSuccessAction
  | UpdateAccMatchingDataErrorAction
  | UpdateAccMatchingDataResetAction;