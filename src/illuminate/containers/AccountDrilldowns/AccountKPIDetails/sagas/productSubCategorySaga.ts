import { call, put, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../../../../../utils/configureActions';
import {
  appActionCreator,
  prodCategoryActionCreator,
} from '../../../../../utils/configureActionCreators';
import { configAPI } from '../../../../../config/apiDataConfig';
import HTTPService from '../../../../../services/httpService';

const httpService = new HTTPService();

export function* prodSubCategoryDataSaga(action: any): any {
  const { productId, account_id, tabName, level, parentGrp } = action.payload;
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : null;
  try {
    const { REQUEST_URL } = configAPI.getProductData(
      productId,
      account_id,
      tabName,
      clientId
    );
    const result = yield call(httpService.get, REQUEST_URL);
    const { data, status } = result;
    if (status === 200) {
      yield put(
        prodCategoryActionCreator.prodSubCategorySuccess({
          ...data.data,
          level,
          parentGrp,
        })
      );
    } else {
      let errorMsg = '';
      errorMsg = data?.message ?? 'Failed to fetch accounts';
      yield put(prodCategoryActionCreator.prodSubCategoryError(data.message));
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
    yield put(prodCategoryActionCreator.prodSubCategoryError(errorMsg));
    yield put(
      appActionCreator.showMessage({
        errorMsg,
        severity: 'error',
        show: true,
      })
    );
  }
}

export default function* ProdSubCategorySaga() {
  yield takeEvery(
    ACTIONS.PRODUCT_SUB_CATEGORY_REQUEST,
    prodSubCategoryDataSaga
  );
}
