import Actions from '../../../utils/configureActions';

export interface SiteSelectionState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
  site: any;
  accountId: any,
  showSite: boolean
}

interface SiteSelectionRequestAction {
  type: typeof Actions.SITE_SELECTION_REQUEST;
  payload: any;
}

interface SiteSelectionSuccessAction {
  type: typeof Actions.SITE_SELECTION_SUCCESS;
  payload: any;
}

interface SiteSelectionErrorAction {
  type: typeof Actions.SITE_SELECTION_ERROR;
  payload: any;
}

interface SiteSelectionResetAction {
  type: typeof Actions.SITE_SELECTION_RESET;
}

interface ChangeSiteSelectionAction {
  type: typeof Actions.CHANGE_SITE_SELECTION;
  payload: any;
}

interface GetAccountSiteAction {
  type: typeof Actions.GET_ACCOUNT_SITE;
  payload: any;
}

export type SiteSelectionActionTypes =
  | SiteSelectionRequestAction
  | SiteSelectionSuccessAction
  | SiteSelectionErrorAction
  | SiteSelectionResetAction
  | ChangeSiteSelectionAction
  | GetAccountSiteAction;