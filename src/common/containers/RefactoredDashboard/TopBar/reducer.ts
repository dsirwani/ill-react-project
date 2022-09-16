import ACTIONS from '../../../../utils/configureActions';
import { UserPreferenceState, UpdateUserPreferencesState } from './type';

const initialUserPreferenceState: UserPreferenceState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};

const initialUpdateUserPreferencesState: UpdateUserPreferencesState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};

export const userPreferenceReducer = (
  state: any = {
    userPreferenceData: initialUserPreferenceState,
    updateUserPreferencesData: initialUpdateUserPreferencesState,
  },
  action: any
) => {
  switch (action.type) {
    //Get user preference reducers
    case ACTIONS.USER_PREFERENCE_REQUEST:
      return {
        ...state,
        userPreferenceData: {
          ...initialUserPreferenceState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.USER_PREFERENCE_SUCCESS:
      return {
        ...state,
        userPreferenceData: {
          ...state.userPreferenceData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.USER_PREFERENCE_ERROR:
      return {
        ...state,
        userPreferenceData: {
          ...state.userPreferenceData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.USER_PREFERENCE_RESET:
      return {
        ...state,
        userPreferenceData: {
          ...state.userPreferenceData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    //Update user preferences reducers
    case ACTIONS.UPDATE_USER_PREFERENCES_REQUEST:
      return {
        ...state,
        updateUserPreferencesData: {
          ...initialUpdateUserPreferencesState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.UPDATE_USER_PREFERENCES_SUCCESS:
      return {
        ...state,
        updateUserPreferencesData: {
          ...state.updateUserPreferencesData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.UPDATE_USER_PREFERENCES_ERROR:
      return {
        ...state,
        updateUserPreferencesData: {
          ...state.updateUserPreferencesData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.UPDATE_USER_PREFERENCES_RESET:
      return {
        ...state,
        updateUserPreferencesData: {
          ...state.updateUserPreferencesData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    default:
      return { ...state };
  }
};
