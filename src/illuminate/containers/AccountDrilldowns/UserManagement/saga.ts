import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import {
  appActionCreator,
  userProfileActionCreator,
} from '../../../../utils/configureActionCreators';
import { configAPI } from '../../../../config/apiDataConfig';
import HTTPService from '../../../../services/httpService';

const httpService = new HTTPService();

export function* getUserProfileSaga(action: any): any {
  const { clientId, userId, accountId } = action?.payload;
  try {
    const { REQUEST_URL } = configAPI.getUserProfile(
      clientId,
      userId,
      accountId
    );
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      yield put(userProfileActionCreator.getUserProfileSuccess(data.data));
    } else {
      yield put(userProfileActionCreator.getUserProfileError(data.message));
      yield put(
        appActionCreator.showMessage({
          errorMsg: data?.message,
          severity: 'error',
          show: true,
        })
      );
    }
  } catch (error) {
    const errorMsg =
      error.response && error.response.data
        ? error.response.data.message
        : 'API error';
    yield put(userProfileActionCreator.getUserProfileError(errorMsg));
    yield put(
      appActionCreator.showMessage({
        errorMsg,
        severity: 'error',
        show: true,
      })
    );
  }
}

export function* editUserProfileSaga(action: any): any {
  const { accountId, userId, isUploadPicture } = action.payload;
  const { client_id: clientId } = localStorage.getItem('selectedClient')
  ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
  : null;
  let config = {};
  let payload = { data: {...action.payload.data}};
  if (isUploadPicture) {
    config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const form = new FormData();
    form.append('image', action.payload.data);
    payload = { data: {...form}};
  }
  try {
    const { REQUEST_URL } = configAPI.editUserProfile(accountId, clientId, userId);
    const result = yield call(
      httpService.put,
      REQUEST_URL,
      payload,
      config
    );
    const { data, status } = result;
    if (status === 200) {
      const errorMsg = 'User profile updated successfully.';
      yield put(userProfileActionCreator.editUserProfileSuccess(data));
      yield put(
        appActionCreator.showMessage({
          errorMsg,
          severity: 'success',
          show: true,
        })
      );
    } else if (status > 400) {
      const errorMsg = result.message;
      yield put(userProfileActionCreator.editUserProfileError(errorMsg));
      yield put(
        appActionCreator.showMessage({
          errorMsg,
          severity: 'error',
          show: true,
        })
      );
    } else {
      const errorMsg = 'Something went wrong';
      yield put(userProfileActionCreator.editUserProfileError(errorMsg));
      yield put(
        appActionCreator.showMessage({
          errorMsg,
          severity: 'error',
          show: true,
        })
      );
    }
  } catch (error) {
    const errorMsg = 'API error';
    yield put(userProfileActionCreator.editUserProfileError('API error'));
    yield put(
      appActionCreator.showMessage({
        errorMsg,
        severity: 'error',
        show: true,
      })
    );
  }
}

export default function* UserProfileSaga() {
  yield takeLatest(ACTIONS.GET_USER_PROFILE_REQUEST, getUserProfileSaga);
  yield takeEvery(ACTIONS.EDIT_USER_PROFILE_REQUEST, editUserProfileSaga);
}
