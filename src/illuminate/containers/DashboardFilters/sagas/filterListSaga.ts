import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import { dashboardFiltersActionCreator } from '../../../../utils/configureActionCreators';
import { configAPI } from '../../../../config/apiDataConfig';
import HTTPService from '../../../../services/httpService';

const httpService = new HTTPService();

export function* filterListDataSaga(action: any): any {
  const { user, template } = action.payload
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getFilterListData(clientId, user, template);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data?.items?.length === 0) {
        yield put(
          dashboardFiltersActionCreator.filterListError('No Data Available')
        );
      } else {
        yield put(dashboardFiltersActionCreator.filterListSuccess(data.data));
      }
    } else {
      yield put(dashboardFiltersActionCreator.filterListError(data.message));
    }
  } catch (error) {
    yield put(
      dashboardFiltersActionCreator.filterListError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* FilterListSaga() {
  yield takeLatest(ACTIONS.FILTER_LIST_REQUEST, filterListDataSaga);
}
