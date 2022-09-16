import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import { g2kDataActionCreator } from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* financialDataSaga(action: any): any {
  const { account_id, report_type, reporting_frequency } = action.payload;
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getG2KFinancialsData(clientId, account_id, report_type, reporting_frequency);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (Object.keys(data.data).length === 0 && data.data.constructor === Object) {
        yield put(
          g2kDataActionCreator.g2kFinancialsError('No Data Available')
        );
      } else {
        yield put(g2kDataActionCreator.g2kFinancialsSuccess(data.data));
      }
    } else {
      yield put(g2kDataActionCreator.g2kFinancialsError(data.message));
    }
  } catch (error) {
    yield put(
      g2kDataActionCreator.g2kFinancialsError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* G2KFinancialDataSaga() {
  yield takeLatest(ACTIONS.G2K_FINANCIALS_REQUEST, financialDataSaga);
}
