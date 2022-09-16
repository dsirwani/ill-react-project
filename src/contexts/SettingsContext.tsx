import React, {
  createContext,
  useEffect,
  useState
} from 'react';
import { FC, ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../utils/injectReducer';
import { UserPreferenceState } from '../common/containers/RefactoredDashboard/TopBar/type';
import _ from 'lodash';
import { THEMES } from '../constants';
import { dashboardActionCreator, userPreferenceActionCreator } from '../utils/configureActionCreators';

interface Settings {
  theme?: string;
  mmFactoring?: boolean;
  currency?: string,
  language?: string,
}

export interface SettingsContextValue {
  settings: Settings;
  previousSettings: Settings;
  saveSettings: (update: Settings) => void;
}

interface SettingsProviderProps {
  settings?: Settings;
  children?: ReactNode;
}

const defaultSettings: Settings = {
  theme: THEMES.LIGHT,
  mmFactoring: false,
  currency: 'USD',
  language: 'en',
};

export const restoreSettings = (): Settings | null => {
  let settings = null;

  try {
    const storedData: string | null = window.localStorage.getItem('settings');
    if (storedData) {
      settings = JSON.parse(storedData);
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings;
};

export const storeSettings = (settings: Settings): void => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
};

const SettingsContext = createContext<SettingsContextValue>({
  settings: defaultSettings,
  previousSettings: defaultSettings,
  saveSettings: () => { },
});

export const SettingsProvider: FC<SettingsProviderProps> = ({ settings, children }) => {
  const [currentSettings, setCurrentSettings] = useState<Settings>(settings || defaultSettings);

  const [previousSettings, setPreviousSettings] = useState<Settings>(settings || defaultSettings);

  const dispatch = useDispatch();

  const { data }: UserPreferenceState = useSelector(
    (state: RootState) => state.userPreferenceData?.userPreferenceData
  );

  const handleSaveSettings = (update: Settings = {}): void => {
    const mergedSettings = _.merge({}, currentSettings, update);
    setPreviousSettings(currentSettings)
    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
    dispatch(dashboardActionCreator.setLocaleLang(mergedSettings.language ? mergedSettings.language : 'en'));
    dispatch(userPreferenceActionCreator.updateUserPreferencesRequest({
      preferencesData: {
        "theme": mergedSettings.theme === THEMES.ONE_DARK ? 'dark' : 'light',
        "is_currency_pref_million": mergedSettings.mmFactoring,
        "display_currency": mergedSettings.currency,
        "display_language": mergedSettings.language
      }
    }));
  };

  // set user preference data received from back-end into current settings and localstorage
  const setUserPreferenceData = (data: any) => {
    return {
      theme: data?.theme === 'dark' ? THEMES.ONE_DARK : THEMES.LIGHT,
      mmFactoring: data?.is_currency_pref_million,
      currency: data?.display_currency,
      language: data?.display_language,
    }
  }

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setCurrentSettings(restoredSettings);
    }
  }, []);

  useEffect(() => {
    if (data) {
      const preferenceData = setUserPreferenceData(data)
      setCurrentSettings(preferenceData)
      storeSettings(preferenceData);
    }
  }, [data]);

  // useEffect(() => {
  //   document.dir = currentSettings.direction || '';
  // }, [currentSettings]);

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        previousSettings: previousSettings,
        saveSettings: handleSaveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;