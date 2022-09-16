import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../utils/configureActions';
import { clientDataActionCreator } from '../../../utils/configureActionCreators';
import { configAPI } from '../../../config/apiDataConfig';
import HTTPService from '../../../services/httpService';

const httpService = new HTTPService();

export function* clientDataSaga(action: any): any {
  const { email, polarisInstance } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getClientData(email, polarisInstance);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data?.items?.length === 0) {
        yield put(
          clientDataActionCreator.clientDataError('Invalid Email domain')
        );
      } else {
        yield put(clientDataActionCreator.clientDataSuccess(data.data));
      }
    } else {
      yield put(clientDataActionCreator.clientDataError(data.message));
    }
  } catch (error) {
    yield put(
      clientDataActionCreator.clientDataError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* ClientDataSaga() {
  yield takeLatest(ACTIONS.CLIENT_DATA_REQUEST, clientDataSaga);
}
