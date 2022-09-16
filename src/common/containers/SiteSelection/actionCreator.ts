import ACTIONS from '../../../utils/configureActions';
import { SiteSelectionActionTypes } from './type';

export const siteSelectionRequest = (
  data: any
): SiteSelectionActionTypes => ({
  type: ACTIONS.SITE_SELECTION_REQUEST,
  payload: data,
});

export const siteSelectionSuccess = (
  data: any
): SiteSelectionActionTypes => ({
  type: ACTIONS.SITE_SELECTION_SUCCESS,
  payload: data,
});

export const siteSelectionError = (error: any): SiteSelectionActionTypes => ({
  type: ACTIONS.SITE_SELECTION_ERROR,
  payload: error,
});

export const siteSelectionReset = (): SiteSelectionActionTypes => ({
  type: ACTIONS.SITE_SELECTION_RESET,
});

export const changeSiteSelection = (
  data: any
): SiteSelectionActionTypes => ({
  type: ACTIONS.CHANGE_SITE_SELECTION,
  payload: data,
});

export const getAccountSites = (
  data: any
): SiteSelectionActionTypes => ({
  type: ACTIONS.GET_ACCOUNT_SITE,
  payload: data,
});