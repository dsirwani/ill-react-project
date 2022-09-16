import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { jssPreset } from '@material-ui/core';
import { createTheme } from './../../../theme/';
import { StylesProvider, ThemeProvider } from '@material-ui/core';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ROUTES } from '../../../utils/routeConstants';
import I18nContextProvider from '../../../illuminate/components/I18nContextProvider';
import PolicyAgreementConsent from '../PolicyAgreementConsent/index';
import GlobalStyles from '../../../common/components/GlobalStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useSettings from './../../../hooks/useSettings';
import WithAuthentication from '../WithAuthentication';
import Logout from '../../components/Logout';
import Callback from '../../components/Callback';
import RefactoredDashboard from '../RefactoredDashboard';

export interface Props { }
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App: React.FC<Props> = () => {

  const { settings } = useSettings();

  const theme = createTheme({
    // direction: settings.direction,
    // responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme,
    mmFactoring: settings.mmFactoring,
    currency: settings.currency,
    language: settings.language,
  });

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <GlobalStyles />
        <I18nContextProvider>
          <BrowserRouter>
            <div>
              <div className="main-app">
                <Switch>
                  <Route exact path={ROUTES.LOGOUT} render={() => <Logout />} />
                  <Route exact path={ROUTES.CALLBACK} render={() => <Callback />} />
                  <Route exact path={ROUTES.POLICY_ACCEPTANCE} render={() => <PolicyAgreementConsent />} />
                  <WithAuthentication component={RefactoredDashboard} path="/" />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </I18nContextProvider>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
