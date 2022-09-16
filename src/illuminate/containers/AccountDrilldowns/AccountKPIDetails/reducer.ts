import ACTIONS from '../../../../utils/configureActions';
import { ProductCategoryState } from './type';
import {
  getprodCategories,
  removeSubCategoriesOnClose,
  getCategoriesTree,
} from '../../../../utils/getSubCategoriesUtils';

const initialProdCatState: ProductCategoryState = {
  loading: false,
  scrollLoader: false,
  error: false,
  errorMessage: '',
  prodCategories: null,
  nextPageUrl: null,
  prodSummary: null,
  currency: 'USD',
  product_id: null,
  unit: '',
  prodCategoriesTree: null,
};

export const prodCategoryReducer = (
  state: any = {
    prodData: initialProdCatState,
  },
  action: any
) => {
  switch (action.type) {
    case ACTIONS.PRODUCT_CATEGORY_REQUEST:
      return {
        ...state,
        prodData: {
          ...initialProdCatState,
          scrollLoader: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.PRODUCT_CATEGORY_SUCCESS:
      const { prodSummary, prodCategoriesTree } = getprodCategories(
        action?.payload ?? {},
        state.prodData
      );

      return {
        ...state,
        prodData: {
          ...state.prodData,
          scrollLoader: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
          prodCategories: [...prodCategoriesTree],
          prodSummary,
          nextPageUrl: action?.payload?.next,
        },
      };

    case ACTIONS.PRODUCT_CATEGORY_ERROR:
      return {
        ...state,
        prodData: {
          ...state.prodData,
          scrollLoader: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.PRODUCT_CATEGORY_REMOVE:
      const { productId, parentGrp } = action?.payload?.data;
      const prodCategories = removeSubCategoriesOnClose(
        state.prodData.prodCategories,
        productId,
        parentGrp
      );
      return {
        ...state,
        prodData: {
          ...state.prodData,
          prodCategories: [...prodCategories],
          scrollLoader: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    case ACTIONS.PRODUCT_CATEGORY_RESET:
      return {
        ...state,
        prodData: {
          ...state.prodData,
          scrollLoader: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    case ACTIONS.GET_MORE_PRODUCT_CATEGORY_REQUEST:
      return {
        ...state,
        prodData: {
          ...state.prodData,
          scrollLoader: true,
          error: false,
          errorMessage: '',
          data: null,
          nextPageUrl: action?.payload?.nextPageUrl,
        },
      };

    case ACTIONS.GET_MORE_PRODUCT_CATEGORY_SUCCESS:
      const moreProducts = getCategoriesTree(action?.payload?.items ?? [], '');

      return {
        ...state,
        prodData: {
          ...state.prodData,
          scrollLoader: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
          prodCategories: [...state.prodData.prodCategories, ...moreProducts],
          nextPageUrl: action?.payload?.next,
        },
      };

    case ACTIONS.GET_MORE_PRODUCT_CATEGORY_ERROR:
      return {
        ...state,
        prodData: {
          ...state.prodData,
          scrollLoader: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.PRODUCT_SUB_CATEGORY_REQUEST:
      return {
        ...state,
        prodData: {
          ...state.prodData,
          loading: true,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    case ACTIONS.PRODUCT_SUB_CATEGORY_SUCCESS:
      const {
        prodSummary: subProdSummary,
        prodCategoriesTree: subProdCategoriesTree,
      } = getprodCategories(action?.payload ?? {}, state.prodData);

      return {
        ...state,
        prodData: {
          ...state.prodData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
          prodCategories: [...subProdCategoriesTree],
          prodSummary: subProdSummary,
        },
      };

    case ACTIONS.PRODUCT_SUB_CATEGORY_ERROR:
      return {
        ...state,
        prodData: {
          ...state.prodData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.PRODUCT_SUB_CATEGORY_RESET:
      return {
        ...state,
        prodData: {
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
          prodSubCategories: null,
        },
      };

    default:
      return { ...state };
  }
};
