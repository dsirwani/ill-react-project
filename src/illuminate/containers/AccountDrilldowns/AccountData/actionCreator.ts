import ACTIONS from '../../../../utils/configureActions';
import {
  AccountDataActionTypes
} from './type';

//Account data action creators
export const accountDataRequest = (data: any): AccountDataActionTypes => ({
  type: ACTIONS.ACCOUNT_DATA_REQUEST,
  payload: data,
});

export const accountDataSuccess = (data: any): AccountDataActionTypes => ({
  type: ACTIONS.ACCOUNT_DATA_SUCCESS,
  payload: data,
});

export const accountDataError = (error: any): AccountDataActionTypes => ({
  type: ACTIONS.ACCOUNT_DATA_ERROR,
  payload: error,
});

export const accountDataReset = (): AccountDataActionTypes => ({
  type: ACTIONS.ACCOUNT_DATA_RESET,
});

export const getMoreAccountDataRequest = (
  data: any
): AccountDataActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNT_DATA_REQUEST,
  payload: data,
});

export const getMoreAccountDataSuccess = (
  data: any
): AccountDataActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNT_DATA_SUCCESS,
  payload: data,
});

export const getMoreAccountDataError = (
  error: any
): AccountDataActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNT_DATA_ERROR,
  payload: error,
});