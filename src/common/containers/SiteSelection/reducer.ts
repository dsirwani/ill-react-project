import ACTIONS from '../../../utils/configureActions';
import { SiteSelectionState } from './type';

const initialSiteSelectionState: SiteSelectionState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
  site: null,
  accountId: null,
  showSite: false
};

export const siteSelectionReducer = (
  state: any = {
    siteSelectData: initialSiteSelectionState,
  },
  action: any
) => {
  switch (action.type) {
    case ACTIONS.SITE_SELECTION_REQUEST:
      return {
        ...state,
        siteSelectData: {
          ...initialSiteSelectionState,
          loading: true,
          error: false,
          errorMessage: '',
          showSite: true
        },
      };

    case ACTIONS.SITE_SELECTION_SUCCESS:
      return {
        ...state,
        siteSelectData: {
          ...state.siteSelectData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.SITE_SELECTION_ERROR:
      return {
        ...state,
        siteSelectData: {
          ...state.siteSelectData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.SITE_SELECTION_RESET:
      return {
        ...state,
        siteSelectData: {
          ...state.siteSelectData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
          showSite: false
        },
      };

    case ACTIONS.CHANGE_SITE_SELECTION:
      return {
        ...state,
        siteSelectData: {
          ...state.siteSelectData,
          site: action?.payload,
        },
      };

    case ACTIONS.GET_ACCOUNT_SITE:
      return {
        ...state,
        siteSelectData: {
          ...state.siteSelectData,
          accountId: action?.payload?.account_id,
          showSite: action?.payload?.show_site,
        },
      };

    default:
      return { ...state };
  }
};
