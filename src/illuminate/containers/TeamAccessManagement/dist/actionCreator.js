"use strict";
exports.__esModule = true;
exports.getMoreClientUsersError = exports.getMoreClientUsersSuccess = exports.getMoreClientUsersRequest = exports.clientUsersReset = exports.clientUsersError = exports.clientUsersSuccess = exports.clientUsersRequest = void 0;
var configureActions_1 = require("../../utils/configureActions");
exports.clientUsersRequest = function (data) { return ({
    type: configureActions_1["default"].CLIENT_USERS_REQUEST,
    payload: data
}); };
exports.clientUsersSuccess = function (data) { return ({
    type: configureActions_1["default"].CLIENT_USERS_SUCCESS,
    payload: data
}); };
exports.clientUsersError = function (error) { return ({
    type: configureActions_1["default"].CLIENT_USERS_ERROR,
    payload: error
}); };
exports.clientUsersReset = function () { return ({
    type: configureActions_1["default"].CLIENT_USERS_RESET
}); };
exports.getMoreClientUsersRequest = function (data) { return ({
    type: configureActions_1["default"].GET_MORE_CLIENT_USERS_REQUEST,
    payload: data
}); };
exports.getMoreClientUsersSuccess = function (data) { return ({
    type: configureActions_1["default"].GET_MORE_CLIENT_USERS_SUCCESS,
    payload: data
}); };
exports.getMoreClientUsersError = function (error) { return ({
    type: configureActions_1["default"].GET_MORE_CLIENT_USERS_ERROR,
    payload: error
}); };
