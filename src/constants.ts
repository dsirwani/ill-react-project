export const APP_VERSION = '3.1.0';

export const ENABLE_REDUX_DEV_TOOLS = true;

export const THEMES = {
  LIGHT: 'LIGHT',
  ONE_DARK: 'ONE_DARK',
  // UNICORN: 'UNICORN'
};

export const CURRENCY = [
  { currency: 'USD', caption: 'USD - Dollar' },
  { currency: 'EUR', caption: 'EUR - Euro' },
  { currency: 'JPY', caption: 'JPY - Japanese Yen' },
  { currency: 'GBP', caption: 'GBP - Pound Sterling' },
  { currency: 'AUD', caption: 'AUD - Australian Dollar' },
  { currency: 'CAD', caption: 'CAD - Canadian Dollar' },
  { currency: 'CHF', caption: 'SF/CHf - Swiss Franc' },
  { currency: 'CNY', caption: 'CNY/CHN - Chinese Yuan Renminbi' },
  { currency: 'HKD', caption: 'HKD - Hong Kong Dollar' },
  { currency: 'NZD', caption: 'NZD - New Zealand Dollar' },
  { currency: 'KRW', caption: 'KRW - South Korean Won' },
];

export const LANGUAGES = [
  { locale: 'English', code: 'en' },
  { locale: 'Japanese', code: 'ja' },
  { locale: 'French', code: 'fr' },
  { locale: 'Arabic', code: 'ar' },
];

export const VARIABLE_TYPES = {
  revenue: {
    displayValue: '$ 00.00',
    variableType: 'financial value'
  },
  growth: {
    displayValue: '0.00%',
    variableType: 'percentage'
  },
  plan: {
    displayValue: '$ 0.00',
    variableType: 'financial value'
  },
  buying_centers: {
    displayValue: '0/0',
    variableType: 'percentage'
  },
  pgi: {
    displayValue: '0.0000',
    variableType: 'percentage'
  }
}
