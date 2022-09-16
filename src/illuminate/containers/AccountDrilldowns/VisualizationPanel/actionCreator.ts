import ACTIONS from '../../../../utils/configureActions';
import { RevenuePlanActionTypes, PGIGraphActionTypes, ProdCatFilterActionTypes, BCEstimatesActionTypes } from './type';

//Revenue Plan graph action creators
export const revenuePlanRequest = (data: any): RevenuePlanActionTypes => (
  {
    type: ACTIONS.REVENUE_PLAN_REQUEST,
    payload: data
  }
);

export const revenuePlanSuccess = (data: any): RevenuePlanActionTypes => (
  {
    type: ACTIONS.REVENUE_PLAN_SUCCESS,
    payload: data
  }
);

export const revenuePlanError = (error: any): RevenuePlanActionTypes => (
  {
    type: ACTIONS.REVENUE_PLAN_ERROR,
    payload: error
  }
);

export const revenuePlanReset = (): RevenuePlanActionTypes => (
  {
    type: ACTIONS.REVENUE_PLAN_RESET,
  }
);

//PGI graph action creators
export const PGIGraphRequest = (data: any): PGIGraphActionTypes => (
  {
    type: ACTIONS.PGI_GRAPH_DATA_REQUEST,
    payload: data
  }
);

export const PGIGraphSuccess = (data: any): PGIGraphActionTypes => (
  {
    type: ACTIONS.PGI_GRAPH_DATA_SUCCESS,
    payload: data
  }
);

export const PGIGraphError = (error: any): PGIGraphActionTypes => (
  {
    type: ACTIONS.PGI_GRAPH_DATA_ERROR,
    payload: error
  }
);

export const PGIGraphReset = (): PGIGraphActionTypes => (
  {
    type: ACTIONS.PGI_GRAPH_DATA_RESET,
  }
);

//Product category action creators
export const prodCatFilterRequest = (data: any): ProdCatFilterActionTypes => (
  {
    type: ACTIONS.PROD_CAT_FILTER_REQUEST,
    payload: data
  }
);

export const prodCatFilterSuccess = (data: any): ProdCatFilterActionTypes => (
  {
    type: ACTIONS.PROD_CAT_FILTER_SUCCESS,
    payload: data
  }
);

export const prodCatFilterError = (error: any): ProdCatFilterActionTypes => (
  {
    type: ACTIONS.PROD_CAT_FILTER_ERROR,
    payload: error
  }
);

export const prodCatFilterReset = (): ProdCatFilterActionTypes => (
  {
    type: ACTIONS.PROD_CAT_FILTER_RESET,
  }
);

export const getMoreProdCatFilterRequest = (data: any): ProdCatFilterActionTypes => (
  {
    type: ACTIONS.GET_MORE_PROD_CAT_FILTER_REQUEST,
    payload: data
  }
);

export const getMoreProdCatFilterSuccess = (data: any): ProdCatFilterActionTypes => (
  {
    type: ACTIONS.GET_MORE_PROD_CAT_FILTER_SUCCESS,
    payload: data
  }
);

export const getMoreProdCatFilterError = (error: any): ProdCatFilterActionTypes => (
  {
    type: ACTIONS.GET_MORE_PROD_CAT_FILTER_ERROR,
    payload: error
  }
);

//Buying Center Estimates action creators
export const BCEstimatesRequest = (data: any): BCEstimatesActionTypes => (
  {
    type: ACTIONS.BC_ESTIMATES_DATA_REQUEST,
    payload: data
  }
);

export const BCEstimatesSuccess = (data: any): BCEstimatesActionTypes => (
  {
    type: ACTIONS.BC_ESTIMATES_DATA_SUCCESS,
    payload: data
  }
);

export const BCEstimatesError = (error: any): BCEstimatesActionTypes => (
  {
    type: ACTIONS.BC_ESTIMATES_DATA_ERROR,
    payload: error
  }
);

export const BCEstimatesReset = (): BCEstimatesActionTypes => (
  {
    type: ACTIONS.BC_ESTIMATES_DATA_RESET,
  }
);