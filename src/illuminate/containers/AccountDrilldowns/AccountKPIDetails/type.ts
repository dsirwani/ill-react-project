import Actions from '../../../../utils/configureActions';

//Product Category types
export interface ProductCategoryState {
  loading: boolean;
  scrollLoader: boolean;
  error: boolean;
  errorMessage: any;
  currency: string;
  product_id: number | null;
  unit: string;
  prodCategories: any;
  prodSummary: any;
  nextPageUrl: string | null;
  prodCategoriesTree: any;
}

interface ProductCategoryRequestAction {
  type: typeof Actions.PRODUCT_CATEGORY_REQUEST;
  payload: any;
}

interface ProductCategorySuccessAction {
  type: typeof Actions.PRODUCT_CATEGORY_SUCCESS;
  payload: any;
}

interface ProductCategoryErrorAction {
  type: typeof Actions.PRODUCT_CATEGORY_ERROR;
  payload: any;
}

interface ProductCategoryResetAction {
  type: typeof Actions.PRODUCT_CATEGORY_RESET;
}

interface ProductCategoryRemoveAction {
  type: typeof Actions.PRODUCT_CATEGORY_REMOVE;
  payload: any;
}

interface GetMoreProductCategoryRequestAction {
  type: typeof Actions.GET_MORE_PRODUCT_CATEGORY_REQUEST;
  payload: any;
}

interface GetMoreProductCategorySuccessAction {
  type: typeof Actions.GET_MORE_PRODUCT_CATEGORY_SUCCESS;
  payload: any;
}

interface GetMoreProductCategoryErrorAction {
  type: typeof Actions.GET_MORE_PRODUCT_CATEGORY_ERROR;
  payload: any;
}

export type ProductCategoryActionTypes =
  | ProductCategoryRequestAction
  | ProductCategorySuccessAction
  | ProductCategoryErrorAction
  | ProductCategoryResetAction
  | ProductCategoryRemoveAction
  | GetMoreProductCategoryRequestAction
  | GetMoreProductCategorySuccessAction
  | GetMoreProductCategoryErrorAction;

//Product Sub Category types
export interface ProductSubCategoryState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface ProductSubCategoryRequestAction {
  type: typeof Actions.PRODUCT_SUB_CATEGORY_REQUEST;
  payload: any;
}

interface ProductSubCategorySuccessAction {
  type: typeof Actions.PRODUCT_SUB_CATEGORY_SUCCESS;
  payload: any;
}

interface ProductSubCategoryErrorAction {
  type: typeof Actions.PRODUCT_SUB_CATEGORY_ERROR;
  payload: any;
}

interface ProductSubCategoryResetAction {
  type: typeof Actions.PRODUCT_SUB_CATEGORY_RESET;
}

export type ProductSubCategoryActionTypes =
  | ProductSubCategoryRequestAction
  | ProductSubCategorySuccessAction
  | ProductSubCategoryErrorAction
  | ProductSubCategoryResetAction;
