import {
  call,
  put, takeEvery
} from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import { visualizationActionCreator } from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* bcEstimatesDataSaga(action: any): any {
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  const { account_id, period, year, product_ids, all_products } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getBCEstimatesData(clientId, account_id, period, year, all_products ? 'all' : product_ids);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result
    if (status === 200) {
      if (Object.keys(data.data).length === 0 && data.data.constructor === Object) {
        yield put(visualizationActionCreator.BCEstimatesError('No Data Available'));
      } else {
        yield put(visualizationActionCreator.BCEstimatesSuccess(data.data));
      }
    } else {
      yield put(visualizationActionCreator.BCEstimatesError(data.message));
    }
  } catch (error) {
    yield put(visualizationActionCreator.BCEstimatesError(error.response && error.response.data ? error.response.data.message : 'API error'));
  }
}

export default function* BCEstimatesSaga() {
  yield takeEvery(ACTIONS.BC_ESTIMATES_DATA_REQUEST, bcEstimatesDataSaga);
};
