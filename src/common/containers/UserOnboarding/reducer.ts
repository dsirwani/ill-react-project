import ACTIONS from '../../../utils/configureActions';
import { UserOnboardingStatusState } from './type';

const userOnboardingStatus: UserOnboardingStatusState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
}

export const userOnboardingReducer = (
  state: UserOnboardingStatusState = userOnboardingStatus,
  action: any
) => {
  switch (action.type) {
    case ACTIONS.GET_USER_ONBOARDING_STATUS:
      return {
        ...state,
          loading: true,
      };

    case ACTIONS.USER_ONBOARDING_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        data: action.payload,
      };

    case ACTIONS.USER_ONBOARDING_STATUS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
        data: null,
      };

    case ACTIONS.RESET_USER_ONBOARDING_STATUS:
      return {
        ...userOnboardingStatus
      }

    default:
      return { ...state };
  }
};
