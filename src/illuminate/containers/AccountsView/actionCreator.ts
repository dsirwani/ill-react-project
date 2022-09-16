import ACTIONS from '../../../utils/configureActions';
import { AccountListActionTypes } from './type';

export const getAccountList = (reqParams: any): AccountListActionTypes => ({
  type: ACTIONS.GET_ACCOUNT_LIST_REQUEST,
  payload: { ...reqParams},
});

export const getAccountSuccess = (
  responseData: any
): AccountListActionTypes => ({
  type: ACTIONS.GET_ACCOUNT_LIST_SUCCESS,
  payload: { responseData },
});

export const getAccountFailure = (
  errorData: unknown
): AccountListActionTypes => ({
  type: ACTIONS.GET_ACCOUNT_LIST_ERROR,
  payload: { errorData },
});

export const getMoreAccountList = (
  nextPageUrl: any = undefined
): AccountListActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNTS_REQUEST,
  payload: { nextPageUrl },
});

export const getMoreAccountSuccess = (
  responseData: any
): AccountListActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNTS_SUCCESS,
  payload: { responseData },
});

export const getMoreAccountFailure = (
  errorData: unknown
): AccountListActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNTS_ERROR,
  payload: { errorData },
});

/* export const saveFilterRequest = (
  reqData: any = undefined
): AccountListActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNTS_REQUEST,
  payload: { reqData },
});

export const saveFilterSuccess = (
  responseData: any
): AccountListActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNTS_SUCCESS,
  payload: { responseData },
});

export const saveFilterFailure = (
  errorData: unknown
): AccountListActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNTS_ERROR,
  payload: { errorData },
}); */

export const setClientImage = (
  clientImage: any = undefined
): AccountListActionTypes => ({
  type: ACTIONS.SET_CLIENT_IMAGE,
  payload: { clientImage },
});

export const setEnableApps = (
  enabledApps: any = undefined
): AccountListActionTypes => ({
  type: ACTIONS.SET_ENABLED_APPS,
  payload: { enabledApps },
});
