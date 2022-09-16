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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var effects_1 = require("redux-saga/effects");
var configureActions_1 = require("../../utils/configureActions");
var configureActionCreators_1 = require("../../utils/configureActionCreators");
var cognitoUtils_1 = require("../../utils/cognitoUtils");
function initializeSessionSaga(action) {
    var callbackUrl, session, error_1;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 5, , 6]);
                callbackUrl = ((_b = (_a = action) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.callbackUrl) || null;
                return [4 /*yield*/, cognitoUtils_1["default"].parseCognitoWebResponse(callbackUrl)];
            case 1:
                _c.sent();
                return [4 /*yield*/, cognitoUtils_1["default"].getCognitoSession()];
            case 2:
                session = _c.sent();
                if (!session) return [3 /*break*/, 4];
                return [4 /*yield*/, effects_1.put(configureActionCreators_1.authActionCreator.setSession(__assign({}, session)))];
            case 3:
                _c.sent();
                _c.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_1 = _c.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
exports.initializeSessionSaga = initializeSessionSaga;
function getUserListSaga(action) {
    var result, error_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4 /*yield*/, cognitoUtils_1["default"].getUsers()];
            case 1:
                result = _b.sent();
                return [4 /*yield*/, effects_1.put(configureActionCreators_1.authActionCreator.setUsersDetails(((_a = result) === null || _a === void 0 ? void 0 : _a.Users) || []))];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
exports.getUserListSaga = getUserListSaga;
function AuthenticationSagas() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(configureActions_1["default"].INIT_SESSION, initializeSessionSaga)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeEvery(configureActions_1["default"].GET_USER_LIST, getUserListSaga)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports["default"] = AuthenticationSagas;
