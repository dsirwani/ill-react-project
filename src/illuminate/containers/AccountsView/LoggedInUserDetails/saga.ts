import {
  takeEvery, put,
  call
} from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import {
  appActionCreator,
  loggedInUserDetailsActionCreator,
} from '../../../../utils/configureActionCreators';
import HTTPService from '../../../../services/httpService';
import { configAPI } from '../../../../config/apiDataConfig';

const httpService = new HTTPService();

export function* getLoggedInUserDetailsSaga(action: any): Generator {
  const clientId = action?.payload?.clientId ?? null;
  const email = action?.payload?.email ?? null;

  try {
    const { REQUEST_URL } = configAPI.getLoggedInUserDetails(clientId, email);
    const result: any = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      yield put(
        loggedInUserDetailsActionCreator.getLoggedInUserDetailsSuccess(data)
      );
      localStorage.setItem('user_role', JSON.stringify(data?.data?.role_details));
    } else {
      let errorMsg = '';
      errorMsg =
        status?.status_message ??
        data?.errors ??
        'Failed to fetch User Details';
      yield put(
        loggedInUserDetailsActionCreator.getLoggedInUserDetailsFailure(data)
      );
      yield put(
        appActionCreator.showMessage({
          errorMsg,
          severity: 'error',
          show: true,
        })
      );
    }  
  } catch (error) {
    const errorMsg = error?.response?.data?.message ?? 'Server Error';
    yield put(
      loggedInUserDetailsActionCreator.getLoggedInUserDetailsFailure(errorMsg)
    );
    yield put(
      appActionCreator.showMessage({
        errorMsg,
        severity: 'error',
        show: true,
      })
    );
  }
}

export default function* LoggedInUserDetailsSaga(): Generator {
  yield takeEvery(
    ACTIONS.GET_LOGGED_IN_USER_DETAILS_REQUEST,
    getLoggedInUserDetailsSaga
  );
}
