import ACTIONS from '../../../../utils/configureActions';
import { AccountDataState } from './type';

const initialAccountDataState: AccountDataState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
  nextPageUrl: null,
};

export const accountDataReducer = (
  state: any = {
    accountData: initialAccountDataState,
  },
  action: any
) => {
  switch (action.type) {
    case ACTIONS.ACCOUNT_DATA_REQUEST:
      return {
        ...state,
        accountData: {
          ...initialAccountDataState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.ACCOUNT_DATA_SUCCESS:
      return {
        ...state,
        accountData: {
          ...state.accountData,
          loading: false,
          error: false,
          errorMessage: '',
          data: [...action?.payload?.items] ?? [],
          nextPageUrl: action?.payload?.next,
        },
      };

    case ACTIONS.ACCOUNT_DATA_ERROR:
      return {
        ...state,
        accountData: {
          ...state.accountData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.ACCOUNT_DATA_RESET:
      return {
        ...state,
        accountData: {
          ...state.accountData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    case ACTIONS.GET_MORE_ACCOUNT_DATA_REQUEST:
      return {
        ...state,
        accountData: {
          ...state.accountData,
          loading: true,
          error: false,
          errorMessage: '',
          // data: null,
          nextPageUrl: action?.payload?.nextPageUrl,
        },
      };

    case ACTIONS.GET_MORE_ACCOUNT_DATA_SUCCESS:
      const moreAccounts = action?.payload?.items ?? [];
      return {
        ...state,
        accountData: {
          ...state.accountData,
          loading: false,
          error: false,
          errorMessage: '',
          data: [...state.accountData.data, ...moreAccounts],
          nextPageUrl: action?.payload?.next,
        },
      };

    case ACTIONS.GET_MORE_ACCOUNT_DATA_ERROR:
      return {
        ...state,
        accountData: {
          ...state.accountData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          // data: null,
        },
      };

    default:
      return { ...state };
  }
};