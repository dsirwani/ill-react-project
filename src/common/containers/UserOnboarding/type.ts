import Actions from '../../../utils/configureActions';

export interface UserOnboardingStatusState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface GetUserOnboardingStatusAction {
  type: typeof Actions.GET_USER_ONBOARDING_STATUS;
}

interface UserOnboardingStatusSuccessAction {
  type: typeof Actions.USER_ONBOARDING_STATUS_SUCCESS;
  payload: any
}

interface UserOnboardingStatusErrorAction {
  type: typeof Actions.USER_ONBOARDING_STATUS_ERROR;
  payload: any
}

interface ResetUserOnboardingStatus {
  type: typeof Actions.RESET_USER_ONBOARDING_STATUS
}

export type UserOnboardingStatusTypes = 
  | GetUserOnboardingStatusAction
  | UserOnboardingStatusSuccessAction
  | UserOnboardingStatusErrorAction
  | ResetUserOnboardingStatus;