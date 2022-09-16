import ACTIONS from '../../../../utils/configureActions';
import { LoggedInUserDetailsActionTypes } from './type';

export const getLoggedInUserDetailsRequest = (
  clientId: any = undefined,
  email: string
): LoggedInUserDetailsActionTypes => ({
  type: ACTIONS.GET_LOGGED_IN_USER_DETAILS_REQUEST,
  payload: { clientId, email },
});

export const getLoggedInUserDetailsSuccess = (
  responseData: any
): LoggedInUserDetailsActionTypes => ({
  type: ACTIONS.GET_LOGGED_IN_USER_DETAILS_SUCCESS,
  payload: { responseData },
});

export const getLoggedInUserDetailsFailure = (
  errorData: unknown
): LoggedInUserDetailsActionTypes => ({
  type: ACTIONS.GET_LOGGED_IN_USER_DETAILS_ERROR,
  payload: { errorData },
});
