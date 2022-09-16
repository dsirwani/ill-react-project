import ACTIONS from '../../../../utils/configureActions';
import {
  ProductCategoryActionTypes,
  ProductSubCategoryActionTypes,
} from './type';

//Product Category action creators
export const prodCategoryRequest = (data: any): ProductCategoryActionTypes => ({
  type: ACTIONS.PRODUCT_CATEGORY_REQUEST,
  payload: data,
});

export const prodCategorySuccess = (data: any): ProductCategoryActionTypes => ({
  type: ACTIONS.PRODUCT_CATEGORY_SUCCESS,
  payload: data,
});

export const prodCategoryError = (error: any): ProductCategoryActionTypes => ({
  type: ACTIONS.PRODUCT_CATEGORY_ERROR,
  payload: error,
});

export const prodCategoryReset = (): ProductCategoryActionTypes => ({
  type: ACTIONS.PRODUCT_CATEGORY_RESET,
});

export const prodCategoryRemove = (data: any): ProductCategoryActionTypes => ({
  type: ACTIONS.PRODUCT_CATEGORY_REMOVE,
  payload: { data },
});

export const getMoreProdCategoryRequest = (
  data: any
): ProductCategoryActionTypes => ({
  type: ACTIONS.GET_MORE_PRODUCT_CATEGORY_REQUEST,
  payload: data,
});

export const getMoreProdCategorySuccess = (
  data: any
): ProductCategoryActionTypes => ({
  type: ACTIONS.GET_MORE_PRODUCT_CATEGORY_SUCCESS,
  payload: data,
});

export const getMoreProdCategoryError = (
  error: any
): ProductCategoryActionTypes => ({
  type: ACTIONS.GET_MORE_PRODUCT_CATEGORY_ERROR,
  payload: error,
});

//Product Sub Category action creators
export const prodSubCategoryRequest = (
  data: any
): ProductSubCategoryActionTypes => ({
  type: ACTIONS.PRODUCT_SUB_CATEGORY_REQUEST,
  payload: data,
});

export const prodSubCategorySuccess = (
  data: any
): ProductSubCategoryActionTypes => ({
  type: ACTIONS.PRODUCT_SUB_CATEGORY_SUCCESS,
  payload: data,
});

export const prodSubCategoryError = (
  error: any
): ProductSubCategoryActionTypes => ({
  type: ACTIONS.PRODUCT_SUB_CATEGORY_ERROR,
  payload: error,
});

export const prodSubCategoryReset = (): ProductSubCategoryActionTypes => ({
  type: ACTIONS.PRODUCT_SUB_CATEGORY_RESET,
});
