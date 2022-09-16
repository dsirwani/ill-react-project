import ACTIONS from '../../../utils/configureActions';
import { PolicyConsentActionTypes } from './type';

export const acceptPolicyConsentRequest = ( data: any ): PolicyConsentActionTypes => (
  {
    type: ACTIONS.ACCEPT_POLICY_CONSENT_REQUEST,
    payload: data
  }
);

export const acceptPolicyConsentSuccess = ( data:any ): PolicyConsentActionTypes => (
  {
    type: ACTIONS.ACCEPT_POLICY_CONSENT_SUCCESS,
    payload: data
  }
);

export const acceptPolicyConsentError = (error: any): PolicyConsentActionTypes => (
  {
    type: ACTIONS.ACCEPT_POLICY_CONSENT_ERROR,
    payload: error
  }
);

export const fetchPolicyConsentRequest = ( userEmail: string ): PolicyConsentActionTypes => (
  {
    type: ACTIONS.FETCH_POLICY_CONSENT_REQUEST,
    payload: { userEmail }
  }
);

export const fetchPolicyConsentSuccess = ( data: any ): PolicyConsentActionTypes => (
  {
    type: ACTIONS.FETCH_POLICY_CONSENT_SUCCESS,
    payload: data
  }
);

export const fetchPolicyConsentError = (error: any): PolicyConsentActionTypes => (
  {
    type: ACTIONS.FETCH_POLICY_CONSENT_ERROR,
    payload: error
  }
);
