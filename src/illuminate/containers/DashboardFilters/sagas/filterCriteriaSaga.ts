import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import { dashboardFiltersActionCreator } from '../../../../utils/configureActionCreators';
import { configAPI } from '../../../../config/apiDataConfig';
import HTTPService from '../../../../services/httpService';

const httpService = new HTTPService();

export function* filterCriteriaDataSaga(action: any): any {
  const { template } = action.payload
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getFilterCriteriaData(clientId, template);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data?.items?.length === 0) {
        yield put(
          dashboardFiltersActionCreator.filterCriteriaError('No Data Available')
        );
      } else {
        yield put(dashboardFiltersActionCreator.filterCriteriaSuccess(data.data));
      }
    } else {
      yield put(dashboardFiltersActionCreator.filterCriteriaError(data.message));
    }
  } catch (error) {
    yield put(
      dashboardFiltersActionCreator.filterCriteriaError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}
 
export default function* FilterCriteriaSaga() {
  yield takeLatest(ACTIONS.FILTER_CRITERIA_REQUEST, filterCriteriaDataSaga);
}
