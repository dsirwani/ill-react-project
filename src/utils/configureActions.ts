import { DASHBOARD_ACTIONS } from '../common/containers/Dashboard/action';
import { APP_ACTIONS } from '../common/containers/App/action';
import { SITE_SELECTION_ACTIONS } from '../common/containers/SiteSelection/action';
import { AUTH_ACTIONS } from '../common/containers/WithAuthentication/action';
import { CLIENT_DATA_ACTIONS } from '../illuminate/containers/PlatformView/action';
import { UPLOAD_ACTIONS } from '../illuminate/containers/Upload/action';
import { ACCOUNT_SUMMARY_ACTIONS } from '../illuminate/containers/AccountDrilldowns/action';
import { PRODUCT_CATEGORY_ACTIONS } from '../illuminate/containers/AccountDrilldowns/AccountKPIDetails/action';
import { ACCOUNT_LIST_ACTIONS } from '../illuminate/containers/AccountsView/action';
import { LOGGED_IN_USER_DETAILS_ACTIONS } from '../illuminate/containers/AccountsView/LoggedInUserDetails/action';
import {
  REVENUE_PLAN_ACTIONS,
  PGI_GRAPH_ACTIONS,
  PROD_CAT_FILTER_ACTIONS,
  BC_ESTIMATES_ACTIONS,
} from '../illuminate/containers/AccountDrilldowns/VisualizationPanel/action';
import { ACCOUNT_TEAM_ACTIONS } from '../illuminate/containers/AccountDrilldowns/AccountTeam/action';
import { LEGAL_ENTITIES_ACTIONS } from '../illuminate/containers/AccountDrilldowns/LegalEntities/action';
import {
  ACCOUNT_DETAILS_ACTIONS,
  ACCOUNT_USERS_ACTIONS,
  ACCOUNT_MATCHING_DATA_ACTIONS,
  ACC_MATCHING_SEARCH_DATA_ACTIONS,
  UPDATE_ACC_MATCHING_DATA_ACTIONS
} from '../illuminate/containers/AccountDrilldowns/AccountDetails/action';
import { USER_PROFILE_ACTIONS, EDIT_USER_PROFILE_ACTIONS } from '../illuminate/containers/AccountDrilldowns/UserManagement/action';
import { CLIENT_DETAILS_ACTIONS } from '../illuminate/containers/AccountDrilldowns/ClientDetails/action';
import { G2K_FINANCIALS_ACTIONS } from '../illuminate/containers/AccountDrilldowns/G2KFinancials/action';
import { CLIENT_USERS_ACTIONS } from '../illuminate/containers/TeamAccessManagement/action';
import { ACCOUNT_DATA_ACTIONS } from '../illuminate/containers/AccountDrilldowns/AccountData/action';
import { POLICY_AGREEMENT_ACTIONS } from '../common/containers/PolicyAgreementConsent/action';
import {
  FILTER_CRITERIA_ACTIONS,
  FILTER_DELETE_ACTIONS, TAG_DATA_ACTIONS
} from '../illuminate/containers/DashboardFilters/action';
import { PC_TEMPLATES_ACTIONS, GET_TEMPLATE_COLUMNS_ACTIONS, TEMPLATE_MANAGER_ACTIONS, TEMPLATE_DELETE_ACTIONS, CREATE_TEMPLATE_ACTIONS } from '../illuminate/containers/DashboardTemplates/action';
import { SIDEBAR_ACTIONS } from '../common/containers/RefactoredDashboard/SideBar/action';
import { USER_PREFERENCE_ACTIONS, UPDATE_USER_PREFERENCES_ACTIONS } from '../common/containers/RefactoredDashboard/TopBar/action';
import { USER_ONBOARDING_STATUS_ACTIONS } from '../common/containers/UserOnboarding/action';

export default {
  ...DASHBOARD_ACTIONS,
  ...APP_ACTIONS,
  ...SITE_SELECTION_ACTIONS,
  ...AUTH_ACTIONS,
  ...CLIENT_DATA_ACTIONS,
  ...UPLOAD_ACTIONS,
  ...ACCOUNT_LIST_ACTIONS,
  ...ACCOUNT_SUMMARY_ACTIONS,
  ...PRODUCT_CATEGORY_ACTIONS,
  ...REVENUE_PLAN_ACTIONS,
  ...PGI_GRAPH_ACTIONS,
  ...PROD_CAT_FILTER_ACTIONS,
  ...BC_ESTIMATES_ACTIONS,
  ...ACCOUNT_TEAM_ACTIONS,
  ...LEGAL_ENTITIES_ACTIONS,
  ...ACCOUNT_DETAILS_ACTIONS,
  ...ACCOUNT_USERS_ACTIONS,
  ...ACCOUNT_MATCHING_DATA_ACTIONS,
  ...ACC_MATCHING_SEARCH_DATA_ACTIONS,
  ...UPDATE_ACC_MATCHING_DATA_ACTIONS,
  ...USER_PROFILE_ACTIONS,
  ...EDIT_USER_PROFILE_ACTIONS,
  ...CLIENT_DETAILS_ACTIONS,
  ...G2K_FINANCIALS_ACTIONS,
  ...CLIENT_USERS_ACTIONS,
  ...ACCOUNT_DATA_ACTIONS,
  ...LOGGED_IN_USER_DETAILS_ACTIONS,
  ...POLICY_AGREEMENT_ACTIONS,
  ...FILTER_CRITERIA_ACTIONS,
  ...FILTER_DELETE_ACTIONS,
  ...TAG_DATA_ACTIONS,
  ...PC_TEMPLATES_ACTIONS,
  ...GET_TEMPLATE_COLUMNS_ACTIONS,
  ...TEMPLATE_MANAGER_ACTIONS,
  ...TEMPLATE_DELETE_ACTIONS,
  ...CREATE_TEMPLATE_ACTIONS,
  ...SIDEBAR_ACTIONS,
  ...USER_PREFERENCE_ACTIONS,
  ...UPDATE_USER_PREFERENCES_ACTIONS,
  ...USER_ONBOARDING_STATUS_ACTIONS
};
