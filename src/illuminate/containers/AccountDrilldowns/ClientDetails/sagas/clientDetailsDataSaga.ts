import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import { clientDetailsActionCreator } from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* clientDetailsDataSaga(action: any): any {
  const { client_id } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getClientDetailsData(client_id);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (Object.keys(data.data).length === 0 && data.data.constructor === Object) {
        yield put(
          clientDetailsActionCreator.clientDetailsError('No Data Available')
        );
      } else {
        yield put(clientDetailsActionCreator.clientDetailsSuccess(data.data));
      }
    } else {
      yield put(clientDetailsActionCreator.clientDetailsError(data.message));
    }
  } catch (error) {
    yield put(
      clientDetailsActionCreator.clientDetailsError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* ClientDetailsSaga() {
  yield takeLatest(ACTIONS.CLIENT_DETAILS_REQUEST, clientDetailsDataSaga);
}
