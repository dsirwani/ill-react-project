"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

exports.__esModule = true;
exports.teamManagementReducer = void 0;

var configureActions_1 = require("../../utils/configureActions");

var initialClientUsersState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
  nextPageUrl: null
};

exports.teamManagementReducer = function (state, action) {
  var _a, _b, _c, _d, _e, _f, _g;

  if (state === void 0) {
    state = {
      clientUsersData: initialClientUsersState
    };
  }

  switch (action.type) {
    case configureActions_1["default"].CLIENT_USERS_REQUEST:
      return __assign(__assign(__assign({}, state), initialClientUsersState), {
        loading: true,
        error: false,
        errorMessage: ''
      });

    case configureActions_1["default"].CLIENT_USERS_SUCCESS:
      return __assign(__assign(__assign({}, state), state.clientUsersData), {
        loading: false,
        error: false,
        errorMessage: '',
        data: (_b = __spreadArrays((_a = action === null || action === void 0 ? void 0 : action.payload) === null || _a === void 0 ? void 0 : _a.items)) !== null && _b !== void 0 ? _b : [],
        nextPageUrl: (_c = action === null || action === void 0 ? void 0 : action.payload) === null || _c === void 0 ? void 0 : _c.next
      });

    case configureActions_1["default"].CLIENT_USERS_ERROR:
      return __assign(__assign(__assign({}, state), state.clientUsersData), {
        loading: false,
        error: true,
        errorMessage: action === null || action === void 0 ? void 0 : action.payload,
        data: null
      });

    case configureActions_1["default"].CLIENT_USERS_RESET:
      return __assign(__assign(__assign({}, state), state.clientUsersData), {
        loading: false,
        error: false,
        errorMessage: '',
        data: null
      });

    case configureActions_1["default"].GET_MORE_CLIENT_USERS_REQUEST:
      return __assign(__assign(__assign({}, state), state.clientUsersData), {
        loading: true,
        error: false,
        errorMessage: '',
        nextPageUrl: (_d = action === null || action === void 0 ? void 0 : action.payload) === null || _d === void 0 ? void 0 : _d.nextPageUrl
      });

    case configureActions_1["default"].GET_MORE_CLIENT_USERS_SUCCESS:
      var moreClientUsers = (_f = (_e = action === null || action === void 0 ? void 0 : action.payload) === null || _e === void 0 ? void 0 : _e.items) !== null && _f !== void 0 ? _f : [];
      return __assign(__assign(__assign({}, state), state.clientUsersData), {
        loading: false,
        error: false,
        errorMessage: '',
        data: __spreadArrays(state.clientUsersData.data, moreClientUsers),
        nextPageUrl: (_g = action === null || action === void 0 ? void 0 : action.payload) === null || _g === void 0 ? void 0 : _g.next
      });

    case configureActions_1["default"].GET_MORE_CLIENT_USERS_ERROR:
      return __assign(__assign(__assign({}, state), state.clientUsersData), {
        loading: false,
        error: true,
        errorMessage: action === null || action === void 0 ? void 0 : action.payload
      });

    default:
      return __assign({}, state);
  }
};