"use strict";
exports.__esModule = true;
exports.setLocaleLang = void 0;
var configureActions_1 = require("../../utils/configureActions");
exports.setLocaleLang = function (localeLang) { return ({
    type: configureActions_1["default"].SET_LOCALE,
    payload: { localeLang: localeLang }
}); };
