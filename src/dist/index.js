"use strict";
exports.__esModule = true;
exports.store = void 0;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_redux_1 = require("react-redux");
var useMediaQuery_1 = require("@material-ui/core/useMediaQuery");
var styles_1 = require("@material-ui/core/styles");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
require("./index.css");
var App_1 = require("./containers/App");
var configureStore_1 = require("./utils/configureStore");
var serviceWorker = require("./serviceWorker");
var theme_1 = require("./theme");
//import { createBrowserHistory } from 'history';
var I18nContextProvider_1 = require("./components/I18nContextProvider");
exports.store = configureStore_1["default"]();
/* const history = createBrowserHistory();

const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
if (path) {
  history.replace(path);
} */
var Index = function () {
    var prefersDarkMode = useMediaQuery_1["default"]('(prefers-color-scheme: dark)');
    var themeObj = theme_1.getTheme(prefersDarkMode);
    var theme = react_1["default"].useMemo(function () { return styles_1.createMuiTheme(themeObj); }, [
        prefersDarkMode,
    ]);
    return (react_1["default"].createElement(react_1["default"].StrictMode, null,
        react_1["default"].createElement(styles_1.ThemeProvider, { theme: theme },
            react_1["default"].createElement(CssBaseline_1["default"], null),
            react_1["default"].createElement(react_redux_1.Provider, { store: exports.store },
                react_1["default"].createElement(I18nContextProvider_1["default"], null,
                    react_1["default"].createElement(App_1["default"], null))))));
};
react_dom_1["default"].render(react_1["default"].createElement(Index, null), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
