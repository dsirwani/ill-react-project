import ACTIONS from '../../../utils/configureActions';
import {
  PCTemplatesActionTypes, 
  KPITemplateColumnsTypes,
  TemplateDeleteActionTypes,
  TemplateManagerActionTypes,
  CreateTemplateActionTypes,
} from './type';

//Pre configured template action creators
export const pcTemplatesRequest = (data: any): PCTemplatesActionTypes => ({
  type: ACTIONS.PC_TEMPLATES_REQUEST,
  payload: data,
});

export const pcTemplatesSuccess = (
  data: any
): PCTemplatesActionTypes => ({
  type: ACTIONS.PC_TEMPLATES_SUCCESS,
  payload: data,
});

export const pcTemplatesError = (error: any): PCTemplatesActionTypes => ({
  type: ACTIONS.PC_TEMPLATES_ERROR,
  payload: error,
});

export const pcTemplatesReset = (): PCTemplatesActionTypes => ({
  type: ACTIONS.PC_TEMPLATES_RESET,
});

export const setDefaultTemplate = (data: any): PCTemplatesActionTypes => ({
  type: ACTIONS.PC_DEFAULT_TEMPLATE,
  payload: data,
});

export const getTemplateColumnsRequest = (finDataType: string, templateType: string, columnNo: number): KPITemplateColumnsTypes  => ({
  type: ACTIONS.GET_TEMPLATE_COLUMNS_REQUEST,
  payload: {finDataType, templateType, columnNo}
});

export const getTemplateColumnsSuccess = (data: any, kpi: string, columnNo: number): KPITemplateColumnsTypes  => ({
  type: ACTIONS.GET_TEMPLATE_COLUMNS_SUCCESS,
  payload: {data, kpi, columnNo}
});

export const getTemplateColumnFailure = (error: any): KPITemplateColumnsTypes  => ({
  type: ACTIONS.GET_TEMPLATE_COLUMNS_FAILURE,
  payload: {error}
});

export const getTemplateColumnsDDUpdate = (topLineSelected: string, columnNo: number, ddNo: number): KPITemplateColumnsTypes  => ({
  type: ACTIONS.GET_TEMPLATE_COLUMNS_DD_UPDATE,
  payload: {topLineSelected, columnNo, ddNo}
});

export const addKPITemplateColumn = (): KPITemplateColumnsTypes  => ({
  type: ACTIONS.ADD_TEMPLATE_COLUMN,
  payload: {}
});

export const deleteKPITemplateColumn = (column: any): KPITemplateColumnsTypes  => ({
  type: ACTIONS.DELETE_TEMPLATE_COLUMN,
  payload: { column }
});

export const resetKPITemplateColumn = (column: any): KPITemplateColumnsTypes  => ({
  type: ACTIONS.RESET_TEMPLATE_COLUMN,
  payload: {}
});

export const viewKPITemplateColumn = (templateColumns: any): KPITemplateColumnsTypes  => ({
  type: ACTIONS.TEMPLATE_VIEW_COLUMNS,
  payload: {templateColumns}
});

export const editKPITemplateColumnRequest = (finDataType: string, templateType: string, templateColumns: any): KPITemplateColumnsTypes  => ({
  type: ACTIONS.TEMPLATE_EDIT_COLUMNS_REQUEST,
  payload: {finDataType, templateType, templateColumns}
});

export const editKPITemplateColumnSuccess = (data: any): KPITemplateColumnsTypes  => ({
  type: ACTIONS.TEMPLATE_EDIT_COLUMNS_SUCCESS,
  payload: {data}
});

export const editKPITemplateColumnFailure = (error: any): KPITemplateColumnsTypes  => ({
  type: ACTIONS.TEMPLATE_EDIT_COLUMNS_FAILURE,
  payload: {error}
});

export const editKPITemplateColumnDDUpdate = (templateColumns: any): KPITemplateColumnsTypes  => ({
  type: ACTIONS.EDIT_TEMPLATE_COLUMNS_DD_UPDATE,
  payload: {templateColumns}
});


//Template manager action creators
export const templateManagerRequest = (data: any): TemplateManagerActionTypes => ({
  type: ACTIONS.TEMPLATE_MANAGER_REQUEST,
  payload: data,
});

export const templateManagerSuccess = (
  data: any
): TemplateManagerActionTypes => ({
  type: ACTIONS.TEMPLATE_MANAGER_SUCCESS,
  payload: data,
});

export const templateManagerError = (error: any): TemplateManagerActionTypes => ({
  type: ACTIONS.TEMPLATE_MANAGER_ERROR,
  payload: error,
});

export const templateManagerReset = (): TemplateManagerActionTypes => ({
  type: ACTIONS.TEMPLATE_MANAGER_RESET,
});

//Template delete action creators
export const templateDeleteRequest = (data: any): TemplateDeleteActionTypes => ({
  type: ACTIONS.TEMPLATE_DELETE_REQUEST,
  payload: data,
});

export const templateDeleteSuccess = (
  data: any
): TemplateDeleteActionTypes => ({
  type: ACTIONS.TEMPLATE_DELETE_SUCCESS,
  payload: data,
});

export const templateDeleteError = (error: any): TemplateDeleteActionTypes => ({
  type: ACTIONS.TEMPLATE_DELETE_ERROR,
  payload: error,
});

export const templateDeleteReset = (): TemplateDeleteActionTypes => ({
  type: ACTIONS.TEMPLATE_DELETE_RESET,
});

//create template action creators
export const createTemplateRequest = (data: any, editTemplate: boolean): CreateTemplateActionTypes => ({
  type: ACTIONS.CREATE_TEMPLATE_REQUEST,
  payload: {data, editTemplate }
});

export const createTemplateSuccess = (
  data: any
): CreateTemplateActionTypes => ({
  type: ACTIONS.CREATE_TEMPLATE_SUCCESS,
  payload: data,
});

export const createTemplateError = (error: any): CreateTemplateActionTypes => ({
  type: ACTIONS.CREATE_TEMPLATE_ERROR,
  payload: error,
});
