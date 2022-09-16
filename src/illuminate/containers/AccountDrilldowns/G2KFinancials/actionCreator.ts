import ACTIONS from '../../../../utils/configureActions';
import { G2KFinancialsActionTypes } from './type';

//G2K financials action creators
export const g2kFinancialsRequest = (data: any): G2KFinancialsActionTypes => ({
  type: ACTIONS.G2K_FINANCIALS_REQUEST,
  payload: data,
});

export const g2kFinancialsSuccess = (data: any): G2KFinancialsActionTypes => ({
  type: ACTIONS.G2K_FINANCIALS_SUCCESS,
  payload: data,
});

export const g2kFinancialsError = (error: any): G2KFinancialsActionTypes => ({
  type: ACTIONS.G2K_FINANCIALS_ERROR,
  payload: error,
});

export const g2kFinancialsReset = (): G2KFinancialsActionTypes => ({
  type: ACTIONS.G2K_FINANCIALS_RESET,
});