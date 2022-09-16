"use strict";
exports.__esModule = true;
var configureActions_1 = require("../../utils/configureActions");
exports.initSession = function (callbackUrl) { return ({
    type: configureActions_1["default"].INIT_SESSION,
    payload: { callbackUrl: callbackUrl }
}); };
exports.setSession = function (session) { return ({
    type: configureActions_1["default"].SET_SESSION,
    payload: { session: session }
}); };
exports.clearSession = function () { return ({
    type: configureActions_1["default"].CLEAR_SESSION,
    payload: {}
}); };
exports.getUserList = function () { return ({
    type: configureActions_1["default"].GET_USER_LIST,
    payload: {}
}); };
exports.setUsersDetails = function (users) { return ({
    type: configureActions_1["default"].SET_USERS_DETAILS,
    payload: { users: users }
}); };
