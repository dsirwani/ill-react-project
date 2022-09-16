import { call, put, takeLatest } from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import {
  appActionCreator,
  prodCategoryActionCreator,
} from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* prodCategoryDataSaga(action: any): any {
  const { accountId, tabName, level, parentGrp } = action.payload;
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getProductCategoryData(
      accountId,
      tabName,
      clientId
    );
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      yield put(
        prodCategoryActionCreator.prodCategorySuccess({
          ...data.data,
          level,
          parentGrp,
        })
      );
    } else {
      let errorMsg = '';
      errorMsg = data?.message ?? 'Failed to fetch products';
      yield put(prodCategoryActionCreator.prodCategoryError(data.message));
      yield put(
        appActionCreator.showMessage({
          errorMsg,
          severity: 'error',
          show: true,
        })
      );
    }
  } catch (error) {
    let errorMsg = '';
    errorMsg = error?.response?.data?.message ?? 'API error';
    yield put(prodCategoryActionCreator.prodCategoryError(errorMsg));
    yield put(
      appActionCreator.showMessage({
        errorMsg,
        severity: 'error',
        show: true,
      })
    );
  }
}

export function* getMoreProdCategoryDataSaga(action: any): any {
  const { nextPageUrl, tabName } = action.payload;
  try {
    const { REQUEST_URL } = configAPI.getMoreProductCategoryData(
      nextPageUrl,
      tabName
    );
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      if (data?.items?.length === 0) {
        yield put(
          prodCategoryActionCreator.getMoreProdCategoryError(
            'No Data Available'
          )
        );
      } else {
        yield put(
          prodCategoryActionCreator.getMoreProdCategorySuccess(data.data)
        );
      }
    } else {
      yield put(
        prodCategoryActionCreator.getMoreProdCategoryError(data.message)
      );
    }
  } catch (error) {
    yield put(
      prodCategoryActionCreator.getMoreProdCategoryError(
        error.response && error.response.data
          ? error.response.data.message
          : 'API error'
      )
    );
  }
}

export default function* ProdCategorySaga() {
  yield takeLatest(ACTIONS.PRODUCT_CATEGORY_REQUEST, prodCategoryDataSaga);
  yield takeLatest(
    ACTIONS.GET_MORE_PRODUCT_CATEGORY_REQUEST,
    getMoreProdCategoryDataSaga
  );
}
