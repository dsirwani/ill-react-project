import { combineReducers } from 'redux';
import { dashboardReducer } from '../common/containers/Dashboard/reducer';
import { siteSelectionReducer } from '../common/containers/SiteSelection/reducer';
import { appReducer } from '../common/containers/App/reducer';
import { authReducer } from '../common/containers/WithAuthentication/reducer';
import { clientDataReducer } from '../illuminate/containers/PlatformView/reducer';
import { uploadReducer } from '../illuminate/containers/Upload/reducer';
import { accSummaryReducer } from '../illuminate/containers/AccountDrilldowns/reducer';
import { prodCategoryReducer } from '../illuminate/containers/AccountDrilldowns/AccountKPIDetails/reducer';
import { accountListReducer } from '../illuminate/containers/AccountsView/reducer';
import { visualizationReducer } from '../illuminate/containers/AccountDrilldowns/VisualizationPanel/reducer';
import { accountTeamReducer } from '../illuminate/containers/AccountDrilldowns/AccountTeam/reducer';
import { legalEntitiesReducer } from '../illuminate/containers/AccountDrilldowns/LegalEntities/reducer';
import { accountDetailsReducer } from '../illuminate/containers/AccountDrilldowns/AccountDetails/reducer';
import { userProfileReducer, editUserProfileReducer } from '../illuminate/containers/AccountDrilldowns/UserManagement/reducer';
import { clientDetailsReducer } from '../illuminate/containers/AccountDrilldowns/ClientDetails/reducer';
import { g2kDataReducer } from '../illuminate/containers/AccountDrilldowns/G2KFinancials/reducer';
import { teamManagementReducer } from '../illuminate/containers/TeamAccessManagement/reducer';
import { accountDataReducer } from '../illuminate/containers/AccountDrilldowns/AccountData/reducer';
import { loggedInUserDetailsReducer } from '../illuminate/containers/AccountsView/LoggedInUserDetails/reducer';
import { policyConsentReducer } from '../common/containers/PolicyAgreementConsent/reducer';
import { FilterCriteriaNAttrReducer } from '../illuminate/containers/DashboardFilters/reducer';
import { DashboardTemplatesReducer } from '../illuminate/containers/DashboardTemplates/reducer';
import { sidebarReducer } from '../common/containers/RefactoredDashboard/SideBar/reducer';
import { userPreferenceReducer } from '../common/containers/RefactoredDashboard/TopBar/reducer';
import { userOnboardingReducer } from '../common/containers/UserOnboarding/reducer';

export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  app: appReducer,
  siteSelectionData: siteSelectionReducer,
  auth: authReducer,
  accountList: accountListReducer,
  uploadData: uploadReducer,
  accSummaryData: accSummaryReducer,
  prodCategoryData: prodCategoryReducer,
  visualizationData: visualizationReducer,
  accountTeamData: accountTeamReducer,
  legalEntitiesData: legalEntitiesReducer,
  clientData: clientDataReducer,
  accountDetailsData: accountDetailsReducer,
  userProfileData: userProfileReducer,
  editUserProfileData: editUserProfileReducer,
  clientDetailsData: clientDetailsReducer,
  g2kData: g2kDataReducer,
  clientUsersList: teamManagementReducer,
  accountData: accountDataReducer,
  loggedInUserDetails: loggedInUserDetailsReducer,
  policyConsentData: policyConsentReducer,
  filterCriteriaData: FilterCriteriaNAttrReducer,
  dashboardTemplatesData: DashboardTemplatesReducer,
  sidebarData: sidebarReducer,
  userPreferenceData: userPreferenceReducer,
  userOnboardingData: userOnboardingReducer
});

export type RootState = ReturnType<typeof rootReducer>;
