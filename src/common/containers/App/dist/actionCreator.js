"use strict";
exports.__esModule = true;
exports.clearSession = exports.setSession = exports.hideMessage = exports.showMessage = void 0;
var configureActions_1 = require("../../utils/configureActions");
exports.showMessage = function (msgProperties) { return ({
    type: configureActions_1["default"].SHOW_MESSAGE,
    payload: { msgProperties: msgProperties }
}); };
exports.hideMessage = function (msgProperties) { return ({
    type: configureActions_1["default"].HIDE_MESSAGE,
    payload: { msgProperties: msgProperties }
}); };
exports.setSession = function (session) { return ({
    type: configureActions_1["default"].SET_SESSION,
    payload: { session: session }
}); };
exports.clearSession = function () { return ({
    type: configureActions_1["default"].CLEAR_SESSION,
    payload: {}
}); };
