import Actions from '../../../utils/configureActions';

//Pre configured template types
export interface PreConfiguredTemplatesState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
  defaultTemplate: any;
}

interface PCTemplatesRequestAction {
  type: typeof Actions.PC_TEMPLATES_REQUEST;
  payload: any;
}

interface PCTemplatesSuccessAction {
  type: typeof Actions.PC_TEMPLATES_SUCCESS;
  payload: any;
}

interface PCTemplatesErrorAction {
  type: typeof Actions.PC_TEMPLATES_ERROR;
  payload: any;
}

interface PCTemplatesResetAction {
  type: typeof Actions.PC_TEMPLATES_RESET;
}

interface PCDefaultTemplateAction {
  type: typeof Actions.PC_DEFAULT_TEMPLATE;
  payload: any;
}

export type PCTemplatesActionTypes =
  | PCTemplatesRequestAction
  | PCTemplatesSuccessAction
  | PCTemplatesErrorAction
  | PCTemplatesResetAction
  | PCDefaultTemplateAction;

export interface TemplatesKPIColumns {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  columnsDDs: {
    revenue: null | [];
    plan: null | [];
    growth: null | [];
    buying_center: null | [];
    pgi: null | [];
  };
  columns?: any
}

interface GetTemplateColumnsRequestAction {
  type: typeof Actions.GET_TEMPLATE_COLUMNS_REQUEST;
  payload: any;
}

interface GetTemplateColumnsSuccessAction {
  type: typeof Actions.GET_TEMPLATE_COLUMNS_SUCCESS;
  payload: any;
}

interface GetTemplateColumnsFailureAction {
  type: typeof Actions.GET_TEMPLATE_COLUMNS_FAILURE;
  payload: any;
}

interface GetTemplateColumnsUpdateAction {
  type: typeof Actions.GET_TEMPLATE_COLUMNS_DD_UPDATE;
  payload: any;
}

interface AddKPITemplateColumnsAction {
  type: typeof Actions.ADD_TEMPLATE_COLUMN;
  payload: any;
}

interface DeleteKPITemplateColumnsAction {
  type: typeof Actions.DELETE_TEMPLATE_COLUMN;
  payload: any;
}

interface ResetKPITemplateColumnsAction {
  type: typeof Actions.RESET_TEMPLATE_COLUMN;
  payload: any;
}

interface ViewKPITemplateColumnsAction {
  type: typeof Actions.TEMPLATE_VIEW_COLUMNS;
  payload: any;
}

interface EditKPITemplateColumnsRequestAction {
  type: typeof Actions.TEMPLATE_EDIT_COLUMNS_REQUEST;
  payload: any;
}

interface EditKPITemplateColumnsSuccessAction {
  type: typeof Actions.TEMPLATE_EDIT_COLUMNS_SUCCESS;
  payload: any;
}

interface EditKPITemplateColumnsFailureAction {
  type: typeof Actions.TEMPLATE_EDIT_COLUMNS_FAILURE;
  payload: any;
}

interface EditKPITemplateColumnsDDUpdateAction {
  type: typeof Actions.EDIT_TEMPLATE_COLUMNS_DD_UPDATE;
  payload: any;
}

export type KPITemplateColumnsTypes = 
  | GetTemplateColumnsRequestAction
  | GetTemplateColumnsSuccessAction
  | GetTemplateColumnsFailureAction
  | GetTemplateColumnsUpdateAction
  | AddKPITemplateColumnsAction
  | DeleteKPITemplateColumnsAction
  | ResetKPITemplateColumnsAction
  | ViewKPITemplateColumnsAction
  | EditKPITemplateColumnsRequestAction
  | EditKPITemplateColumnsSuccessAction
  | EditKPITemplateColumnsFailureAction
  | EditKPITemplateColumnsDDUpdateAction;

//Template manager types
export interface TemplateManagerState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface TemplateManagerRequestAction {
  type: typeof Actions.TEMPLATE_MANAGER_REQUEST;
  payload: any;
}

interface TemplateManagerSuccessAction {
  type: typeof Actions.TEMPLATE_MANAGER_SUCCESS;
  payload: any;
}

interface TemplateManagerErrorAction {
  type: typeof Actions.TEMPLATE_MANAGER_ERROR;
  payload: any;
}

interface TemplateManagerResetAction {
  type: typeof Actions.TEMPLATE_MANAGER_RESET;
}

export type TemplateManagerActionTypes =
  | TemplateManagerRequestAction
  | TemplateManagerSuccessAction
  | TemplateManagerErrorAction
  | TemplateManagerResetAction;

//Template Delete types
export interface TemplateDeleteState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface TemplateDeleteRequestAction {
  type: typeof Actions.TEMPLATE_DELETE_REQUEST;
  payload: any;
}

interface TemplateDeleteSuccessAction {
  type: typeof Actions.TEMPLATE_DELETE_SUCCESS;
  payload: any;
}

interface TemplateDeleteErrorAction {
  type: typeof Actions.TEMPLATE_DELETE_ERROR;
  payload: any;
}

interface TemplateDeleteResetAction {
  type: typeof Actions.TEMPLATE_DELETE_RESET;
}

export type TemplateDeleteActionTypes =
  | TemplateDeleteRequestAction
  | TemplateDeleteSuccessAction
  | TemplateDeleteErrorAction
  | TemplateDeleteResetAction;

//Create Template types
export interface CreateTemplateState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
  closeModal: boolean;
}

interface CreateTemplateRequestAction {
  type: typeof Actions.CREATE_TEMPLATE_REQUEST;
  payload: any;
}

interface CreateTemplateSuccessAction {
  type: typeof Actions.CREATE_TEMPLATE_SUCCESS;
  payload: any;
}

interface CreateTemplateErrorAction {
  type: typeof Actions.CREATE_TEMPLATE_ERROR;
  payload: any;
}

export type CreateTemplateActionTypes =
  | CreateTemplateRequestAction
  | CreateTemplateSuccessAction
  | CreateTemplateErrorAction;
