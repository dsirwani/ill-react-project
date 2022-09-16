"use strict";
exports.__esModule = true;
exports.useI18n = exports.I18nFuncContextProvider = void 0;
var react_1 = require("react");
var I18nFuncContext = react_1["default"].createContext(null);
exports.I18nFuncContextProvider = I18nFuncContext.Provider;
function useI18n() {
    var i18n = react_1.useContext(I18nFuncContext);
    if (!i18n) {
        throw new Error('No context found');
    }
    return i18n;
}
exports.useI18n = useI18n;
