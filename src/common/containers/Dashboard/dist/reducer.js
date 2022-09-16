"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.dashboardReducer = void 0;
var configureActions_1 = require("../../utils/configureActions");
var initialState = {
    locale: 'en'
};
exports.dashboardReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case configureActions_1["default"].SET_LOCALE:
            var localeLang = (action === null || action === void 0 ? void 0 : action.payload.localeLang) || initialState.locale;
            return __assign(__assign({}, state), { locale: localeLang });
        default:
            return __assign({}, state);
    }
};
