import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import { dashboardTemplatesActionCreator } from '../../../../utils/configureActionCreators';
import { configAPI } from '../../../../config/apiDataConfig';
import HTTPService from '../../../../services/httpService';
import { takeEvery } from 'redux-saga/effects';

const httpService = new HTTPService();

export function* templateManagerDataSaga(action: any): any {
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getTemplatesData(clientId);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data?.items?.length === 0) {
        yield put(dashboardTemplatesActionCreator.templateManagerError('No Data Available'));
      } else {
        yield put(dashboardTemplatesActionCreator.templateManagerSuccess(data.data));
      }
    } else {
      yield put(dashboardTemplatesActionCreator.templateManagerError(data.message));
    }
  } catch (error) {
    yield put(
      dashboardTemplatesActionCreator.templateManagerError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export function* getTemplateColumnsSaga(action: any): any {
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  const {finDataType, templateType, columnNo} = action?.payload;
  try {
    const { REQUEST_URL } = configAPI.getTemplatesKPIColumns({clientId, finDataType, templateType} );
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      yield put(dashboardTemplatesActionCreator.getTemplateColumnsSuccess(data.data, finDataType, columnNo));
    } else {
      yield put(dashboardTemplatesActionCreator.getTemplateColumnFailure(data.message));
    }
  } catch (error) {
    yield put(
      dashboardTemplatesActionCreator.getTemplateColumnFailure(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export function* getEditTemplateColumnsSaga(action: any): any {
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  const {finDataType, templateType, templateColumns} = action?.payload;
  try {
    const { REQUEST_URL } = configAPI.getTemplatesKPIColumns({clientId, finDataType, templateType} );
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;

    if (status === 200) {
      yield put(dashboardTemplatesActionCreator.editKPITemplateColumnSuccess(data.data));
      yield put(dashboardTemplatesActionCreator.editKPITemplateColumnDDUpdate(templateColumns));
    } else {
      yield put(dashboardTemplatesActionCreator.editKPITemplateColumnFailure(data.message));
    }
  } catch (error) {
    yield put(
      dashboardTemplatesActionCreator.editKPITemplateColumnFailure(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* TemplateManagerSaga() {
  yield takeLatest(ACTIONS.TEMPLATE_MANAGER_REQUEST, templateManagerDataSaga);
  yield takeEvery(ACTIONS.GET_TEMPLATE_COLUMNS_REQUEST, getTemplateColumnsSaga);
  yield takeEvery(ACTIONS.TEMPLATE_EDIT_COLUMNS_REQUEST, getEditTemplateColumnsSaga);
}