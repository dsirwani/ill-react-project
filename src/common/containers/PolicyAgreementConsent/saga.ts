import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../../../utils/configureActions';
import { plcyAgmntConscentActionCreator } from '../../../utils/configureActionCreators';
import HTTPService from '../../../services/httpService';
import { configAPI } from '../../../config/apiDataConfig';

const httpService = new HTTPService();


export function* acceptPolicyConsentSaga(action: any): any {
  const reqParams = action?.payload ?? null;
  try {
    const { REQUEST_URL } = configAPI.getAcceptConsentPolicies();
    const result = yield call(httpService.post, REQUEST_URL, reqParams, {});
    const { data, status } = result;
    if (status === 200) {
      yield put(plcyAgmntConscentActionCreator.acceptPolicyConsentSuccess({data: data.data, policiesAccepted: true}));
    } else {
      yield put(plcyAgmntConscentActionCreator.acceptPolicyConsentError({message: 'Try again! Something went wrong'}));
    }
  } catch (error) {
    yield put(
      plcyAgmntConscentActionCreator.acceptPolicyConsentError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export function* fetchPolicyConsentSaga(action: any): any {
  try {
    const userEmail = action?.payload?.userEmail?? null;
    const { REQUEST_URL } = configAPI.getAcceptConsentAfterLogin(userEmail);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      yield put(plcyAgmntConscentActionCreator.fetchPolicyConsentSuccess(data.data));
    } else {
      yield put(plcyAgmntConscentActionCreator.fetchPolicyConsentError(data));
    }
  } catch (error) {
    yield put(
      plcyAgmntConscentActionCreator.fetchPolicyConsentError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* PolicyAgreementConsentSagas() {
  yield takeEvery(ACTIONS.ACCEPT_POLICY_CONSENT_REQUEST, acceptPolicyConsentSaga);
  yield takeEvery(ACTIONS.FETCH_POLICY_CONSENT_REQUEST, fetchPolicyConsentSaga);
}
