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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.accountListReducer = exports.initialState = void 0;
var configureActions_1 = require("../../utils/configureActions");
exports.initialState = {
    accountList: null,
    isLoading: false,
    nextPageUrl: null,
    recPerPage: 15
};
exports.accountListReducer = function (state, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    if (state === void 0) { state = exports.initialState; }
    var nextPageUrl;
    switch (action.type) {
        case configureActions_1["default"].GET_ACCOUNT_LIST_REQUEST:
            nextPageUrl = (_a = action === null || action === void 0 ? void 0 : action.payload) === null || _a === void 0 ? void 0 : _a.nextPageUrl;
            return __assign(__assign({}, state), { isLoading: true, nextPageUrl: nextPageUrl });
        case configureActions_1["default"].GET_ACCOUNT_LIST_SUCCESS:
            var accounts = (_d = (_c = (_b = action === null || action === void 0 ? void 0 : action.payload) === null || _b === void 0 ? void 0 : _b.responseData) === null || _c === void 0 ? void 0 : _c.items) !== null && _d !== void 0 ? _d : null;
            var accountList = (accounts === null || accounts === void 0 ? void 0 : accounts.length) ? __spreadArrays(accounts) : [];
            var nextPage = (_f = (_e = action === null || action === void 0 ? void 0 : action.payload) === null || _e === void 0 ? void 0 : _e.responseData) === null || _f === void 0 ? void 0 : _f.next;
            var recPerPage = (_j = (_h = (_g = action === null || action === void 0 ? void 0 : action.payload) === null || _g === void 0 ? void 0 : _g.responseData) === null || _h === void 0 ? void 0 : _h.per_page) !== null && _j !== void 0 ? _j : 10;
            return __assign(__assign({}, state), { accountList: __spreadArrays(accountList), isLoading: false, nextPageUrl: nextPage, recPerPage: recPerPage });
        case configureActions_1["default"].GET_ACCOUNT_LIST_ERROR:
            return __assign(__assign({}, state), { isLoading: false });
        case configureActions_1["default"].GET_MORE_ACCOUNTS_REQUEST:
            nextPageUrl = (_k = action === null || action === void 0 ? void 0 : action.payload) === null || _k === void 0 ? void 0 : _k.nextPageUrl;
            return __assign(__assign({}, state), { isLoading: true, nextPageUrl: nextPageUrl });
        case configureActions_1["default"].GET_MORE_ACCOUNTS_SUCCESS:
            var moreAccounts = (_o = (_m = (_l = action === null || action === void 0 ? void 0 : action.payload) === null || _l === void 0 ? void 0 : _l.responseData) === null || _m === void 0 ? void 0 : _m.items) !== null && _o !== void 0 ? _o : [];
            return __assign(__assign({}, state), { accountList: __spreadArrays(state.accountList, moreAccounts), isLoading: false, nextPageUrl: (_q = (_p = action === null || action === void 0 ? void 0 : action.payload) === null || _p === void 0 ? void 0 : _p.responseData) === null || _q === void 0 ? void 0 : _q.next, recPerPage: (_s = (_r = action === null || action === void 0 ? void 0 : action.payload) === null || _r === void 0 ? void 0 : _r.responseData) === null || _s === void 0 ? void 0 : _s.per_page });
        case configureActions_1["default"].GET_MORE_ACCOUNTS_ERROR:
            return __assign(__assign({}, state), { isLoading: false });
        default:
            return __assign({}, state);
    }
};
