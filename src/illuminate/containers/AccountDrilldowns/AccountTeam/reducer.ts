import ACTIONS from '../../../../utils/configureActions';
import { AccountTeamState } from './type';

const initialAccountTeamState: AccountTeamState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
  nextPageUrl: null,
};

export const accountTeamReducer = (
  state: any = {
    accountTeamData: initialAccountTeamState,
  },
  action: any
) => {
  switch (action.type) {
    case ACTIONS.ACCOUNT_TEAM_REQUEST:
      return {
        ...state,
        accountTeamData: {
          ...initialAccountTeamState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.ACCOUNT_TEAM_SUCCESS:
      return {
        ...state,
        accountTeamData: {
          ...state.accountTeamData,
          loading: false,
          error: false,
          errorMessage: '',
          data: [...action?.payload?.items] ?? [],
          nextPageUrl: action?.payload?.next,
        },
      };

    case ACTIONS.ACCOUNT_TEAM_ERROR:
      return {
        ...state,
        accountTeamData: {
          ...state.accountTeamData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.ACCOUNT_TEAM_RESET:
      return {
        ...state,
        accountTeamData: {
          ...state.accountTeamData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    case ACTIONS.GET_MORE_ACCOUNT_TEAM_REQUEST:
      return {
        ...state,
        accountTeamData: {
          ...state.accountTeamData,
          loading: true,
          error: false,
          errorMessage: '',
          // data: null,
          nextPageUrl: action?.payload?.nextPageUrl,
        },
      };

    case ACTIONS.GET_MORE_ACCOUNT_TEAM_SUCCESS:
      const moreAccounts = action?.payload?.items ?? [];
      return {
        ...state,
        accountTeamData: {
          ...state.accountTeamData,
          loading: false,
          error: false,
          errorMessage: '',
          data: [...state.accountTeamData.data, ...moreAccounts],
          nextPageUrl: action?.payload?.next,
        },
      };

    case ACTIONS.GET_MORE_ACCOUNT_TEAM_ERROR:
      return {
        ...state,
        accountTeamData: {
          ...state.accountTeamData,
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