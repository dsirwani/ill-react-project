import { getClientAppURL, getClientCommonURL, getPolarisCommonURL, getClientCommonURLForClientList } from '../utils/miscUtils';
import APP_CONFIG from '../config/app-config.json';

export const configAPI = {
  uploadWorkbookRequest: {
    REQUEST_URL: '/csv-upload',
    method: 'post',
  },

  getClientData: (email: string, isPolarisInstance: boolean) => {
    let hostUrl = window.location.host.split('.')[0];
    let url = `${isPolarisInstance ? getPolarisCommonURL() : getClientCommonURL()}/clients?email=${email}`;
    if (hostUrl === 'localhost:3000') {
      url = `https://pio-com-${APP_CONFIG.AWS_API_GATEWAY_CONFIG.API_URL}/clients?email=${email}`;
    }
    //const url = `${getClientCommonURL()}/clients?email=${email}`;
    return {
      REQUEST_URL: url,
    };
  },

  getMoreClientData: (nextPageUrl: string) => {
    const url = `${nextPageUrl}`;
    return {
      REQUEST_URL: url,
    };
  },

  workbookUpload: (workbookType: string) => {
    const url = `${getClientCommonURL()}/csv-upload${workbookType}`;
    return {
      REQUEST_URL: url,
    };
  },

  getAccountData: (accountId: string, clientId: string | null) => {
    const url = `${getClientCommonURL()}/account-list/${accountId}?client_id=${clientId}`;
    return {
      REQUEST_URL: url,
    };
  },

  getProductCategoryData: (
    accountId: string,
    tabName: string,
    clientId: string | null
  ) => {
    const url = `${getClientAppURL()}/account-list/${accountId}/kpis/?tab=${tabName}&client_id=${clientId}&per_page=10`;
    return {
      REQUEST_URL: url,
    };
  },

  getMoreProductCategoryData: (nextPageUrl: string, tabName: string) => {
    const url = `${getClientAppURL()}${nextPageUrl}&tab=${tabName}`;
    return {
      REQUEST_URL: url,
    };
  },

  getProductData: (
    productId: string,
    accountId: string,
    tabName: string,
    clientId: string | null
  ) => {
    const url = `${getClientAppURL()}/account-list/${accountId}/kpis/?tab=${tabName}&client_id=${clientId}&product_id=${productId}`;
    return {
      REQUEST_URL: url,
    };
  },

  getRevenuePlanData: (
    accountId: string,
    period: string,
    year: string,
    productIds: string,
    clientId: string | null
  ) => {
    const url = `${getClientAppURL()}/account-list/${accountId}/graphs/revenue-plan?year_type=${period}${period === 'calendar' || period === 'fiscal' ? `&year=${year}` : ''
      }&product_ids=${productIds}&client_id=${clientId}`;
    return {
      REQUEST_URL: url,
    };
  },

  getPGIGraphData: (
    clientId: string | null,
    accountId: string,
    period: string,
    year: string,
    productIds: string
  ) => {
    const url = `${getClientAppURL()}/account-list/${accountId}/graphs/pgi?client_id=${clientId}&year_type=${period}${period === 'calendar' || period === 'fiscal' ? `&year=${year}` : ''
      }&product_ids=${productIds}`;
    return {
      REQUEST_URL: url,
    };
  },

  getBCEstimatesData: (
    clientId: string | null,
    accountId: string,
    period: string,
    year: string,
    productIds: string
  ) => {
    const url = `${getClientAppURL()}/account-list/${accountId}/graphs/buying-centers?client_id=${clientId}&year_type=${period}${period === 'calendar' || period === 'fiscal' ? `&year=${year}` : ''
      }&product_ids=${productIds}`;
    return {
      REQUEST_URL: url,
    };
  },

  getProductCategoryFilterData: (
    accountId: string,
    clientId: string | null
  ) => {
    const url = `${getClientAppURL()}/product-categories?account_id=${accountId}&client_id=${clientId}`;
    return {
      REQUEST_URL: url,
    };
  },

  getMoreProdCatFilterData: (nextPageUrl: string) => {
    const url = `${nextPageUrl}`;
    return {
      REQUEST_URL: url,
    };
  },

  getAccountTeamData: (accountId: string, clientId: string | null) => {
    const url = `${getClientCommonURL()}/users?client_id=${clientId}&account_id=${accountId}`;
    return {
      REQUEST_URL: url,
    };
  },

  getMoreAccountTeamData: (nextPageUrl: string) => {
    const url = `${nextPageUrl}`;
    return {
      REQUEST_URL: url,
    };
  },

  getAccountDetailsData: (accountId: string, clientId: string | null) => {
    const url = `${getClientCommonURL()}/account-list/${accountId}/details?client_id=${clientId}`;
    return {
      REQUEST_URL: url,
    };
  },

  getUserProfile: (
    clientId: string | null,
    userId: string,
    accountId: string
  ) => {
    const url = `${getClientCommonURL()}/users/${userId}?client_id=${clientId}&account_id=${accountId}`;
    return {
      REQUEST_URL: url,
    };
  },

  getClientDetailsData: (clientId: string = 'ABC0001') => {
    const url = `${getClientCommonURL()}/clients/${clientId}`;
    return {
      REQUEST_URL: url,
    };
  },

  getReportingPeriodData: (
    clientId: string | null,
    accountId: string,
    reportType: string | null,
    reportingFrequency: string | null
  ) => {
    const url = `${getClientAppURL()}/g2k-finance/${accountId}/reporting-periods?client_id=${clientId}&report_type=${reportType}&reporting_frequency=${reportingFrequency}`;
    return {
      REQUEST_URL: url,
    };
  },

  getClientUsersList: (clientId: string) => {
    const url = `${getClientCommonURL()}/users?client_id=${clientId}`;
    return {
      REQUEST_URL: url,
    };
  },

  getMoreClientUsersList: (nextPageUrl: string) => {
    const url = `${nextPageUrl}`;
    return {
      REQUEST_URL: url,
    };
  },

  getAccountsData: (
    clientId: string | null,
    accountId: string,
    dataType: string,
    date: string
  ) => {
    const url = `${getClientAppURL()}/account-data/${accountId}?client_id=${clientId}&data_type=${dataType}&period=${date}`;
    return {
      REQUEST_URL: url,
    };
  },

  getMoreAccountsData: (nextPageUrl: string) => {
    const url = `${nextPageUrl}`;
    return {
      REQUEST_URL: url,
    };
  },

  getG2KFinancialsData: (
    clientId: string | null,
    accountId: string,
    reportType: string | null,
    reportingFrequency: string | null,
  ) => {
    const url = `${getClientAppURL()}/g2k-finance/${accountId}/financial-details?client_id=${clientId}&report_type=${reportType}&reporting_frequency=${reportingFrequency}`;
    return {
      REQUEST_URL: url,
    };
  },

  getLEIData: (clientId: string | null, accountId: string) => {
    const url = `${getClientCommonURL()}/account-list/${accountId}/lei-details?client_id=${clientId}`;
    return {
      REQUEST_URL: url,
    };
  },


  getLoggedInUserDetails: (clientId: string | null, email: string) => {
    const url = `${getClientCommonURL()}/users?client_id=${clientId}&user_email=${email}`;
    return {
      REQUEST_URL: url,
    };
  },

  getAcceptConsentPolicies: () => {
    const url = `${getPolarisCommonURL()}/policies`;
    return {
      REQUEST_URL: url
    };
  },

  getAcceptConsentAfterLogin: (userEmail: string) => {
    const url = `${getPolarisCommonURL()}/after-login?user_email=${userEmail}`;
    return {
      REQUEST_URL: url
    };
  },

  getSiteSelectionData: (clientId: string | null, email: string, accId: string) => {
    const url = `${getClientAppURL()}/microsites?client_id=${clientId}&email=${email}${accId ? `&account_id=${accId}` : ''}`;
    return {
      REQUEST_URL: url,
    };
  },

  editUserProfile: (accountId: string, clientId: string | null, userId: string) => {
    const url = `${getClientCommonURL()}/users/${userId}?client_id=${clientId}&account_id=${accountId}`;
    return {
      REQUEST_URL: url,
    };
  },

  getFilterCriteriaData: (
    clientId: string | null,
    template: number
  ) => {
    const url = `${getClientAppURL()}/filter_criteria_list?client_id=${clientId}&template_id=${template}`;
    return {
      REQUEST_URL: url,
    };
  },

  getFilterListData: (
    clientId: string | null,
    user: string | null,
    template: number | null
  ) => {
    const url = `${getClientAppURL()}/filters?client_id=${clientId}&user=${user}&template_id=${template}`;
    return {
      REQUEST_URL: url,
    };
  },

  savefilterToStore: () => {
    const url = `${getClientAppURL()}/filters`;
    return {
      REQUEST_URL: url,
    };
  },

  deleteFilterData: () => {
    const url = `${getClientAppURL()}/filters`;
    return {
      REQUEST_URL: url,
    };
  },

  getTagData: (
    clientId: string | null,
    query: any,
  ) => {
    const url = `${getClientAppURL()}/tags?client_id=${clientId}&q=${encodeURIComponent(query)}`;
    return {
      REQUEST_URL: url,
    };
  },

  getAccountMatchingData: (
    accountId: string,
    clientId: string | null,
    matchType: string | null
  ) => {
    const url = `${getClientCommonURL()}/account-list/${accountId}/name-matching?client_id=${clientId}&match_type=${matchType}`;
    return {
      REQUEST_URL: url,
    };
  },

  getAccMatchingSearchData: (searchType: string | null, query: string) => {
    const url = `${getPolarisCommonURL()}/search?model=${searchType}&q=${query}`;
    return {
      REQUEST_URL: url,
    };
  },

  updateAccMatchingData: (accountId: string, clientId: string | null) => {
    const url = `${getClientCommonURL()}/account-list/${accountId}/name-matching?client_id=${clientId}`;
    return {
      REQUEST_URL: url,
    };
  },

  getPCTemplatesData: (
    clientId: string | null,
  ) => {
    const url = `${getClientAppURL()}/templates?client_id=${clientId}&template_type=kpi_dashboard&template_status=ready`;
    return {
      REQUEST_URL: url,
    };
  },

  getTemplatesData: (
    clientId: string | null,
  ) => {
    const url = `${getClientAppURL()}/templates?client_id=${clientId}&template_type=kpi_dashboard`;
    return {
      REQUEST_URL: url,
    };
  },

  getTemplatesKPIColumns: (params: any) => {
    const url = `${getClientAppURL()}/template-configs?client_id=${params.clientId}&fin_data_type=${params.finDataType}&template_type=${params.templateType}`;
    return {
      REQUEST_URL: url,
    };
  },

  deleteTemplateData: () => {
    const url = `${getClientAppURL()}/templates`;
    return {
      REQUEST_URL: url,
    };
  },

  createTemplate: () => {
    const url = `${getClientAppURL()}/templates`;
    return {
      REQUEST_URL: url,
    };
  },

  getUserPreferenceData: () => {
    const url = `${getClientCommonURL()}/users/user_preferences`;
    return {
      REQUEST_URL: url,
    };
  },

  updateUserPreferencesData: () => {
    const url = `${getClientCommonURL()}/users/user_preferences`;
    return {
      REQUEST_URL: url,
    };
  },

  getUserOnboardingStatusData: () => {
    const url = `${getClientCommonURLForClientList()}/user-info/`;
    return {
      REQUEST_URL: url,
    };
  },

};
