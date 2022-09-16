import { call, put, takeLatest } from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import { accountDetailsActionCreator } from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* accountUsersDataSaga(action: any): any {
  const { account_id, clientId } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getAccountTeamData(account_id, clientId);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data?.items?.length === 0) {
        yield put(
          accountDetailsActionCreator.accountUsersError('No Data Available')
        );
      } else {
        yield put(accountDetailsActionCreator.accountUsersSuccess(data.data));
      }
    } else {
      yield put(accountDetailsActionCreator.accountUsersError(data.message));
    }
  } catch (error) {
    yield put(
      accountDetailsActionCreator.accountUsersError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export function* getMoreAccountUsersDataSaga(action: any): any {
  const { nextPageUrl } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getMoreAccountTeamData(nextPageUrl);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.items?.length === 0) {
        yield put(
          accountDetailsActionCreator.getMoreAccountUsersError(
            'No Data Available'
          )
        );
      } else {
        yield put(
          accountDetailsActionCreator.getMoreAccountUsersSuccess(data.data)
        );
      }
    } else {
      yield put(
        accountDetailsActionCreator.getMoreAccountUsersError(data.message)
      );
    }
  } catch (error) {
    yield put(
      accountDetailsActionCreator.getMoreAccountUsersError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* AccountUsersSaga() {
  yield takeLatest(ACTIONS.ACCOUNT_USERS_REQUEST, accountUsersDataSaga);
  yield takeLatest(
    ACTIONS.GET_MORE_ACCOUNT_USERS_REQUEST,
    getMoreAccountUsersDataSaga
  );
}
