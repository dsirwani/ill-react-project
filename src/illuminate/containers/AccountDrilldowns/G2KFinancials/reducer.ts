import ACTIONS from '../../../../utils/configureActions';
import { G2KFinancialsState } from './type';

const initialG2KFinancialsState: G2KFinancialsState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};

export const g2kDataReducer = (
  state: any = {
    g2kFinancialsData: initialG2KFinancialsState,
  },
  action: any
) => {
  switch (action.type) {
    //G2K financials users reducers
    case ACTIONS.G2K_FINANCIALS_REQUEST:
      return {
        ...state,
        g2kFinancialsData: {
          ...initialG2KFinancialsState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.G2K_FINANCIALS_SUCCESS:
      return {
        ...state,
        g2kFinancialsData: {
          ...state.g2kFinancialsData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.G2K_FINANCIALS_ERROR:
      return {
        ...state,
        g2kFinancialsData: {
          ...state.g2kFinancialsData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.G2K_FINANCIALS_RESET:
      return {
        ...state,
        g2kFinancialsData: {
          ...state.g2kFinancialsData,
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
