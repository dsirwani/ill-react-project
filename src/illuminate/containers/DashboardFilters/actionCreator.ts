import ACTIONS from '../../../utils/configureActions';
import {
  FilterCriteriaActionTypes, FilterListActionTypes,
  SaveFilterActionTypes, FilterDeleteActionTypes, TagsDataActionTypes
} from './type';

//Filter criteria action creators
export const filterCriteriaRequest = (data: any): FilterCriteriaActionTypes => ({
  type: ACTIONS.FILTER_CRITERIA_REQUEST,
  payload: data,
});

export const filterCriteriaSuccess = (
  data: any
): FilterCriteriaActionTypes => ({
  type: ACTIONS.FILTER_CRITERIA_SUCCESS,
  payload: data,
});

export const filterCriteriaError = (error: any): FilterCriteriaActionTypes => ({
  type: ACTIONS.FILTER_CRITERIA_ERROR,
  payload: error,
});

export const filterCriteriaReset = (): FilterCriteriaActionTypes => ({
  type: ACTIONS.FILTER_CRITERIA_RESET,
});

//Filter list action creators
export const filterListRequest = (data: any): FilterListActionTypes => ({
  type: ACTIONS.FILTER_LIST_REQUEST,
  payload: data,
});

export const filterListSuccess = (
  data: any
): FilterListActionTypes => ({
  type: ACTIONS.FILTER_LIST_SUCCESS,
  payload: data,
});

export const filterListError = (error: any): FilterListActionTypes => ({
  type: ACTIONS.FILTER_LIST_ERROR,
  payload: error,
});

export const filterListReset = (): FilterListActionTypes => ({
  type: ACTIONS.FILTER_LIST_RESET,
});

export const saveFilterRequest = (filterData: any, sortingData: any, applyFilter: boolean, updateFilter: boolean): SaveFilterActionTypes => ({
  type: ACTIONS.SAVE_FILTER_REQUEST,
  payload: { filterData, sortingData, applyFilter, updateFilter },
});

export const saveFilterSuccess = (
  data: any
): SaveFilterActionTypes => ({
  type: ACTIONS.SAVE_FILTER_SUCCESSS,
  payload: data,
});

export const saveFilterError = (error: any): SaveFilterActionTypes => ({
  type: ACTIONS.SAVE_FILTER_ERROR,
  payload: error,
});

//Filter delete action creators
export const filterDeleteRequest = (data: any): FilterDeleteActionTypes => ({
  type: ACTIONS.FILTER_DELETE_REQUEST,
  payload: data,
});

export const filterDeleteSuccess = (
  data: any
): FilterDeleteActionTypes => ({
  type: ACTIONS.FILTER_DELETE_SUCCESS,
  payload: data,
});

export const filterDeleteError = (error: any): FilterDeleteActionTypes => ({
  type: ACTIONS.FILTER_DELETE_ERROR,
  payload: error,
});

export const filterDeleteReset = (): FilterDeleteActionTypes => ({
  type: ACTIONS.FILTER_DELETE_RESET,
});

export const saveAppliedFilter = (appliedFilter: any): SaveFilterActionTypes => ({
  type: ACTIONS.SAVE_APPLIED_FILTER,
  payload: { appliedFilter },
});

export const applyFilterId = (filterId: string | null): SaveFilterActionTypes => ({
  type: ACTIONS.APPLY_FILTER_ID,
  payload: { filterId },
});

export const clearSavedAppliedFilter = (): SaveFilterActionTypes => ({
  type: ACTIONS.CLEAR_SAVED_APPLIED_FILTER,
  payload: {},
});

//Tags action creators
export const tagsDataRequest = (data: any): TagsDataActionTypes => ({
  type: ACTIONS.TAGS_DATA_REQUEST,
  payload: data,
});

export const tagsDataSuccess = (
  data: any
): TagsDataActionTypes => ({
  type: ACTIONS.TAGS_DATA_SUCCESS,
  payload: data,
});

export const tagsDataError = (error: any): TagsDataActionTypes => ({
  type: ACTIONS.TAGS_DATA_ERROR,
  payload: error,
});

export const tagsDataReset = (): TagsDataActionTypes => ({
  type: ACTIONS.TAGS_DATA_RESET,
});