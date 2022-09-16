import Actions from '../../../utils/configureActions';

//Filter criteria types
export interface FilterCriteriaState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface FilterCriteriaRequestAction {
  type: typeof Actions.FILTER_CRITERIA_REQUEST;
  payload: any;
}

interface FilterCriteriaSuccessAction {
  type: typeof Actions.FILTER_CRITERIA_SUCCESS;
  payload: any;
}

interface FilterCriteriaErrorAction {
  type: typeof Actions.FILTER_CRITERIA_ERROR;
  payload: any;
}

export type FilterCriteriaActionTypes =
  | FilterCriteriaRequestAction
  | FilterCriteriaSuccessAction
  | FilterCriteriaErrorAction
  | FilterCriteriaResetAction;

export interface SaveFilterState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  savedFilter: any;
  filterSavedSuccess: (boolean | null);
  appliedFilterId: (string | null);
  appliedSavedFilter: any;
}

interface FilterCriteriaResetAction {
  type: typeof Actions.FILTER_CRITERIA_RESET;
}

interface SaveFilterRequestAction {
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
}

interface SaveAppliedFilterAction {
  type: typeof Actions.SAVE_APPLIED_FILTER;
  payload: unknown;
}

interface ApplyFilterIdAction {
  type: typeof Actions.APPLY_FILTER_ID;
  payload: unknown;
}

interface clearSavedAppliedAction {
  type: typeof Actions.CLEAR_SAVED_APPLIED_FILTER;
  payload: unknown;
}

export type SaveFilterActionTypes =
  | FilterCriteriaResetAction
  | SaveFilterRequestAction
  | SaveFilterSuccessAction
  | SaveFilterErrorAction
  | SaveAppliedFilterAction
  | ApplyFilterIdAction
  | clearSavedAppliedAction;

//Filter list types
export interface FilterListState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface FilterListRequestAction {
  type: typeof Actions.FILTER_LIST_REQUEST;
  payload: any;
}

interface FilterListSuccessAction {
  type: typeof Actions.FILTER_LIST_SUCCESS;
  payload: any;
}

interface FilterListErrorAction {
  type: typeof Actions.FILTER_LIST_ERROR;
  payload: any;
}

interface FilterListResetAction {
  type: typeof Actions.FILTER_LIST_RESET;
}

export type FilterListActionTypes =
  | FilterListRequestAction
  | FilterListSuccessAction
  | FilterListErrorAction
  | FilterListResetAction;

//Filter Delete types
export interface FilterDeleteState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface FilterDeleteRequestAction {
  type: typeof Actions.FILTER_DELETE_REQUEST;
  payload: any;
}

interface FilterDeleteSuccessAction {
  type: typeof Actions.FILTER_DELETE_SUCCESS;
  payload: any;
}

interface FilterDeleteErrorAction {
  type: typeof Actions.FILTER_DELETE_ERROR;
  payload: any;
}

interface FilterDeleteResetAction {
  type: typeof Actions.FILTER_DELETE_RESET;
}

export type FilterDeleteActionTypes =
  | FilterDeleteRequestAction
  | FilterDeleteSuccessAction
  | FilterDeleteErrorAction
  | FilterDeleteResetAction;


//Tags types
export interface TagsDataState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface TagsDataRequestAction {
  type: typeof Actions.TAGS_DATA_REQUEST;
  payload: any;
}

interface TagsDataSuccessAction {
  type: typeof Actions.TAGS_DATA_SUCCESS;
  payload: any;
}

interface TagsDataErrorAction {
  type: typeof Actions.TAGS_DATA_ERROR;
  payload: any;
}

interface TagsDataResetAction {
  type: typeof Actions.TAGS_DATA_RESET;
}

export type TagsDataActionTypes =
  | TagsDataRequestAction
  | TagsDataSuccessAction
  | TagsDataErrorAction
  | TagsDataResetAction;