import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import { accountDetailsActionCreator } from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* accMatchingSearchDataSaga(action: any): any {
  const { search_type, search_string } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getAccMatchingSearchData(search_type, search_string);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data?.items?.length === 0) {
        yield put(
          accountDetailsActionCreator.accMatchingSearchDataError('No Data Available')
        );
      } else {
        yield put(accountDetailsActionCreator.accMatchingSearchDataSuccess(data.data));
      }
    } else {
      yield put(accountDetailsActionCreator.accMatchingSearchDataError(data.message));
    }
  } catch (error) {
    yield put(
      accountDetailsActionCreator.accMatchingSearchDataError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* AccMatchingSearchDataSaga() {
  yield takeLatest(ACTIONS.ACC_MATCHING_SEARCH_DATA_REQUEST, accMatchingSearchDataSaga);
}
