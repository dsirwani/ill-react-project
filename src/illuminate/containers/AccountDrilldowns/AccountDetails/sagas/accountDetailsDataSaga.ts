import { call, put, takeLatest } from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import { accountDetailsActionCreator } from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* accountDetailsDataSaga(action: any): any {
  const { account_id } = action.payload;
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getAccountDetailsData(
      account_id,
      clientId
    );
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (
        Object.keys(data.data).length === 0 &&
        data.data.constructor === Object
      ) {
        yield put(
          accountDetailsActionCreator.accountDetailsError('No Data Available')
        );
      } else {
        yield put(accountDetailsActionCreator.accountDetailsSuccess(data.data));
      }
    } else {
      yield put(accountDetailsActionCreator.accountDetailsError(data.message));
    }
  } catch (error) {
    yield put(
      accountDetailsActionCreator.accountDetailsError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* AccountDetailsSaga() {
  yield takeLatest(ACTIONS.ACCOUNT_DETAILS_REQUEST, accountDetailsDataSaga);
}
