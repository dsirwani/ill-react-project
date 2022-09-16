import { call, put, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import { visualizationActionCreator } from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* revenuePlanDataSaga(action: any): any {
  const {
    account_id,
    period,
    year,
    product_ids,
    all_products,
  } = action.payload;
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getRevenuePlanData(
      account_id,
      period,
      year,
      all_products ? 'all' : product_ids,
      clientId
    );
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data.length === 0) {
        yield put(
          visualizationActionCreator.revenuePlanError('No Data Available')
        );
      } else {
        yield put(visualizationActionCreator.revenuePlanSuccess(data.data));
      }
    } else {
      yield put(visualizationActionCreator.revenuePlanError(data.message));
    }
  } catch (error) {
    yield put(
      visualizationActionCreator.revenuePlanError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* RevenuePlanSaga() {
  yield takeEvery(ACTIONS.REVENUE_PLAN_REQUEST, revenuePlanDataSaga);
}
