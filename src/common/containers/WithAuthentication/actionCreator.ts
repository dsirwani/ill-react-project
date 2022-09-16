import ACTIONS from '../../../utils/configureActions';
import { SessionActionTypes } from './type';

export const initSession = ( callbackUrl: string ): SessionActionTypes => (
  {
    type: ACTIONS.INIT_SESSION,
    payload: { callbackUrl }
  }
);

export const setSession = ( session: any ): SessionActionTypes => (
  {
    type: ACTIONS.SET_SESSION,
    payload: { session }
  }
);

export const clearSession = (): SessionActionTypes => (
  {
    type: ACTIONS.CLEAR_SESSION,
    payload: {}
  }
);

export const getUserList = (): SessionActionTypes => (
  {
    type: ACTIONS.GET_USER_LIST,
    payload: {}
  }
);

export const setUsersDetails = ( users: any ): SessionActionTypes => (
  {
    type: ACTIONS.SET_USERS_DETAILS,
    payload: { users }
  }
);