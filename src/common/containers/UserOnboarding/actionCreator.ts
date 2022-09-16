import ACTIONS from '../../../utils/configureActions';
import { UserOnboardingStatusTypes } from './type';

export const getUserOnboardingStatus = (): UserOnboardingStatusTypes => (
  {
    type: ACTIONS.GET_USER_ONBOARDING_STATUS
  }
);

export const userOnboardingStatusSuccess = (data: any): UserOnboardingStatusTypes => (
  {
    type: ACTIONS.USER_ONBOARDING_STATUS_SUCCESS,
    payload: data
  }
);

export const userOnboardingStatusError = (errorMsg: string): UserOnboardingStatusTypes => (
  {
    type: ACTIONS.USER_ONBOARDING_STATUS_ERROR,
    payload: errorMsg
  }
);

export const resetUserOnboardingStatus = (): UserOnboardingStatusTypes => (
  {
    type: ACTIONS.RESET_USER_ONBOARDING_STATUS
  }
);