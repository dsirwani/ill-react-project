import ACTIONS from '../../../utils/configureActions';
import { AccountListState } from './type';

export const initialState: AccountListState = {
  accountList: null,
  isLoading: false,
  nextPageUrl: null,
  recPerPage: 15,
  clientImg: '',
  enabledApps: [],
  loaderOverScreen: false,
};

export const accountListReducer = (
  state: AccountListState = initialState,
  action: any
) => {
  let nextPageUrl;
  switch (action.type) {
    case ACTIONS.GET_ACCOUNT_LIST_REQUEST:
      nextPageUrl = action?.payload?.nextPageUrl;
      return {
        ...state,
        loaderOverScreen: true,
        nextPageUrl,
      };

    case ACTIONS.GET_ACCOUNT_LIST_SUCCESS:
      const accounts: any = action?.payload?.responseData?.items ?? null;
      let accountList = accounts?.length ? [...accounts] : [];
      const nextPage = action?.payload?.responseData?.next;
      const recPerPage = action?.payload?.responseData?.per_page ?? 10;
      const headerSecondLine = action?.payload?.responseData?.header ?? null;
      return {
        ...state,
        accountList: [...accountList],
        loaderOverScreen: false,
        nextPageUrl: nextPage,
        recPerPage,
        headerSecondLine
      };

    case ACTIONS.GET_ACCOUNT_LIST_ERROR:
      return {
        ...state,
        loaderOverScreen: false
      };

    case ACTIONS.GET_MORE_ACCOUNTS_REQUEST:
      nextPageUrl = action?.payload?.nextPageUrl;
      return {
        ...state,
        isLoading: true,
        nextPageUrl,
      };

    case ACTIONS.GET_MORE_ACCOUNTS_SUCCESS:
      const moreAccounts: any = action?.payload?.responseData?.items ?? [];
      return {
        ...state,
        accountList: [...state.accountList, ...moreAccounts],
        isLoading: false,
        nextPageUrl: action?.payload?.responseData?.next,
        recPerPage: action?.payload?.responseData?.per_page,
      };

    case ACTIONS.GET_MORE_ACCOUNTS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case ACTIONS.SET_CLIENT_IMAGE:
      return {
        ...state,
        clientImg: action?.payload?.clientImage,
      };

    case ACTIONS.SET_ENABLED_APPS:
      return {
        ...state,
        enabledApps: action?.payload?.enabledApps,
      };

    default:
      return { ...state };
  }
};
