import { call, put, takeLatest } from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import { visualizationActionCreator } from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* prodCatFilterDataSaga(action: any): any {
  const { accountId } = action.payload;
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getProductCategoryFilterData(
      accountId,
      clientId
    );
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.data?.items.length === 0) {
        yield put(
          visualizationActionCreator.prodCatFilterError('No Data Available')
        );
      } else {
        yield put(visualizationActionCreator.prodCatFilterSuccess(data.data));
      }
    } else {
      yield put(visualizationActionCreator.prodCatFilterError(data.message));
    }
  } catch (error) {
    yield put(
      visualizationActionCreator.prodCatFilterError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export function* getMoreProdCatFilterDataSaga(action: any): any {
  const { nextPageUrl } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getMoreProdCatFilterData(nextPageUrl);
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.items?.length === 0) {
        yield put(
          visualizationActionCreator.getMoreProdCatFilterError(
            'No Data Available'
          )
        );
      } else {
        yield put(
          visualizationActionCreator.getMoreProdCatFilterSuccess(data.data)
        );
      }
    } else {
      yield put(
        visualizationActionCreator.getMoreProdCatFilterError(data.message)
      );
    }
  } catch (error) {
    yield put(
      visualizationActionCreator.getMoreProdCatFilterError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* ProdCatFilterSaga() {
  yield takeLatest(ACTIONS.PROD_CAT_FILTER_REQUEST, prodCatFilterDataSaga);
  yield takeLatest(
    ACTIONS.GET_MORE_PROD_CAT_FILTER_REQUEST,
    getMoreProdCatFilterDataSaga
  );
}
