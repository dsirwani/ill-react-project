import { call, put, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../../../utils/configureActions';
import { accountSummaryActionCreator } from '../../../utils/configureActionCreators';
import { configAPI } from '../../../config/apiDataConfig';
import HTTPService from '../../../services/httpService';

const httpService = new HTTPService();

export function* accSummaryDataSaga(action: any): any {
  const accountId = action.payload;
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getAccountData(accountId, clientId);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (
        Object.keys(data.data).length === 0 &&
        data.data.constructor === Object
      ) {
        yield put(
          accountSummaryActionCreator.accSummaryError('No Data Available')
        );
      } else {
        yield put(accountSummaryActionCreator.accSummarySuccess(data.data));
      }
    } else {
      yield put(accountSummaryActionCreator.accSummaryError(data.message));
    }
  } catch (error) {
    yield put(
      accountSummaryActionCreator.accSummaryError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* AccSummarySaga() {
  yield takeEvery(ACTIONS.ACCOUNT_SUMMARY_REQUEST, accSummaryDataSaga);
}
