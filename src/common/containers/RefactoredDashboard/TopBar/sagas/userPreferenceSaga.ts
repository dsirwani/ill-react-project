import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import { userPreferenceActionCreator } from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* userPreferenceDataSaga(action: any): any {
  try {
    const { REQUEST_URL } = configAPI.getUserPreferenceData();
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (Object.keys(data.data).length === 0 && data.data.constructor === Object) {
        yield put(
          userPreferenceActionCreator.userPreferenceError('No Data Available')
        );
      } else {
        yield put(userPreferenceActionCreator.userPreferenceSuccess(data.data));
      }
    } else {
      yield put(userPreferenceActionCreator.userPreferenceError(data.message));
    }
  } catch (error) {
    yield put(
      userPreferenceActionCreator.userPreferenceError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* UserPreferenceDataSaga() {
  yield takeLatest(ACTIONS.USER_PREFERENCE_REQUEST, userPreferenceDataSaga);
}
