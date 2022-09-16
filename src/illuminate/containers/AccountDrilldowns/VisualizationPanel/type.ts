import Actions from '../../../../utils/configureActions';

//Revenue Plan graph types
export interface RevenuePlanState {
	loading: boolean,
	error: boolean,
	errorMessage: any,
	data: any
}

interface RevenuePlanRequestAction {
	type: typeof Actions.REVENUE_PLAN_REQUEST,
	payload: any
}

interface RevenuePlanSuccessAction {
	type: typeof Actions.REVENUE_PLAN_SUCCESS,
	payload: any
}

interface RevenuePlanErrorAction {
	type: typeof Actions.REVENUE_PLAN_ERROR,
	payload: any
}

interface RevenuePlanResetAction {
	type: typeof Actions.REVENUE_PLAN_RESET,
}

export type RevenuePlanActionTypes =
	RevenuePlanRequestAction |
	RevenuePlanSuccessAction |
	RevenuePlanErrorAction |
	RevenuePlanResetAction;

//PGI graph types
export interface PGIGraphState {
	loading: boolean,
	error: boolean,
	errorMessage: any,
	data: any
}

interface PGIGraphRequestAction {
	type: typeof Actions.PGI_GRAPH_DATA_REQUEST,
	payload: any
}

interface PGIGraphSuccessAction {
	type: typeof Actions.PGI_GRAPH_DATA_SUCCESS,
	payload: any
}

interface PGIGraphErrorAction {
	type: typeof Actions.PGI_GRAPH_DATA_ERROR,
	payload: any
}

interface PGIGraphResetAction {
	type: typeof Actions.PGI_GRAPH_DATA_RESET,
}

export type PGIGraphActionTypes =
	PGIGraphRequestAction |
	PGIGraphSuccessAction |
	PGIGraphErrorAction |
	PGIGraphResetAction;


//Product category filter types
export interface ProdCatFilterState {
	loading: boolean,
	error: boolean,
	errorMessage: any,
	prodCategories: any;
	nextPageUrl: string;
}

interface ProdCatFilterRequestAction {
	type: typeof Actions.PROD_CAT_FILTER_REQUEST,
	payload: any
}

interface ProdCatFilterSuccessAction {
	type: typeof Actions.PROD_CAT_FILTER_SUCCESS,
	payload: any
}

interface ProdCatFilterErrorAction {
	type: typeof Actions.PROD_CAT_FILTER_ERROR,
	payload: any
}

interface ProdCatFilterResetAction {
	type: typeof Actions.PROD_CAT_FILTER_RESET,
}

interface GetMoreProductCategoryRequestAction {
	type: typeof Actions.GET_MORE_PROD_CAT_FILTER_REQUEST;
	payload: any;
}

interface GetMoreProductCategorySuccessAction {
	type: typeof Actions.GET_MORE_PROD_CAT_FILTER_SUCCESS;
	payload: any;
}

interface GetMoreProductCategoryErrorAction {
	type: typeof Actions.GET_MORE_PROD_CAT_FILTER_ERROR;
	payload: any;
}

export type ProdCatFilterActionTypes =
	ProdCatFilterRequestAction |
	ProdCatFilterSuccessAction |
	ProdCatFilterErrorAction |
	ProdCatFilterResetAction |
	GetMoreProductCategoryRequestAction |
	GetMoreProductCategorySuccessAction |
	GetMoreProductCategoryErrorAction;


//Buying center estimates types
export interface BCEstimatesState {
	loading: boolean,
	error: boolean,
	errorMessage: any,
	data: any
}

interface BCEstimatesRequestAction {
	type: typeof Actions.BC_ESTIMATES_DATA_REQUEST,
	payload: any
}

interface BCEstimatesSuccessAction {
	type: typeof Actions.BC_ESTIMATES_DATA_SUCCESS,
	payload: any
}

interface BCEstimatesErrorAction {
	type: typeof Actions.BC_ESTIMATES_DATA_ERROR,
	payload: any
}

interface BCEstimatesResetAction {
	type: typeof Actions.BC_ESTIMATES_DATA_RESET,
}

export type BCEstimatesActionTypes =
	BCEstimatesRequestAction |
	BCEstimatesSuccessAction |
	BCEstimatesErrorAction |
	BCEstimatesResetAction;
