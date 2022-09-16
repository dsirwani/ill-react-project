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
var configureActions_1 = require("../../utils/configureActions");
var initialState = {
    show: false,
    errorMsg: '',
    severity: ''
};
exports.appReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var _a, _b, _c, _d;
    switch (action.type) {
        case configureActions_1["default"].SHOW_MESSAGE:
            var msgProperties = ((_b = (_a = action) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.msgProperties) || initialState;
            return (__assign(__assign({}, state), msgProperties));
        case configureActions_1["default"].HIDE_MESSAGE:
            var hideMsgProperties = ((_d = (_c = action) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.msgProperties) || initialState;
            return (__assign(__assign({}, state), hideMsgProperties));
        default:
            return __assign({}, state);
    }
};
