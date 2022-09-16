import { call, put, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../../../utils/configureActions';
import { uploadActionCreator } from '../../../utils/configureActionCreators';
import { configAPI } from '../../../config/apiDataConfig';
import HTTPService from '../../../services/httpService';

const httpService = new HTTPService();

export function* uploadDataSaga(action: any): any {
  const URL_PARAMS = '?workbook=' + action.payload.workbook;
  try {
    const { REQUEST_URL } = configAPI.workbookUpload(URL_PARAMS);
    const config = {
      headers: {
        'Content-Type':
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      },
    };
    const result = yield call(
      httpService.post,
      REQUEST_URL,
      action.payload.file,
      config
    );
    const { data, status } = result;
    if (status === 200) {
      if (data.status === 'success') {
        yield put(uploadActionCreator.uploadSuccess(data));
      } else {
        yield put(uploadActionCreator.uploadError(data.message));
      }
    } else if (status > 400) {
      yield put(uploadActionCreator.uploadError(result.message));
    } else {
      yield put(uploadActionCreator.uploadError('Something went wrong'));
    }
  } catch (error) {
    yield put(uploadActionCreator.uploadError('API error'));
  }
}

export default function* UploadSagas() {
  yield takeEvery(ACTIONS.UPLOAD_DATA_INITIATE, uploadDataSaga);
}
