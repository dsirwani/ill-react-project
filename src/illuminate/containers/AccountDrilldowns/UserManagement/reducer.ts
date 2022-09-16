import ACTIONS from '../../../../utils/configureActions';
import { UserProfileState, EditUserProfileState } from './type';

const initialUserProfileState: UserProfileState = {
  loading: false,
  error: false,
  errorMessage: '',
  userProfile: null,
};

const initialEditUserProfileState: EditUserProfileState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};

export const userProfileReducer = (
  state: UserProfileState = initialUserProfileState,
  action: any
) => {
  switch (action.type) {
    case ACTIONS.GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };

    case ACTIONS.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        userProfile: { ...action?.payload } ?? null,
      };

    case ACTIONS.GET_USER_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action?.payload,
        userProfile: null,
      };

    default:
      return { ...state };
  }
};

export const editUserProfileReducer = (
  state: EditUserProfileState = initialEditUserProfileState,
  action: any
) => {
  switch (action.type) {
    case ACTIONS.EDIT_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        data: null
      };

    case ACTIONS.EDIT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        data: { ...action?.payload } ?? null,
      };

    case ACTIONS.EDIT_USER_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action?.payload,
        data: null,
      };

    default:
      return { ...state };
  }
};
