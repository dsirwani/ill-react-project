import {
  call,
  put, takeLatest
} from 'redux-saga/effects';
import ACTIONS from '../../../../utils/configureActions';
import { appActionCreator, dashboardFiltersActionCreator } from '../../../../utils/configureActionCreators';
import { configAPI } from '../../../../config/apiDataConfig';
import HTTPService from '../../../../services/httpService';

const httpService = new HTTPService();

export function* saveFilterSaga(action: any): any {
  const {filterData, applyFilter, updateFilter } = action?.payload;
  try {
    const { REQUEST_URL } = configAPI.savefilterToStore();
    const apiMethod = updateFilter ? httpService.put : httpService.post;
    const result = yield call(apiMethod, REQUEST_URL, filterData, {});
    const { data, status, data: { message } } = result;
    if (status === 200 || status === 201) {
      const errorMsg = message ? message : "Filter Created Successfully.";
      yield put(dashboardFiltersActionCreator.saveFilterSuccess(data?.data?.items));
      if(applyFilter){
        const filterId = data?.data?.items?.filter_id??'';
        yield put( dashboardFiltersActionCreator.applyFilterId(filterId));
      } else {
        yield put(
          appActionCreator.showMessage({
            errorMsg,
            severity: 'success',
            show: true,
          })
        )
      }    
    } else {
      yield put(dashboardFiltersActionCreator.saveFilterError(data.data.message));
    }
  } catch (error) {
    yield put(
      dashboardFiltersActionCreator.saveFilterError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}
 
export default function* FilterCriteriaSaga() {
  yield takeLatest(ACTIONS.SAVE_FILTER_REQUEST, saveFilterSaga);
}
