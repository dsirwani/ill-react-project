import {
  call,
  put, takeEvery
} from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import { appActionCreator, dashboardTemplatesActionCreator } from '../../../../utils/configureActionCreators';
import { configAPI } from '../../../../config/apiDataConfig';
import HTTPService from '../../../../services/httpService';

const httpService = new HTTPService();

export function* createTemplateSaga(action: any): any {
  try {
    const {data: requestData, editTemplate} = action.payload;

    const { REQUEST_URL } = configAPI.createTemplate();
    const result = editTemplate ? 
                    yield call(httpService.put, REQUEST_URL, requestData) : 
                    yield call(httpService.post, REQUEST_URL, requestData, {});
    const { data, status, data: { message } } = result;
    if (status === 200 || status === 201) {
      let errorMsg = message ? message : editTemplate ? "Template created successfully" : "Template created successfully";
      yield put(dashboardTemplatesActionCreator.createTemplateSuccess(data));
      yield put(
        appActionCreator.showMessage({
          errorMsg,
          severity: 'success',
          show: true,
        })
      );
      yield put(dashboardTemplatesActionCreator.resetKPITemplateColumn({}));
    } else {
      yield put(dashboardTemplatesActionCreator.createTemplateError(data.message));
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
    yield put(dashboardTemplatesActionCreator.createTemplateError(errorMsg));
    yield put(
      appActionCreator.showMessage({
        errorMsg,
        severity: 'error',
        show: true,
      })
    );
  }
}

export default function* CreateTemplateSaga() {
  yield takeEvery(ACTIONS.CREATE_TEMPLATE_REQUEST, createTemplateSaga);
}
