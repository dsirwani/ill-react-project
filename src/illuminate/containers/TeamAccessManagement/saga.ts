import { call, put, takeLatest } from 'redux-saga/effects';
import ACTIONS from '../../../utils/configureActions';
import { clientUsersActionCreator } from '../../../utils/configureActionCreators';
import { configAPI } from '../../../config/apiDataConfig';
import HTTPService from '../../../services/httpService';

const httpService = new HTTPService();

export function* clientUsersListSaga(action: any): any {
  const { clientId } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getClientUsersList(clientId);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data?.items?.length === 0) {
        yield put(
          clientUsersActionCreator.clientUsersError('No Data Available')
        );
      } else {
        yield put(clientUsersActionCreator.clientUsersSuccess(data.data));
      }
    } else {
      yield put(clientUsersActionCreator.clientUsersError(data.message));
    }
  } catch (error) {
    yield put(
      clientUsersActionCreator.clientUsersError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export function* getMoreClientUsersListSaga(action: any): any {
  const { nextPageUrl } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getMoreClientUsersList(nextPageUrl);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.items?.length === 0) {
        yield put(
          clientUsersActionCreator.getMoreClientUsersError('No Data Available')
        );
      } else {
        yield put(
          clientUsersActionCreator.getMoreClientUsersSuccess(data.data)
        );
      }
    } else {
      yield put(clientUsersActionCreator.getMoreClientUsersError(data.message));
    }
  } catch (error) {
    yield put(
      clientUsersActionCreator.getMoreClientUsersError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* TeamManagementSaga() {
  yield takeLatest(ACTIONS.CLIENT_USERS_REQUEST, clientUsersListSaga);
  yield takeLatest(
    ACTIONS.GET_MORE_CLIENT_USERS_REQUEST,
    getMoreClientUsersListSaga
  );
}
