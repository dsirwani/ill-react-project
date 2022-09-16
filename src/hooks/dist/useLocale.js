"use strict";
exports.__esModule = true;
exports.useLocale = void 0;
var react_1 = require("react");
exports.useLocale = function (initialLang) {
    if (initialLang === void 0) { initialLang = 'en'; }
    var _a = react_1.useState(initialLang), locale = _a[0], setLocaleLang = _a[1];
    var setLocale = function (selectedLang) {
        try {
            setLocaleLang(selectedLang);
        }
        catch (e) {
            setLocaleLang('en');
        }
    };
    return [locale, setLocale];
};
