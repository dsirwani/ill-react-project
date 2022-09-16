import { fork, all } from 'redux-saga/effects';
import AuthenticationSagas from '../common/containers/WithAuthentication/saga';
import UserOnboardingStatusSaga from '../common/containers/UserOnboarding/Saga';
import SiteSelectionSaga from '../common/containers/SiteSelection/saga';
import ClientDataSaga from '../illuminate/containers/PlatformView/saga';
import AccountListSagas from '../illuminate/containers/AccountsView/saga';
import UploadSagas from '../illuminate/containers/Upload/saga';
import AccSummarySaga from '../illuminate/containers/AccountDrilldowns/saga';
import ProdCategorySaga from '../illuminate/containers/AccountDrilldowns/AccountKPIDetails/sagas/productCategorySaga';
import ProdSubCategorySaga from '../illuminate/containers/AccountDrilldowns/AccountKPIDetails/sagas/productSubCategorySaga';
import RevenuePlanSaga from '../illuminate/containers/AccountDrilldowns/VisualizationPanel/sagas/revenuePlanSaga';
import PGIGraphSaga from '../illuminate/containers/AccountDrilldowns/VisualizationPanel/sagas/pgiGraphSaga';
import BCEstimatesSaga from '../illuminate/containers/AccountDrilldowns/VisualizationPanel/sagas/bcEstimatesSaga';
import ProdCatFilterSaga from '../illuminate/containers/AccountDrilldowns/VisualizationPanel/sagas/prodCatFilterSaga';
import AccountTeamSaga from '../illuminate/containers/AccountDrilldowns/AccountTeam/saga';
import LegalEntitiesSaga from '../illuminate/containers/AccountDrilldowns/LegalEntities/saga';
import AccountDetailsSaga from '../illuminate/containers/AccountDrilldowns/AccountDetails/sagas/accountDetailsDataSaga';
import AccountUsersSaga from '../illuminate/containers/AccountDrilldowns/AccountDetails/sagas/accountDetailsUsersSaga';
import AccountMatchingDataSaga from '../illuminate/containers/AccountDrilldowns/AccountDetails/sagas/accountMatchingDataSaga';
import AccMatchingSearchDataSaga from '../illuminate/containers/AccountDrilldowns/AccountDetails/sagas/accMatchingSearchDataSaga'
import UpdateAccMatchingDataSaga from '../illuminate/containers/AccountDrilldowns/AccountDetails/sagas/updateAccMatchingDataSaga'
import UserProfileSaga from '../illuminate/containers/AccountDrilldowns/UserManagement/saga';
import ClientDetailsSaga from '../illuminate/containers/AccountDrilldowns/ClientDetails/sagas/clientDetailsDataSaga';
import G2KFinancialDataSaga from '../illuminate/containers/AccountDrilldowns/G2KFinancials/sagas/financialDataSaga';
import TeamManagementSaga from '../illuminate/containers/TeamAccessManagement/saga';
import AccountDataSaga from '../illuminate/containers/AccountDrilldowns/AccountData/saga';
import LoggedInUserDetailsSaga from '../illuminate/containers/AccountsView/LoggedInUserDetails/saga';
import PolicyAgreementConsentSagas from '../common/containers/PolicyAgreementConsent/saga';
import FilterCriteriaSaga from '../illuminate/containers/DashboardFilters/sagas/filterCriteriaSaga';
import FilterListSaga from '../illuminate/containers/DashboardFilters/sagas/filterListSaga';
import SaveFilterSaga from '../illuminate/containers/DashboardFilters/sagas/saveFilterSaga';
import FilterDeleteSaga from '../illuminate/containers/DashboardFilters/sagas/filterDeleteSaga';
import TagsDataSaga from '../illuminate/containers/DashboardFilters/sagas/tagsDataSaga';
import PCTemplatesSaga from '../illuminate/containers/DashboardTemplates/sagas/pcTemplatesSaga';
import TemplateManagerSaga from '../illuminate/containers/DashboardTemplates/sagas/templateManagerSaga';
import TemplateDeleteSaga from '../illuminate/containers/DashboardTemplates/sagas/templateDeleteSaga';
import CreateTemplateSaga from '../illuminate/containers/DashboardTemplates/sagas/createTemplateSaga';
import UserPreferenceDataSaga from '../common/containers/RefactoredDashboard/TopBar/sagas/userPreferenceSaga';
import UpdateUserPreferencesSaga from '../common/containers/RefactoredDashboard/TopBar/sagas/updateUserPreferencesDataSaga';

export default function* rootSaga() {
  yield all([
    // fork all sagas,
    fork(AuthenticationSagas),
    fork(SiteSelectionSaga),
    fork(ClientDataSaga),
    fork(AccountListSagas),
    fork(UploadSagas),
    fork(AccSummarySaga),
    fork(ProdCategorySaga),
    fork(ProdSubCategorySaga),
    fork(RevenuePlanSaga),
    fork(ProdCatFilterSaga),
    fork(PGIGraphSaga),
    fork(BCEstimatesSaga),
    fork(AccountTeamSaga),
    fork(LegalEntitiesSaga),
    fork(AccountDetailsSaga),
    fork(AccountUsersSaga),
    fork(AccountMatchingDataSaga),
    fork(AccMatchingSearchDataSaga),
    fork(UpdateAccMatchingDataSaga),
    fork(UserProfileSaga),
    fork(ClientDetailsSaga),
    fork(G2KFinancialDataSaga),
    fork(TeamManagementSaga),
    fork(AccountDataSaga),
    fork(LoggedInUserDetailsSaga),
    fork(PolicyAgreementConsentSagas),
    fork(FilterCriteriaSaga),
    fork(FilterListSaga),
    fork(SaveFilterSaga),
    fork(FilterDeleteSaga),
    fork(TagsDataSaga),
    fork(PCTemplatesSaga),
    fork(TemplateManagerSaga),
    fork(TemplateDeleteSaga),
    fork(CreateTemplateSaga),
    fork(UserPreferenceDataSaga),
    fork(UpdateUserPreferencesSaga),
    fork(UserOnboardingStatusSaga)
  ]);
}
