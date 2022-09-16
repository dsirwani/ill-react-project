import { put, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../../../utils/configureActions';
import { authActionCreator } from '../../../utils/configureActionCreators';
import cognitoUtils from '../../../utils/cognitoUtils';

export function* initializeSessionSaga(action: any) {
  try {
    //.......
    const callbackUrl = action?.payload?.callbackUrl || null;
    yield cognitoUtils.parseCognitoWebResponse(callbackUrl);
    const session = yield cognitoUtils.getCognitoSession();
    if (session) {
      yield put(authActionCreator.setSession({ ...session }));
    }
  } catch (error) {
    //.......
  }
}


export default function* AuthenticationSagas() {
  yield takeEvery(ACTIONS.INIT_SESSION, initializeSessionSaga);
}
