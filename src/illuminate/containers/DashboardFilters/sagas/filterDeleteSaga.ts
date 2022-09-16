import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import { appActionCreator, dashboardFiltersActionCreator } from '../../../../utils/configureActionCreators';
import { configAPI } from '../../../../config/apiDataConfig';
import HTTPService from '../../../../services/httpService';

const httpService = new HTTPService();

export function* filterDeleteDataSaga(action: any): any {
  try {
    const { REQUEST_URL } = configAPI.deleteFilterData();
    const result = yield call(httpService.delete, REQUEST_URL, action.payload);
    const { data, status, data: { message } } = result;
    if (status === 200) {
      let errorMsg = message ? message : "Filter deleted";
      yield put(dashboardFiltersActionCreator.filterDeleteSuccess(data));
      yield put(
        appActionCreator.showMessage({
          errorMsg,
          severity: 'success',
          show: true,
        })
      )
    } else {
      yield put(dashboardFiltersActionCreator.filterDeleteError(data.message));
      yield put(
        appActionCreator.showMessage({
          errorMsg: data?.message,
          severity: 'error',
          show: true,
        })
      );
    }
  } catch (error) {
    const errorMsg =
      error.response && error.response.data
        ? error.response.data.message
        : 'API error';
    yield put(dashboardFiltersActionCreator.filterDeleteError(errorMsg));
    yield put(
      appActionCreator.showMessage({
        errorMsg,
        severity: 'error',
        show: true,
      })
    );
  }
}

export default function* FilterDeleteSaga() {
  yield takeLatest(ACTIONS.FILTER_DELETE_REQUEST, filterDeleteDataSaga);
}
