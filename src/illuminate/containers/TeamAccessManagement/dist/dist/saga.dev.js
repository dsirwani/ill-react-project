"use strict";

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;
exports.getMoreClientUsersListSaga = exports.clientUsersListSaga = void 0;

var effects_1 = require("redux-saga/effects");

var configureActions_1 = require("../../utils/configureActions");

var configureActionCreators_1 = require("../../utils/configureActionCreators");

var apiDataConfig_1 = require("../../config/apiDataConfig");

var httpService_1 = require("../../services/httpService");

var httpService = new httpService_1["default"]();

function clientUsersListSaga(action) {
  var clientId, REQUEST_URL, result, data, status, error_1;

  var _a, _b;

  return __generator(this, function (_c) {
    switch (_c.label) {
      case 0:
        clientId = action.payload.clientId;
        _c.label = 1;

      case 1:
        _c.trys.push([1, 10,, 12]);

        REQUEST_URL = apiDataConfig_1.configAPI.getClientUsersList(clientId).REQUEST_URL;
        return [4
        /*yield*/
        , effects_1.call(httpService.get, REQUEST_URL)];

      case 2:
        result = _c.sent();
        data = result.data, status = result.status;
        if (!(status === 200)) return [3
        /*break*/
        , 7];
        if (!(((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length) === 0)) return [3
        /*break*/
        , 4];
        return [4
        /*yield*/
        , effects_1.put(configureActionCreators_1.clientUsersActionCreator.clientUsersError('No Data Available'))];

      case 3:
        _c.sent();

        return [3
        /*break*/
        , 6];

      case 4:
        return [4
        /*yield*/
        , effects_1.put(configureActionCreators_1.clientUsersActionCreator.clientUsersSuccess(data.data))];

      case 5:
        _c.sent();

        _c.label = 6;

      case 6:
        return [3
        /*break*/
        , 9];

      case 7:
        return [4
        /*yield*/
        , effects_1.put(configureActionCreators_1.clientUsersActionCreator.clientUsersError(data.message))];

      case 8:
        _c.sent();

        _c.label = 9;

      case 9:
        return [3
        /*break*/
        , 12];

      case 10:
        error_1 = _c.sent();
        return [4
        /*yield*/
        , effects_1.put(configureActionCreators_1.clientUsersActionCreator.clientUsersError(error_1.response && error_1.response.data ? error_1.response.data.message : 'API error'))];

      case 11:
        _c.sent();

        return [3
        /*break*/
        , 12];

      case 12:
        return [2
        /*return*/
        ];
    }
  });
}

exports.clientUsersListSaga = clientUsersListSaga;

function getMoreClientUsersListSaga(action) {
  var nextPageUrl, REQUEST_URL, result, data, status, error_2;

  var _a;

  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        nextPageUrl = action.payload.nextPageUrl;
        _b.label = 1;

      case 1:
        _b.trys.push([1, 10,, 12]);

        REQUEST_URL = apiDataConfig_1.configAPI.getMoreClientUsersList(nextPageUrl).REQUEST_URL;
        return [4
        /*yield*/
        , effects_1.call(httpService.get, REQUEST_URL)];

      case 2:
        result = _b.sent();
        data = result.data, status = result.status;
        if (!(status === 200)) return [3
        /*break*/
        , 7];
        if (!(((_a = data === null || data === void 0 ? void 0 : data.items) === null || _a === void 0 ? void 0 : _a.length) === 0)) return [3
        /*break*/
        , 4];
        return [4
        /*yield*/
        , effects_1.put(configureActionCreators_1.clientUsersActionCreator.getMoreClientUsersError('No Data Available'))];

      case 3:
        _b.sent();

        return [3
        /*break*/
        , 6];

      case 4:
        return [4
        /*yield*/
        , effects_1.put(configureActionCreators_1.clientUsersActionCreator.getMoreClientUsersSuccess(data.data))];

      case 5:
        _b.sent();

        _b.label = 6;

      case 6:
        return [3
        /*break*/
        , 9];

      case 7:
        return [4
        /*yield*/
        , effects_1.put(configureActionCreators_1.clientUsersActionCreator.getMoreClientUsersError(data.message))];

      case 8:
        _b.sent();

        _b.label = 9;

      case 9:
        return [3
        /*break*/
        , 12];

      case 10:
        error_2 = _b.sent();
        return [4
        /*yield*/
        , effects_1.put(configureActionCreators_1.clientUsersActionCreator.getMoreClientUsersError(error_2.response && error_2.response.data ? error_2.response.data.message : 'API error'))];

      case 11:
        _b.sent();

        return [3
        /*break*/
        , 12];

      case 12:
        return [2
        /*return*/
        ];
    }
  });
}

exports.getMoreClientUsersListSaga = getMoreClientUsersListSaga;

function TeamManagementSaga() {
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        return [4
        /*yield*/
        , effects_1.takeLatest(configureActions_1["default"].CLIENT_USERS_REQUEST, clientUsersListSaga)];

      case 1:
        _a.sent();

        return [4
        /*yield*/
        , effects_1.takeLatest(configureActions_1["default"].GET_MORE_CLIENT_USERS_REQUEST, getMoreClientUsersListSaga)];

      case 2:
        _a.sent();

        return [2
        /*return*/
        ];
    }
  });
}

exports["default"] = TeamManagementSaga;