import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../utils/configureActions';
import { siteSelectionActionCreator } from '../../../utils/configureActionCreators';
import { configAPI } from '../../../config/apiDataConfig';
import HTTPService from '../../../services/httpService';

const httpService = new HTTPService();

export function* siteSelectionDataSaga(action: any): any {
  const { user_email, account_id } = action.payload;
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getSiteSelectionData(clientId, user_email, account_id);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data?.items?.length === 0) {
        yield put(
          siteSelectionActionCreator.siteSelectionError('No Data Available')
        );
      } else {
        yield put(siteSelectionActionCreator.siteSelectionSuccess(data.data));
      }
    } else {
      yield put(siteSelectionActionCreator.siteSelectionError(data.message));
    }
  } catch (error) {
    yield put(
      siteSelectionActionCreator.siteSelectionError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* SiteSelectionSaga() {
  yield takeLatest(ACTIONS.SITE_SELECTION_REQUEST, siteSelectionDataSaga);
}
