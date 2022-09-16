import ACTIONS from '../../../../utils/configureActions';
import { RevenuePlanState, PGIGraphState, ProdCatFilterState, BCEstimatesState } from './type';

const initialRevenuePlanState: RevenuePlanState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null
};

const initialPGIGraphState: PGIGraphState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null
};

const initialProdCatFilterState: ProdCatFilterState = {
  loading: false,
  error: false,
  errorMessage: '',
  prodCategories: null,
  nextPageUrl: '',
};

const initialBCEstimatesState: BCEstimatesState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};


export const visualizationReducer = (
  state = {
    revenuePlanData: initialRevenuePlanState,
    prodCatFilterData: initialProdCatFilterState,
    pgiGraphData: initialPGIGraphState,
    bcEstimatesData: initialBCEstimatesState,
  }, action: any) => {
  switch (action.type) {
    case ACTIONS.REVENUE_PLAN_REQUEST:
      return ({
        ...state, revenuePlanData: {
          loading: true,
          error: false,
          errorMessage: '',
          data: null
        }
      });

    case ACTIONS.REVENUE_PLAN_SUCCESS:
      return ({
        ...state, revenuePlanData: {
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload
        }
      });

    case ACTIONS.REVENUE_PLAN_ERROR:
      return ({
        ...state, revenuePlanData: {
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null
        }
      });

    case ACTIONS.REVENUE_PLAN_RESET:
      return ({
        ...state, revenuePlanData: {
          loading: false,
          error: false,
          errorMessage: '',
          data: null
        }
      });

    case ACTIONS.PGI_GRAPH_DATA_REQUEST:
      return ({
        ...state, pgiGraphData: {
          loading: true,
          error: false,
          errorMessage: '',
          data: null
        }
      });

    case ACTIONS.PGI_GRAPH_DATA_SUCCESS:
      return ({
        ...state, pgiGraphData: {
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload
        }
      });

    case ACTIONS.PGI_GRAPH_DATA_ERROR:
      return ({
        ...state, pgiGraphData: {
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null
        }
      });

    case ACTIONS.PGI_GRAPH_DATA_RESET:
      return ({
        ...state, pgiGraphData: {
          loading: false,
          error: false,
          errorMessage: '',
          data: null
        }
      });

    case ACTIONS.PROD_CAT_FILTER_REQUEST:
      return ({
        ...state, prodCatFilterData: {
          ...initialProdCatFilterState,
          loading: true,
          error: false,
          errorMessage: '',
        }
      });

    case ACTIONS.PROD_CAT_FILTER_SUCCESS:
      return ({
        ...state, prodCatFilterData: {
          ...state.prodCatFilterData,
          loading: false,
          error: false,
          errorMessage: '',
          prodCategories: [...action?.payload?.items] ?? [],
          nextPageUrl: action?.payload?.next,
        }
      });

    case ACTIONS.PROD_CAT_FILTER_ERROR:
      return ({
        ...state, prodCatFilterData: {
          ...state.prodCatFilterData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null
        }
      });

    case ACTIONS.PROD_CAT_FILTER_RESET:
      return ({
        ...state, prodCatFilterData: {
          ...state.prodCatFilterData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null
        }
      });

    case ACTIONS.GET_MORE_PROD_CAT_FILTER_REQUEST:
      return {
        ...state,
        prodCatFilterData: {
          ...state.prodCatFilterData,
          loading: true,
          error: false,
          errorMessage: '',
          nextPageUrl: action?.payload?.nextPageUrl,
        },
      };

    case ACTIONS.GET_MORE_PROD_CAT_FILTER_SUCCESS:
      const moreProducts = action?.payload?.items ?? [];
      return {
        ...state,
        prodCatFilterData: {
          ...state.prodCatFilterData,
          loading: false,
          error: false,
          errorMessage: '',
          prodCategories: [...state.prodCatFilterData.prodCategories, ...moreProducts],
          nextPageUrl: action?.payload?.next,
        },
      };

    case ACTIONS.GET_MORE_PROD_CAT_FILTER_ERROR:
      return {
        ...state,
        prodCatFilterData: {
          ...state.prodCatFilterData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
        },
      };

    case ACTIONS.BC_ESTIMATES_DATA_REQUEST:
      return ({
        ...state, bcEstimatesData: {
          loading: true,
          error: false,
          errorMessage: '',
          data: null
        }
      });

    case ACTIONS.BC_ESTIMATES_DATA_SUCCESS:
      return ({
        ...state, bcEstimatesData: {
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload
        }
      });

    case ACTIONS.BC_ESTIMATES_DATA_ERROR:
      return ({
        ...state, bcEstimatesData: {
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null
        }
      });

    case ACTIONS.BC_ESTIMATES_DATA_RESET:
      return ({
        ...state, bcEstimatesData: {
          loading: false,
          error: false,
          errorMessage: '',
          data: null
        }
      });

    default:
      return { ...state };
  }
};