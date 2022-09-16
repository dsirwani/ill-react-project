import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import { appActionCreator, userPreferenceActionCreator } from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* updateUserPreferencesSaga(action: any): any {
  const { preferencesData } = action?.payload;
  try {
    const { REQUEST_URL } = configAPI.updateUserPreferencesData();
    const result = yield call(httpService.post, REQUEST_URL, preferencesData, {});
    const { data, status, data: { message } } = result;
    if (status === 200) {
      const errorMsg = message ? message : "User preference(s) updated successfully.";
      yield put(userPreferenceActionCreator.updateUserPreferencesSuccess(data));
      yield put(
        appActionCreator.showMessage({
          errorMsg,
          severity: 'success',
          show: true,
        })
      )
    } else {
      yield put(userPreferenceActionCreator.updateUserPreferencesError(data.message));
      yield put(
        appActionCreator.showMessage({
          errorMsg: data?.message,
          severity: 'error',
          show: true,
        })
      );
    }
  } catch (error) {
    const errorMsg =
      error.response && error.response.data
        ? error.response.data.message
        : 'API error';
    yield put(userPreferenceActionCreator.updateUserPreferencesError(errorMsg));
    yield put(
      appActionCreator.showMessage({
        errorMsg,
        severity: 'error',
        show: true,
      })
    );
  }
}

export default function* UpdateUserPreferencesSaga() {
  yield takeLatest(ACTIONS.UPDATE_USER_PREFERENCES_REQUEST, updateUserPreferencesSaga);
}