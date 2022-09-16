import ACTIONS from '../../../utils/configureActions';
import { PolicyConsentState } from './type';

const initialState: PolicyConsentState = {
  isLoading: false,
  policies: [],
  policiesAccepted: false,
};

export const policyConsentReducer = (
  state: PolicyConsentState = initialState,
  action: any
) => {
  switch (action.type) {
    case ACTIONS.ACCEPT_POLICY_CONSENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        policiesAccepted: false,
      };

    case ACTIONS.ACCEPT_POLICY_CONSENT_SUCCESS:
      const {policiesAccepted, data: { policies} } = action?.payload??null;
      return {
        ...state,
        isLoading: false,
        policiesAccepted,
        policies
      };

    case ACTIONS.ACCEPT_POLICY_CONSENT_ERROR:
      return {
        ...state,
        isLoading: false,
        policiesAccepted: false,
      };
    
      case ACTIONS.FETCH_POLICY_CONSENT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
  
      case ACTIONS.FETCH_POLICY_CONSENT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          policies: action?.payload?.policies?? null
        };
  
      case ACTIONS.FETCH_POLICY_CONSENT_ERROR:
        return {
          ...state,
          isLoading: false,
        };

    
    default:
      return { ...state };
  }
};
