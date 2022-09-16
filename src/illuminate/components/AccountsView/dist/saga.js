"use strict";
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
exports.getAccountListSaga = void 0;
var effects_1 = require("redux-saga/effects");
var configureActions_1 = require("../../utils/configureActions");
var configureActionCreators_1 = require("../../utils/configureActionCreators");
var httpService_1 = require("../../services/httpService");
var httpService = new httpService_1["default"]();
function getAccountListSaga(action) {
    var nextPageUrl, result, data, status, errorMsg, error_1, errorMsg;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                nextPageUrl = ((_a = action === null || action === void 0 ? void 0 : action.payload) === null || _a === void 0 ? void 0 : _a.nextPageUrl) === undefined
                    ? '/account-list/?per_page=10'
                    : action.payload.nextPageUrl;
                _d.label = 1;
            case 1:
                _d.trys.push([1, 9, , 12]);
                return [4 /*yield*/, effects_1.call(httpService.get, nextPageUrl)];
            case 2:
                result = _d.sent();
                data = result.data, status = result.status;
                if (!(status === 200)) return [3 /*break*/, 5];
                return [4 /*yield*/, effects_1.put(configureActionCreators_1.accountListActionCreator.getAccountSuccess(data))];
            case 3:
                _d.sent();
                return [4 /*yield*/, effects_1.put(configureActionCreators_1.appActionCreator.showMessage({
                        errorMsg: 'accounts fetched successfully',
                        severity: 'success',
                        show: true
                    }))];
            case 4:
                _d.sent();
                return [3 /*break*/, 8];
            case 5:
                errorMsg = '';
                errorMsg = (_c = (_b = status === null || status === void 0 ? void 0 : status.status_message) !== null && _b !== void 0 ? _b : data === null || data === void 0 ? void 0 : data.errors) !== null && _c !== void 0 ? _c : 'Failed to fetch accounts';
                return [4 /*yield*/, effects_1.put(configureActionCreators_1.accountListActionCreator.getAccountFailure(data))];
            case 6:
                _d.sent();
                return [4 /*yield*/, effects_1.put(configureActionCreators_1.appActionCreator.showMessage({
                        errorMsg: errorMsg,
                        severity: 'error',
                        show: true
                    }))];
            case 7:
                _d.sent();
                _d.label = 8;
            case 8: return [3 /*break*/, 12];
            case 9:
                error_1 = _d.sent();
                errorMsg = (error_1 && error_1.response && error_1.response.statusText) || 'Server Error';
                return [4 /*yield*/, effects_1.put(configureActionCreators_1.accountListActionCreator.getAccountFailure(errorMsg))];
            case 10:
                _d.sent();
                return [4 /*yield*/, effects_1.put(configureActionCreators_1.appActionCreator.showMessage({
                        errorMsg: errorMsg,
                        severity: 'error',
                        show: true
                    }))];
            case 11:
                _d.sent();
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}
exports.getAccountListSaga = getAccountListSaga;
function AccountListSagas() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(configureActions_1["default"].GET_ACCOUNT_LIST_REQUEST, getAccountListSaga)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports["default"] = AccountListSagas;
