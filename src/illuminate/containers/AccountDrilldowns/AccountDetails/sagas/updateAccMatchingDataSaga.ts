import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import { appActionCreator, accountDetailsActionCreator } from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* updateAccMatchingDataSaga(action: any): any {
  const { account_id, match_data } = action.payload;
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.updateAccMatchingData(account_id, clientId);
    const result = yield call(httpService.post, REQUEST_URL, match_data, {});
    const { data, status } = result;
    if (status === 200) {
      if (data.status === 'success') {
        const errorMsg = 'Updated record successfully';
        yield put(accountDetailsActionCreator.updateAccMatchingDataSuccess(data));
        yield put(
          appActionCreator.showMessage({
            errorMsg,
            severity: 'success',
            show: true,
          })
        );
      } else {
        const errorMsg = data.message;
        yield put(accountDetailsActionCreator.updateAccMatchingDataError(errorMsg));
        yield put(
          appActionCreator.showMessage({
            errorMsg,
            severity: 'error',
            show: true,
          })
        );
      }
    } else if (status > 400) {
      const errorMsg = result.message;
      yield put(accountDetailsActionCreator.updateAccMatchingDataError(errorMsg));
      yield put(
        appActionCreator.showMessage({
          errorMsg,
          severity: 'error',
          show: true,
        })
      );
    } else {
      const errorMsg = 'Something went wrong';
      yield put(accountDetailsActionCreator.updateAccMatchingDataError(errorMsg));
      yield put(
        appActionCreator.showMessage({
          errorMsg,
          severity: 'error',
          show: true,
        })
      );
    }
  } catch (error) {
    const errorMsg = 'API error';
    yield put(accountDetailsActionCreator.updateAccMatchingDataError('API error'));
    yield put(
      appActionCreator.showMessage({
        errorMsg,
        severity: 'error',
        show: true,
      })
    );
  }
}

export default function* UpdateAccMatchingDataSaga() {
  yield takeLatest(ACTIONS.UPDATE_ACC_MATCHING_DATA_REQUEST, updateAccMatchingDataSaga);
}
