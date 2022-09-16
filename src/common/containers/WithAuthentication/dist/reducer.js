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
exports.authReducer = void 0;
var configureActions_1 = require("../../utils/configureActions");
var localStorageUtils_1 = require("../../utils/localStorageUtils");
var isLoggedIn = localStorageUtils_1.getLocalStorageItem('accessToken') ? true : false;
var initialState = {
    isLoggedIn: isLoggedIn,
    session: null,
    callbackUrl: '',
    users: []
};
exports.authReducer = function (state, action) {
    var _a, _b, _c;
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case configureActions_1["default"].INIT_SESSION:
            var callbackUrl = ((_a = action === null || action === void 0 ? void 0 : action.payload) === null || _a === void 0 ? void 0 : _a.callbackUrl) || '';
            return __assign(__assign({}, state), { callbackUrl: callbackUrl });
        case configureActions_1["default"].SET_SESSION:
            var session = ((_b = action === null || action === void 0 ? void 0 : action.payload) === null || _b === void 0 ? void 0 : _b.session) || null;
            return __assign(__assign({}, state), { isLoggedIn: true, session: session });
        case configureActions_1["default"].CLEAR_SESSION:
            return __assign(__assign({}, initialState), { isLoggedIn: false });
        case configureActions_1["default"].SET_USERS_DETAILS:
            var users = ((_c = action === null || action === void 0 ? void 0 : action.payload) === null || _c === void 0 ? void 0 : _c.users) || [];
            return __assign(__assign({}, state), { users: users });
        default:
            return __assign({}, state);
    }
};
