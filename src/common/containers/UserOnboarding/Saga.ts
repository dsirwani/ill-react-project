import {
  call, put, takeLatest
} from 'redux-saga/effects';
import { UserOnBoardingActionCreator } from '../../../utils/configureActionCreators';
import ACTIONS from '../../../utils/configureActions';
import { configAPI } from '../../../config/apiDataConfig';
import HTTPService from '../../../services/httpService';

const httpService = new HTTPService();

export function* getUserOnboardingStatusSaga(action: any): any {
  try {
    const { REQUEST_URL } = configAPI.getUserOnboardingStatusData();
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    console.log(data.data)
    if (status === 200) {
      yield put(UserOnBoardingActionCreator.userOnboardingStatusSuccess(data.data));
    }    
  } catch (error) {
    console.log('error.response', error.response);
    yield put(
      UserOnBoardingActionCreator.userOnboardingStatusError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* UserOnboardingStatusSaga() {
  yield takeLatest(ACTIONS.GET_USER_ONBOARDING_STATUS, getUserOnboardingStatusSaga);
}