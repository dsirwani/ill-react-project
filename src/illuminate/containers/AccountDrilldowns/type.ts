import Actions from '../../../utils/configureActions';

export interface AccountSummaryState {
	loading: boolean,
	error: boolean,
	errorMessage: any,
  data: any,
  isAccountSelected:any
}

interface AccSummaryRequestAction {
	type: typeof Actions.ACCOUNT_SUMMARY_REQUEST,
	payload: any
}

interface AccSummarySuccessAction {
	type: typeof Actions.ACCOUNT_SUMMARY_SUCCESS,
	payload: any
}

interface AccSummaryErrorAction {
	type: typeof Actions.ACCOUNT_SUMMARY_ERROR,
	payload: any
}

interface AccSummaryResetAction {
	type: typeof Actions.ACCOUNT_SUMMARY_RESET,
}

export type AccSummaryActionTypes = AccSummaryRequestAction | AccSummarySuccessAction | AccSummaryErrorAction | AccSummaryResetAction;