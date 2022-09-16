import ACTIONS from '../../../utils/configureActions';
import { ClientDataState } from './type';

const initialClientDataState: ClientDataState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
  nextPageUrl: null,
  selectedClient: null,
  isAccountSelected: false,
  isClientSelected: false
};

export const clientDataReducer = (
  state: any = {
    ...initialClientDataState,
  },
  action: any
) => {
  switch (action.type) {
    case ACTIONS.CLIENT_DATA_REQUEST:
      return {
        ...state,
        ...initialClientDataState,
        loading: true,
        error: false,
        errorMessage: '',
        isAccountSelected:false
      };

    case ACTIONS.CLIENT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        data: [...action?.payload?.items] ?? [],
        nextPageUrl: action?.payload?.next,
      };

    case ACTIONS.CLIENT_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action?.payload,
        data: null,
      };

    case ACTIONS.CLIENT_DATA_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        data: null,
      };
    
    case ACTIONS.SET_IS_CLIENT_SELECTED:
      return {
        ...state,
        isClientSelected: true
      };

    case ACTIONS.RESET_IS_CLIENT_SELECTED:
      return {
        ...state,
        isClientSelected: false
      };
      
    // case ACTIONS.GET_MORE_CLIENT_DATA_REQUEST:
    //   return {
    //     ...state,
    //     clientData: {
    //       ...state.clientData,
    //       loading: true,
    //       error: false,
    //       errorMessage: '',
    //       // data: null,
    //       nextPageUrl: action?.payload?.nextPageUrl,
    //     },
    //   };

    // case ACTIONS.GET_MORE_CLIENT_DATA_SUCCESS:
    //   const moreAccounts = action?.payload?.items ?? [];
    //   return {
    //     ...state,
    //     clientData: {
    //       ...state.clientData,
    //       loading: false,
    //       error: false,
    //       errorMessage: '',
    //       data: [...state.clientData.data, ...moreAccounts],
    //       nextPageUrl: action?.payload?.next,
    //     },
    //   };

    // case ACTIONS.GET_MORE_CLIENT_DATA_ERROR:
    //   return {
    //     ...state,
    //     clientData: {
    //       ...state.clientData,
    //       loading: false,
    //       error: true,
    //       errorMessage: action?.payload,
    //       // data: null,
    //     },
    //   };

    default:
      return { ...state };
  }
};
