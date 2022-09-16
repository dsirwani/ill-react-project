import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './common/containers/App';
import confgureStore from './utils/configureStore';
import * as serviceWorker from './serviceWorker';

import { SettingsProvider } from './contexts/SettingsContext';

import 'react-perfect-scrollbar/dist/css/styles.css';

export const store = confgureStore();

const Index: React.FC = () => {
  //const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  //const themeObj = getTheme(prefersDarkMode);
  /* const theme: any = React.useMemo(() => createMuiTheme(themeObj), [
    prefersDarkMode,
  ]); */


  // console.log('theme', theme)

  return (
    <Provider store={store}>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </Provider>

  );
};

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
