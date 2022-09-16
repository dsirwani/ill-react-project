import ACTIONS from '../../../../utils/configureActions';
import {
  AccountTeamActionTypes
} from './type';

//Account team action creators
export const accountTeamRequest = (data: any): AccountTeamActionTypes => ({
  type: ACTIONS.ACCOUNT_TEAM_REQUEST,
  payload: data,
});

export const accountTeamSuccess = (data: any): AccountTeamActionTypes => ({
  type: ACTIONS.ACCOUNT_TEAM_SUCCESS,
  payload: data,
});

export const accountTeamError = (error: any): AccountTeamActionTypes => ({
  type: ACTIONS.ACCOUNT_TEAM_ERROR,
  payload: error,
});

export const accountTeamReset = (): AccountTeamActionTypes => ({
  type: ACTIONS.ACCOUNT_TEAM_RESET,
});

export const getMoreAccountTeamRequest = (
  data: any
): AccountTeamActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNT_TEAM_REQUEST,
  payload: data,
});

export const getMoreAccountTeamSuccess = (
  data: any
): AccountTeamActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNT_TEAM_SUCCESS,
  payload: data,
});

export const getMoreAccountTeamError = (
  error: any
): AccountTeamActionTypes => ({
  type: ACTIONS.GET_MORE_ACCOUNT_TEAM_ERROR,
  payload: error,
});