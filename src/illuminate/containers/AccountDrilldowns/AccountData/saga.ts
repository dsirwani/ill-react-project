import { call, put, takeLatest } from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import { accountDataActionCreator } from '../../../../utils/configureActionCreators';
import { configAPI } from '../../../../config/apiDataConfig';
import HTTPService from '../../../../services/httpService';

const httpService = new HTTPService();

export function* accountDataSaga(action: any): any {
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  const { account_id, data_type, date } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getAccountsData(clientId, account_id, data_type, date);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data?.items?.length === 0) {
        yield put(
          accountDataActionCreator.accountDataError('No Data Available')
        );
      } else {
        yield put(accountDataActionCreator.accountDataSuccess(data.data));
      }
    } else {
      yield put(accountDataActionCreator.accountDataError(data.message));
    }
  } catch (error) {
    yield put(
      accountDataActionCreator.accountDataError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export function* getMoreAccountDataSaga(action: any): any {
  const { nextPageUrl } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getMoreAccountsData(nextPageUrl);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.items?.length === 0) {
        yield put(
          accountDataActionCreator.getMoreAccountDataError('No Data Available')
        );
      } else {
        yield put(
          accountDataActionCreator.getMoreAccountDataSuccess(data.data)
        );
      }
    } else {
      yield put(accountDataActionCreator.getMoreAccountDataError(data.message));
    }
  } catch (error) {
    yield put(
      accountDataActionCreator.getMoreAccountDataError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* AccountDataSaga() {
  yield takeLatest(ACTIONS.ACCOUNT_DATA_REQUEST, accountDataSaga);
  yield takeLatest(
    ACTIONS.GET_MORE_ACCOUNT_DATA_REQUEST,
    getMoreAccountDataSaga
  );
}
