"use strict";
exports.__esModule = true;
exports.getAccountFailure = exports.getAccountSuccess = exports.getAccountList = void 0;
var configureActions_1 = require("../../utils/configureActions");
exports.getAccountList = function (nextPageUrl) {
    if (nextPageUrl === void 0) { nextPageUrl = undefined; }
    return ({
        type: configureActions_1["default"].GET_ACCOUNT_LIST_REQUEST,
        payload: { nextPageUrl: nextPageUrl }
    });
};
exports.getAccountSuccess = function (responseData) { return ({
    type: configureActions_1["default"].GET_ACCOUNT_LIST_SUCCESS,
    payload: { responseData: responseData }
}); };
exports.getAccountFailure = function (errorData) { return ({
    type: configureActions_1["default"].GET_ACCOUNT_LIST_ERROR,
    payload: { errorData: errorData }
}); };
