import ACTIONS from '../../../utils/configureActions';
import { SessionState } from './type';
import { getLocalStorageItem } from '../../../utils/localStorageUtils';

const isLoggedIn: boolean = getLocalStorageItem('accessToken') ? true : false;

const initialState: SessionState = {
  isLoggedIn,
  session: null,
  callbackUrl: '',
  users: [],
};

export const authReducer = (
  state: SessionState = initialState,
  action: any
) => {
  switch (action.type) {
    case ACTIONS.INIT_SESSION:
      const callbackUrl = action?.payload?.callbackUrl || '';
      return {
        ...state,
        callbackUrl,
      };

    case ACTIONS.SET_SESSION:
      const session = action?.payload?.session || null;
      return {
        ...state,
        isLoggedIn: true,
        session,
      };

    case ACTIONS.CLEAR_SESSION:
      return {
        ...initialState,
        isLoggedIn: false,
      };

    case ACTIONS.SET_USERS_DETAILS:
      const users = action?.payload?.users || [];
      return {
        ...state,
        users,
      };

    default:
      return { ...state };
  }
};
