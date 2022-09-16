import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import { dashboardFiltersActionCreator } from '../../../../utils/configureActionCreators';
import { configAPI } from '../../../../config/apiDataConfig';
import HTTPService from '../../../../services/httpService';

const httpService = new HTTPService();

const formatData = (data: any) => {
  let updatedData: any = []
  updatedData = data.map((item: string, index: number) => {
    return {
      value: item,
      title: item,
    };
  });
  return updatedData
}

export function* tagsDataSaga(action: any): any {
  const { query } = action.payload
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getTagData(clientId, query);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data?.items?.length === 0) {
        yield put(
          dashboardFiltersActionCreator.tagsDataError('No Data Available')
        );
      } else {
        yield put(dashboardFiltersActionCreator.tagsDataSuccess(formatData(data?.data?.items)));
      }
    } else {
      yield put(dashboardFiltersActionCreator.tagsDataError(data.message));
    }
  } catch (error) {
    yield put(
      dashboardFiltersActionCreator.tagsDataError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* TagsDataSaga() {
  yield takeLatest(ACTIONS.TAGS_DATA_REQUEST, tagsDataSaga);
}
