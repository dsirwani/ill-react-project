import Actions from '../../../utils/configureActions';

export interface PolicyConsentState {
  isLoading: boolean;
  policies: [];
  policiesAccepted: boolean;
}

interface AcceptPolicyConsentRequestAction {
  type: typeof Actions.ACCEPT_POLICY_CONSENT_REQUEST;
  payload: any;
}

interface AcceptPolicyConsentSuccessAction {
  type: typeof Actions.ACCEPT_POLICY_CONSENT_SUCCESS;
  payload: any;
}

interface AcceptPolicyConsentErrorAction {
  type: typeof Actions.ACCEPT_POLICY_CONSENT_ERROR;
  payload: any;
}

interface FetchPolicyConsentRequestAction {
  type: typeof Actions.FETCH_POLICY_CONSENT_REQUEST;
  payload: any;
}

interface FetchPolicyConsentSuccessstAction {
  type: typeof Actions.FETCH_POLICY_CONSENT_SUCCESS;
  payload: any;
}

interface FetchPolicyConsentErrorAction {
  type: typeof Actions.FETCH_POLICY_CONSENT_ERROR;
  payload: any;
}

export type PolicyConsentActionTypes =
  | AcceptPolicyConsentRequestAction
  | AcceptPolicyConsentSuccessAction
  | AcceptPolicyConsentErrorAction
  | FetchPolicyConsentRequestAction
  | FetchPolicyConsentSuccessstAction
  | FetchPolicyConsentErrorAction;