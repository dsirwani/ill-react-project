import ACTIONS from '../../../utils/configureActions';
import { AccSummaryActionTypes } from './type';

export const accSummaryRequest = (data: any): AccSummaryActionTypes => (
  {
    type: ACTIONS.ACCOUNT_SUMMARY_REQUEST,
    payload: data
  }
);

export const accSummarySuccess = (data: any): AccSummaryActionTypes => (
  {
    type: ACTIONS.ACCOUNT_SUMMARY_SUCCESS,
    payload: data
  }
);

export const accSummaryError = (error: any): AccSummaryActionTypes => (
  {
    type: ACTIONS.ACCOUNT_SUMMARY_ERROR,
    payload: error
  }
);

export const accSummaryReset = (): AccSummaryActionTypes => (
  {
    type: ACTIONS.ACCOUNT_SUMMARY_RESET,
  }
);
