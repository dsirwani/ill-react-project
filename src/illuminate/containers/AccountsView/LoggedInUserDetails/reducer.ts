import ACTIONS from '../../../../utils/configureActions';
import { LoggedInUserDetailsState } from './type';

export const initialState: LoggedInUserDetailsState = {
  isLoading: false,
  loggedInUserDetails: null,
};

export const loggedInUserDetailsReducer = (
  state: LoggedInUserDetailsState = initialState,
  action: any
) => {
  switch (action.type) {
    case ACTIONS.GET_LOGGED_IN_USER_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ACTIONS.GET_LOGGED_IN_USER_DETAILS_SUCCESS:
			// localStorage.setItem('user_role',JSON.stringify(action?.payload?.responseData?.data?.role_details));
      return {
        ...state,
        loggedInUserDetails:
          action?.payload?.responseData?.data ?? state.loggedInUserDetails,
        isLoading: false,
      };

    case ACTIONS.GET_LOGGED_IN_USER_DETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return { ...state };
  }
};
