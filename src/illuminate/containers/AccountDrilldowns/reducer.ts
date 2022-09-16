import ACTIONS from '../../../utils/configureActions';
import { AccountSummaryState } from './type';

const initialState: AccountSummaryState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
  isAccountSelected:false

};

export const accSummaryReducer = (state: AccountSummaryState = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS.ACCOUNT_SUMMARY_REQUEST:
      return ({
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        data: null,
        isAccountSelected:false
      });

    case ACTIONS.ACCOUNT_SUMMARY_SUCCESS:
      return ({
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        data: action?.payload,
        isAccountSelected:true
      });

    case ACTIONS.ACCOUNT_SUMMARY_ERROR:
      return ({
        ...state,
        loading: false,
        error: true,
        errorMessage: action?.payload,
        data: null,
        isAccountSelected:false

      });

    case ACTIONS.ACCOUNT_SUMMARY_RESET:
      return ({
        ...initialState
      });

    default:
      return { ...state };
  }
};