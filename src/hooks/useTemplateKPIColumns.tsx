import { useContext } from 'react';
import TemplateContext from '../contexts/TemplateContext';

const useTemplateKPIColumns = () => useContext(TemplateContext);

export default useTemplateKPIColumns;

/* import { useContext } from 'react'; 
import SettingsContext from 'src/contexts/SettingsContext';
import type { SettingsContextValue } from 'src/contexts/SettingsContext';

const useSettings = (): SettingsContextValue => useContext(SettingsContext);

export default useSettings;

import { useContext } from 'react';
import AuthContext from 'src/contexts/JWTAuthContext';

const useAuth = () => useContext(AuthContext);

export default useAuth; */
