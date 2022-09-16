import ACTIONS from '../../../utils/configureActions';
import { ClientDataActionTypes } from './type';

//Client data action creators
export const clientDataRequest = (data: any): ClientDataActionTypes => ({
  type: ACTIONS.CLIENT_DATA_REQUEST,
  payload: data,
});

export const clientDataSuccess = (data: any): ClientDataActionTypes => ({
  type: ACTIONS.CLIENT_DATA_SUCCESS,
  payload: data,
});

export const clientDataError = (error: any): ClientDataActionTypes => ({
  type: ACTIONS.CLIENT_DATA_ERROR,
  payload: error,
});

export const clientDataReset = (): ClientDataActionTypes => ({
  type: ACTIONS.CLIENT_DATA_RESET,
});

// export const getMoreClientDataRequest = (
//   data: any
// ): ClientDataActionTypes => ({
//   type: ACTIONS.GET_MORE_CLIENT_DATA_REQUEST,
//   payload: data,
// });

// export const getMoreClientDataSuccess = (
//   data: any
// ): ClientDataActionTypes => ({
//   type: ACTIONS.GET_MORE_CLIENT_DATA_SUCCESS,
//   payload: data,
// });

// export const getMoreClientDataError = (
//   error: any
// ): ClientDataActionTypes => ({
//   type: ACTIONS.GET_MORE_CLIENT_DATA_ERROR,
//   payload: error,
// });

export const setIsClientSelected = (): ClientDataActionTypes => ({
  type: ACTIONS.SET_IS_CLIENT_SELECTED,
});

export const resetIsClientSelected = (): ClientDataActionTypes => ({
  type: ACTIONS.RESET_IS_CLIENT_SELECTED,
});
