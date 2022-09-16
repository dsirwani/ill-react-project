import ACTIONS from '../../../../utils/configureActions';
import {
  AccountDetailsActionTypes, AccountUsersActionTypes,
  AccountMatchingDataActionTypes, AccMatchingSearchDataActionTypes,
  UpdateAccMatchingDataActionTypes
} from './type';

//Account details action creators
export const accountDetailsRequest = (
  data: any
): AccountDetailsActionTypes => ({
  type: ACTIONS.ACCOUNT_DETAILS_REQUEST,
  payload: data,
});

export const accountDetailsSuccess = (
  data: any
): AccountDetailsActionTypes => ({
  type: ACTIONS.ACCOUNT_DETAILS_SUCCESS,
  payload: data,
});

export const accountDetailsError = (error: any): AccountDetailsActionTypes => ({
  type: ACTIONS.ACCOUNT_DETAILS_ERROR,
  payload: error,
});

export const accountDetailsReset = (): AccountDetailsActionTypes => ({
  type: ACTIONS.ACCOUNT_DETAILS_RESET,
});

//Account details users action creators
export const accountUsersRequest = (data: any): AccountUsersActionTypes => ({
  type: ACTIONS.ACCOUNT_USERS_REQUEST,
  payload: data,
});

export const accountUsersSuccess = (data: any): AccountUsersActionTypes => ({
  type: ACTIONS.ACCOUNT_USERS_SUCCESS,
  payload: data,
});

export const accountUsersError = (error: any): AccountUsersActionTypes => ({
  type: ACTIONS.ACCOUNT_USERS_ERROR,
  payload: error,
});

export const accountUsersReset = (): AccountUsersActionTypes => ({
  type: ACTIONS.ACCOUNT_USERS_RESET,
});

export const getMoreAccountUsersRequest = (
  data: any
): AccountUsersActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNT_USERS_REQUEST,
  payload: data,
});

export const getMoreAccountUsersSuccess = (
  data: any
): AccountUsersActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNT_USERS_SUCCESS,
  payload: data,
});

export const getMoreAccountUsersError = (
  error: any
): AccountUsersActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNT_USERS_ERROR,
  payload: error,
});

//Account matching action creators
export const accountMatchingDataRequest = (
  data: any
): AccountMatchingDataActionTypes => ({
  type: ACTIONS.ACCOUNT_MATCHING_DATA_REQUEST,
  payload: data,
});

export const accountMatchingDataSuccess = (
  data: any
): AccountMatchingDataActionTypes => ({
  type: ACTIONS.ACCOUNT_MATCHING_DATA_SUCCESS,
  payload: data,
});

export const accountMatchingDataError = (error: any): AccountMatchingDataActionTypes => ({
  type: ACTIONS.ACCOUNT_MATCHING_DATA_ERROR,
  payload: error,
});

export const accountMatchingDataReset = (): AccountMatchingDataActionTypes => ({
  type: ACTIONS.ACCOUNT_MATCHING_DATA_RESET,
});

//Account matching search action creators
export const accMatchingSearchDataRequest = (
  data: any
): AccMatchingSearchDataActionTypes => ({
  type: ACTIONS.ACC_MATCHING_SEARCH_DATA_REQUEST,
  payload: data,
});

export const accMatchingSearchDataSuccess = (
  data: any
): AccMatchingSearchDataActionTypes => ({
  type: ACTIONS.ACC_MATCHING_SEARCH_DATA_SUCCESS,
  payload: data,
});

export const accMatchingSearchDataError = (error: any): AccMatchingSearchDataActionTypes => ({
  type: ACTIONS.ACC_MATCHING_SEARCH_DATA_ERROR,
  payload: error,
});

export const accMatchingSearchDataReset = (): AccMatchingSearchDataActionTypes => ({
  type: ACTIONS.ACC_MATCHING_SEARCH_DATA_RESET,
});

//Update account matching action creators
export const updateAccMatchingDataRequest = (
  data: any
): UpdateAccMatchingDataActionTypes => ({
  type: ACTIONS.UPDATE_ACC_MATCHING_DATA_REQUEST,
  payload: data,
});

export const updateAccMatchingDataSuccess = (
  data: any
): UpdateAccMatchingDataActionTypes => ({
  type: ACTIONS.UPDATE_ACC_MATCHING_DATA_SUCCESS,
  payload: data,
});

export const updateAccMatchingDataError = (error: any): UpdateAccMatchingDataActionTypes => ({
  type: ACTIONS.UPDATE_ACC_MATCHING_DATA_ERROR,
  payload: error,
});

export const updateAccMatchingDataReset = (): UpdateAccMatchingDataActionTypes => ({
  type: ACTIONS.UPDATE_ACC_MATCHING_DATA_RESET,
});