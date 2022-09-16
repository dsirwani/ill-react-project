import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import { appActionCreator, dashboardTemplatesActionCreator } from '../../../../utils/configureActionCreators';
import { configAPI } from '../../../../config/apiDataConfig';
import HTTPService from '../../../../services/httpService';

const httpService = new HTTPService();

export function* templateDeleteDataSaga(action: any): any {
  try {
    const { REQUEST_URL } = configAPI.deleteTemplateData();
    const result = yield call(httpService.delete, REQUEST_URL, action.payload);
    const { data, status, data: { message } } = result;
    if (status === 200) {
      let errorMsg = message ? message : "Template deleted";
      yield put(dashboardTemplatesActionCreator.templateDeleteSuccess(data));
      yield put(
        appActionCreator.showMessage({
          errorMsg,
          severity: 'success',
          show: true,
        })
      )
    } else {
      yield put(dashboardTemplatesActionCreator.templateDeleteError(data.message));
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
    yield put(dashboardTemplatesActionCreator.templateDeleteError(errorMsg));
    yield put(
      appActionCreator.showMessage({
        errorMsg,
        severity: 'error',
        show: true,
      })
    );
  }
}

export default function* TemplateDeleteSaga() {
  yield takeLatest(ACTIONS.TEMPLATE_DELETE_REQUEST, templateDeleteDataSaga);
}
