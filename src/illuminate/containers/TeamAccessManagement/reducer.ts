import ACTIONS from '../../../utils/configureActions';
import { ClientUsersState } from './type';

const initialClientUsersState: ClientUsersState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
  nextPageUrl: null,
};

export const teamManagementReducer = (
  state: any = {
    ...initialClientUsersState,
  },
  action: any
) => {
  switch (action.type) {
    case ACTIONS.CLIENT_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };

    case ACTIONS.CLIENT_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        data: [...action?.payload?.items] ?? [],
        nextPageUrl: action?.payload?.next,
      };

    case ACTIONS.CLIENT_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action?.payload,
        data: null,
      };

    case ACTIONS.CLIENT_USERS_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        data: null,
      };

    case ACTIONS.GET_MORE_CLIENT_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        nextPageUrl: action?.payload?.nextPageUrl,
      };

    case ACTIONS.GET_MORE_CLIENT_USERS_SUCCESS:
      const moreClientUsers = action?.payload?.items ?? [];
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        data: [...state.data, ...moreClientUsers],
        nextPageUrl: action?.payload?.next,
      };

    case ACTIONS.GET_MORE_CLIENT_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action?.payload,
      };

    default:
      return { ...state };
  }
};
