import ACTIONS from '../../../utils/configureActions';
import { ClientUsersActionTypes } from './type';

export const clientUsersRequest = (data: any): ClientUsersActionTypes => ({
  type: ACTIONS.CLIENT_USERS_REQUEST,
  payload: data,
});

export const clientUsersSuccess = (data: any): ClientUsersActionTypes => ({
  type: ACTIONS.CLIENT_USERS_SUCCESS,
  payload: data,
});

export const clientUsersError = (error: any): ClientUsersActionTypes => ({
  type: ACTIONS.CLIENT_USERS_ERROR,
  payload: error,
});

export const clientUsersReset = (): ClientUsersActionTypes => ({
  type: ACTIONS.CLIENT_USERS_RESET,
});

export const getMoreClientUsersRequest = (
  data: any
): ClientUsersActionTypes => ({
  type: ACTIONS.GET_MORE_CLIENT_USERS_REQUEST,
  payload: data,
});

export const getMoreClientUsersSuccess = (
  data: any
): ClientUsersActionTypes => ({
  type: ACTIONS.GET_MORE_CLIENT_USERS_SUCCESS,
  payload: data,
});

export const getMoreClientUsersError = (
  error: any
): ClientUsersActionTypes => ({
  type: ACTIONS.GET_MORE_CLIENT_USERS_ERROR,
  payload: error,
});
