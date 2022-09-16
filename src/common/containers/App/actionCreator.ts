import ACTIONS from '../../../utils/configureActions';
import { AppState } from './type';

export const showMessage = (msgProperties: AppState) => ({
  type: ACTIONS.SHOW_MESSAGE,
  payload: { msgProperties },
});

export const hideMessage = (msgProperties: AppState) => ({
  type: ACTIONS.HIDE_MESSAGE,
  payload: { msgProperties },
});

export const setSession = (session: any) => ({
  type: ACTIONS.SET_SESSION,
  payload: { session },
});

export const clearSession = () => ({
  type: ACTIONS.CLEAR_SESSION,
  payload: {},
});
