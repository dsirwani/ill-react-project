import ACTIONS from '../../../../utils/configureActions';
import { ClientDetailsState } from './type';

const initialClientDetailsState: ClientDetailsState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};

export const clientDetailsReducer = (
  state: any = {
    clientDetailsData: initialClientDetailsState,
  },
  action: any
) => {
  switch (action.type) {

    //Account details reducers
    case ACTIONS.CLIENT_DETAILS_REQUEST:
      return {
        ...state,
        clientDetailsData: {
          ...initialClientDetailsState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.CLIENT_DETAILS_SUCCESS:
      return {
        ...state,
        clientDetailsData: {
          ...state.clientDetailsData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
          nextPageUrl: action?.payload?.next,
        },
      };

    case ACTIONS.CLIENT_DETAILS_ERROR:
      return {
        ...state,
        clientDetailsData: {
          ...state.clientDetailsData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.CLIENT_DETAILS_RESET:
      return {
        ...state,
        clientDetailsData: {
          ...state.clientDetailsData,
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
