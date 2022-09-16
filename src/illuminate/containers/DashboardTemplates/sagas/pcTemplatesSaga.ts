import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import { getDefaultTemplate } from '../../../../utils/miscUtils';
import { dashboardTemplatesActionCreator } from '../../../../utils/configureActionCreators';
import { configAPI } from '../../../../config/apiDataConfig';
import HTTPService from '../../../../services/httpService';

const httpService = new HTTPService();

export function* pcTemplatesDataSaga(action: any): any {
  // const { user } = action.payload
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getPCTemplatesData(clientId);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data?.items?.length === 0) {
        yield put(
          dashboardTemplatesActionCreator.pcTemplatesError('No Data Available')
        );
      } else {
        yield put(dashboardTemplatesActionCreator.pcTemplatesSuccess(data.data));
        yield put(dashboardTemplatesActionCreator.setDefaultTemplate(getDefaultTemplate(data?.data?.items)));
      }
    } else {
      yield put(dashboardTemplatesActionCreator.pcTemplatesError(data.message));
    }
  } catch (error) {
    yield put(
      dashboardTemplatesActionCreator.pcTemplatesError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* PCTemplatesSaga() {
  yield takeLatest(ACTIONS.PC_TEMPLATES_REQUEST, pcTemplatesDataSaga);
}
