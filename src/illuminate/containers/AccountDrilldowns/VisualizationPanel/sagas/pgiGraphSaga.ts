import {
  call,
  put, takeEvery
} from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import { visualizationActionCreator } from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* pgiGraphDataSaga(action: any): any {
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  const { account_id, period, year, product_ids, all_products } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getPGIGraphData(clientId, account_id, period, year, all_products ? 'all' : product_ids);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result
    if (status === 200) {
      if (Object.keys(data.data).length === 0 && data.data.constructor === Object) {
        yield put(visualizationActionCreator.PGIGraphError('No Data Available'));
      } else {
        yield put(visualizationActionCreator.PGIGraphSuccess(data.data));
      }
    } else {
      yield put(visualizationActionCreator.PGIGraphError(data.message));
    }
  } catch (error) {
    yield put(visualizationActionCreator.PGIGraphError(error.response && error.response.data ? error.response.data.message : 'API error'));
  }
}

export default function* PGIGraphSaga() {
  yield takeEvery(ACTIONS.PGI_GRAPH_DATA_REQUEST, pgiGraphDataSaga);
};
