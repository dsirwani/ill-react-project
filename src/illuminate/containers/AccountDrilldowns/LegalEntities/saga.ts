import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import { legalEntitiesActionCreator } from '../../../../utils/configureActionCreators';
import { configAPI } from '../../../../config/apiDataConfig';
import HTTPService from '../../../../services/httpService';

const httpService = new HTTPService();

export function* legalEntitiesDataSaga(action: any): any {
  const { account_id } = action.payload;
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getLEIData(clientId, account_id);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (Object.keys(data.data).length === 0 && data.data.constructor === Object) {
        yield put(
          legalEntitiesActionCreator.legalEntitiesError('No Data Available')
        );
      } else {
        yield put(legalEntitiesActionCreator.legalEntitiesSuccess(data.data));
      }
    } else {
      yield put(legalEntitiesActionCreator.legalEntitiesError(data.message));
    }
  } catch (error) {
    yield put(
      legalEntitiesActionCreator.legalEntitiesError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* LegalEntitiesSaga() {
  yield takeLatest(ACTIONS.LEGAL_ENTITIES_REQUEST, legalEntitiesDataSaga);
}