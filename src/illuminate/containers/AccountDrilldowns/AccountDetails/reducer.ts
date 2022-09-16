import ACTIONS from '../../../../utils/configureActions';
import {
  AccountDetailsState, AccountUsersState,
  AccountMatchingDataState, AccMatchingSearchDataState,
  UpdateAccMatchingDataState
} from './type';

const initialAccountDetailsState: AccountDetailsState = {
  loading: false,
  scrollLoader: false,
  error: false,
  errorMessage: '',
  data: null,
};

const initialAccountUsersState: AccountUsersState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
  nextPageUrl: null,
};

const initialAccountMatchingDataState: AccountMatchingDataState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};

const initialAccMatchingSearchDataState: AccMatchingSearchDataState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};

const initialUpdateAccMatchingDataState: UpdateAccMatchingDataState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};

export const accountDetailsReducer = (
  state: any = {
    accountDetailsData: initialAccountDetailsState,
    accountUsersData: initialAccountUsersState,
    accountMatchingData: initialAccountMatchingDataState,
    accMatchingSearchData: initialAccMatchingSearchDataState,
    updateAccMatchingData: initialUpdateAccMatchingDataState
  },
  action: any
) => {
  switch (action.type) {
    //Account details reducers
    case ACTIONS.ACCOUNT_DETAILS_REQUEST:
      return {
        ...state,
        accountDetailsData: {
          ...initialAccountDetailsState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        accountDetailsData: {
          ...state.accountDetailsData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
          nextPageUrl: action?.payload?.next,
        },
      };

    case ACTIONS.ACCOUNT_DETAILS_ERROR:
      return {
        ...state,
        accountDetailsData: {
          ...state.accountDetailsData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.ACCOUNT_DETAILS_RESET:
      return {
        ...state,
        accountDetailsData: {
          ...state.accountDetailsData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    //Account details users reducers
    case ACTIONS.ACCOUNT_USERS_REQUEST:
      return {
        ...state,
        accountUsersData: {
          ...initialAccountUsersState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.ACCOUNT_USERS_SUCCESS:
      return {
        ...state,
        accountUsersData: {
          ...state.accountUsersData,
          loading: false,
          error: false,
          errorMessage: '',
          data: [...action?.payload?.items] ?? [],
          nextPageUrl: action?.payload?.next,
        },
      };

    case ACTIONS.ACCOUNT_USERS_ERROR:
      return {
        ...state,
        accountUsersData: {
          ...state.accountUsersData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.ACCOUNT_USERS_RESET:
      return {
        ...state,
        accountUsersData: {
          ...state.accountUsersData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    case ACTIONS.GET_MORE_ACCOUNT_USERS_REQUEST:
      return {
        ...state,
        accountUsersData: {
          ...state.accountUsersData,
          loading: true,
          error: false,
          errorMessage: '',
          // data: null,
          nextPageUrl: action?.payload?.nextPageUrl,
        },
      };

    case ACTIONS.GET_MORE_ACCOUNT_USERS_SUCCESS:
      const moreAccounts = action?.payload?.items ?? [];
      return {
        ...state,
        accountUsersData: {
          ...state.accountUsersData,
          loading: false,
          error: false,
          errorMessage: '',
          data: [...state.accountUsersData.data, ...moreAccounts],
          nextPageUrl: action?.payload?.next,
        },
      };

    case ACTIONS.GET_MORE_ACCOUNT_USERS_ERROR:
      return {
        ...state,
        accountUsersData: {
          ...state.accountUsersData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
        },
      };

    //Account matching data reducers
    case ACTIONS.ACCOUNT_MATCHING_DATA_REQUEST:
      return {
        ...state,
        accountMatchingData: {
          ...initialAccountDetailsState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.ACCOUNT_MATCHING_DATA_SUCCESS:
      return {
        ...state,
        accountMatchingData: {
          ...state.accountMatchingData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.ACCOUNT_MATCHING_DATA_ERROR:
      return {
        ...state,
        accountMatchingData: {
          ...state.accountMatchingData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.ACCOUNT_MATCHING_DATA_RESET:
      return {
        ...state,
        accountMatchingData: {
          ...state.accountMatchingData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    //Account matching search data reducers
    case ACTIONS.ACC_MATCHING_SEARCH_DATA_REQUEST:
      return {
        ...state,
        accMatchingSearchData: {
          ...initialAccMatchingSearchDataState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.ACC_MATCHING_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        accMatchingSearchData: {
          ...state.accMatchingSearchData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.ACC_MATCHING_SEARCH_DATA_ERROR:
      return {
        ...state,
        accMatchingSearchData: {
          ...state.accMatchingSearchData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.ACC_MATCHING_SEARCH_DATA_RESET:
      return {
        ...state,
        accMatchingSearchData: {
          ...state.accMatchingSearchData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    //Update account matching data reducers
    case ACTIONS.UPDATE_ACC_MATCHING_DATA_REQUEST:
      return {
        ...state,
        updateAccMatchingData: {
          ...initialUpdateAccMatchingDataState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.UPDATE_ACC_MATCHING_DATA_SUCCESS:
      return {
        ...state,
        updateAccMatchingData: {
          ...state.updateAccMatchingData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.UPDATE_ACC_MATCHING_DATA_ERROR:
      return {
        ...state,
        updateAccMatchingData: {
          ...state.updateAccMatchingData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.UPDATE_ACC_MATCHING_DATA_RESET:
      return {
        ...state,
        updateAccMatchingData: {
          ...state.updateAccMatchingData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    default:
      return { ...state };
  }
};
