import { call, put, takeLatest } from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import { accountTeamActionCreator } from '../../../../utils/configureActionCreators';
import { configAPI } from '../../../../config/apiDataConfig';
import HTTPService from '../../../../services/httpService';

const httpService = new HTTPService();

export function* accountTeamDataSaga(action: any): any {
  const { account_id, clientId } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getAccountTeamData(account_id, clientId);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data?.items?.length === 0) {
        yield put(
          accountTeamActionCreator.accountTeamError('No Data Available')
        );
      } else {
        yield put(accountTeamActionCreator.accountTeamSuccess(data.data));
      }
    } else {
      yield put(accountTeamActionCreator.accountTeamError(data.message));
    }
  } catch (error) {
    yield put(
      accountTeamActionCreator.accountTeamError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export function* getMoreAccountTeamDataSaga(action: any): any {
  const { nextPageUrl } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getMoreAccountTeamData(nextPageUrl);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.items?.length === 0) {
        yield put(
          accountTeamActionCreator.getMoreAccountTeamError('No Data Available')
        );
      } else {
        yield put(
          accountTeamActionCreator.getMoreAccountTeamSuccess(data.data)
        );
      }
    } else {
      yield put(accountTeamActionCreator.getMoreAccountTeamError(data.message));
    }
  } catch (error) {
    yield put(
      accountTeamActionCreator.getMoreAccountTeamError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* AccountTeamSaga() {
  yield takeLatest(ACTIONS.ACCOUNT_TEAM_REQUEST, accountTeamDataSaga);
  yield takeLatest(
    ACTIONS.GET_MORE_ACCOUNT_TEAM_REQUEST,
    getMoreAccountTeamDataSaga
  );
}
