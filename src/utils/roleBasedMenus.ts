// Role based drill-down menu items

export const COMMON_MENU_ITEMS = [
  { value: 'kpi', caption: 'KPI', disabled: false },
  { value: 'graphs', caption: 'Graphs', disabled: false },
  { value: 'account_details', caption: 'Account Details', disabled: false },
  { value: 'account_data', caption: 'Account Data', disabled: false },
  { value: 'microsites', caption: 'Microsites', disabled: false },
]

const IS_SUPER_ADMIN = [
  ...COMMON_MENU_ITEMS,
  { value: 'account_team', caption: 'Account Team', disabled: false },
  { value: 'legal_entities', caption: 'Legal Entities', disabled: false },
  { value: 'account_management', caption: ' User Profile', disabled: true },
  { value: 'client_details', caption: 'Client Details', disabled: false },
  { value: 'g2k_financials', caption: 'G2K Financials', disabled: false },
]

const IS_ADMIN = [
  ...COMMON_MENU_ITEMS,
  { value: 'account_team', caption: 'Account Team', disabled: false },
  { value: 'legal_entities', caption: 'Legal Entities', disabled: false },
  { value: 'account_management', caption: ' User Profile', disabled: true },
  { value: 'client_details', caption: 'Client Details', disabled: false },
  { value: 'g2k_financials', caption: 'G2K Financials', disabled: false },
]

const IS_ACCOUNT_MANAGER = [
  ...COMMON_MENU_ITEMS,
  { value: 'account_team', caption: 'Account Team', disabled: false },
  { value: 'legal_entities', caption: 'Legal Entities', disabled: false },
  { value: 'account_management', caption: ' User Profile', disabled: true },
  { value: 'g2k_financials', caption: 'G2K Financials', disabled: false }
]

const IS_PEOPLE_MANAGER = [
  ...COMMON_MENU_ITEMS,
  { value: 'account_team', caption: 'Account Team', disabled: false },
  { value: 'account_management', caption: ' User Profile', disabled: true },
]

const IS_TEAM_MEMBER = [
  ...COMMON_MENU_ITEMS,
]

export default {
  IS_SUPER_ADMIN,
  IS_ADMIN,
  IS_ACCOUNT_MANAGER,
  IS_PEOPLE_MANAGER,
  IS_TEAM_MEMBER
};