import ACTIONS from '../../../../utils/configureActions';
import {
  ClientDetailsActionTypes,
} from './type';

//Client details action creators
export const clientDetailsRequest = (data: any): ClientDetailsActionTypes => ({
  type: ACTIONS.CLIENT_DETAILS_REQUEST,
  payload: data,
});

export const clientDetailsSuccess = (data: any): ClientDetailsActionTypes => ({
  type: ACTIONS.CLIENT_DETAILS_SUCCESS,
  payload: data,
});

export const clientDetailsError = (error: any): ClientDetailsActionTypes => ({
  type: ACTIONS.CLIENT_DETAILS_ERROR,
  payload: error,
});

export const clientDetailsReset = (): ClientDetailsActionTypes => ({
  type: ACTIONS.CLIENT_DETAILS_RESET,
});