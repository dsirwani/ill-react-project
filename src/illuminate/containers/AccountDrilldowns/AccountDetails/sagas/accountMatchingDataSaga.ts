import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import { accountDetailsActionCreator } from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* accountMatchingDataSaga(action: any): any {
  const { account_id, match_type } = action.payload;
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getAccountMatchingData(account_id, clientId, match_type);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (Object.keys(data.data).length === 0 && data.data.constructor === Object) {
        yield put(
          accountDetailsActionCreator.accountMatchingDataError('No Data Available')
        );
      } else {
        yield put(accountDetailsActionCreator.accountMatchingDataSuccess(data.data));
      }
    } else {
      yield put(accountDetailsActionCreator.accountMatchingDataError(data.message));
    }
  } catch (error) {
    yield put(
      accountDetailsActionCreator.accountMatchingDataError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* AccountMatchingDataSaga() {
  yield takeLatest(ACTIONS.ACCOUNT_MATCHING_DATA_REQUEST, accountMatchingDataSaga);
}
