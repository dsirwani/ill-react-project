import { takeLatest, put, call } from 'redux-saga/effects';
import ACTIONS from '../../../utils/configureActions';
import {
  appActionCreator,
  accountListActionCreator,
} from '../../../utils/configureActionCreators';
import HTTPService from '../../../services/httpService';
import { getClientCommonURL } from '../../../utils/miscUtils';

const httpService = new HTTPService();

const appendCustomer = (data: any) => {
  data.header.unshift({ column: 'account_name', type: 'Account', period_label: '' })
  return data
}

export function* getAccountListSaga(action: any): Generator {
  const { selectedClientId: clientId, filterId, orderBy, sortBy, template } = action?.payload ?? null;
  let requestParams = `per_page=10&client_id=${clientId}&sort_by=${sortBy}&order_by=${orderBy}`;
  if (filterId) requestParams += `&filter_id=${filterId}`;
  if (template) requestParams += `&template_id=${template}`;
  const nextPageUrl = `${getClientCommonURL()}/account-list/?${requestParams}`;
  try {
    const result: any = yield call(httpService.get, nextPageUrl);
    const { data, status } = result;
    if (status === 200) {
      yield put(accountListActionCreator.getAccountSuccess(appendCustomer(data)));
    } else {
      let errorMsg = '';
      errorMsg = status?.status_message ?? data?.errors ?? 'Failed to fetch accounts';
      yield put(accountListActionCreator.getAccountFailure(data));
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
    yield put(accountListActionCreator.getAccountFailure(errorMsg));
    yield put(
      appActionCreator.showMessage({
        errorMsg,
        severity: 'error',
        show: true,
      })
    );
  }
}

export function* getMoreAccountsSaga(action: any): Generator {
  const nextPageUrl = action.payload.nextPageUrl;

  try {
    const result: any = yield call(httpService.get, getClientCommonURL() + nextPageUrl);
    const { data, status } = result;
    if (status === 200) {
      yield put(accountListActionCreator.getMoreAccountSuccess(data));
    } else {
      let errorMsg = '';
      errorMsg =
        status?.status_message ?? data?.errors ?? 'Failed to fetch accounts';
      yield put(accountListActionCreator.getMoreAccountFailure(data));
      yield put(
        appActionCreator.showMessage({
          errorMsg,
          severity: 'error',
          show: true,
        })
      );
    }
  } catch (error) {
    const errorMsg =
      (error && error.response && error.response.statusText) || 'Server Error';
    yield put(accountListActionCreator.getMoreAccountFailure(errorMsg));
    yield put(
      appActionCreator.showMessage({
        errorMsg,
        severity: 'error',
        show: true,
      })
    );
  }
}

export default function* AccountListSagas(): Generator {
  yield takeLatest(ACTIONS.GET_ACCOUNT_LIST_REQUEST, getAccountListSaga);
  yield takeLatest(ACTIONS.GET_MORE_ACCOUNTS_REQUEST, getMoreAccountsSaga);
}
