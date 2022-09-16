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
exports.__esModule = true;
var action_1 = require("../containers/Dashboard/action");
var action_2 = require("../containers/App/action");
var action_3 = require("../containers/WithAuthentication/action");
var action_4 = require("../containers/PlatformView/action");
var action_5 = require("../containers/Upload/action");
var action_6 = require("../containers/AccountDrilldowns/action");
var action_7 = require("../containers/AccountDrilldowns/AccountKPIDetails/action");
var action_8 = require("../containers/AccountsView/action");
var action_9 = require("../containers/AccountDrilldowns/VisualizationPanel/action");
var action_10 = require("../containers/AccountDrilldowns/AccountTeam/action");
var action_11 = require("../containers/AccountDrilldowns/AccountDetails/action");
var action_12 = require("../containers/AccountDrilldowns/UserManagement/action");
var action_13 = require("../containers/AccountDrilldowns/ClientDetails/action");
var action_14 = require("../containers/TeamAccessManagement/action");
exports["default"] = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, action_1.DASHBOARD_ACTIONS), action_2.APP_ACTIONS), action_3.AUTH_ACTIONS), action_4.CLIENT_DATA_ACTIONS), action_5.UPLOAD_ACTIONS), action_8.ACCOUNT_LIST_ACTIONS), action_6.ACCOUNT_SUMMARY_ACTIONS), action_7.PRODUCT_CATEGORY_ACTIONS), action_9.REVENUE_PLAN_ACTIONS), action_9.PGI_GRAPH_ACTIONS), action_9.PROD_CAT_FILTER_ACTIONS), action_10.ACCOUNT_TEAM_ACTIONS), action_11.ACCOUNT_DETAILS_ACTIONS), action_11.ACCOUNT_USERS_ACTIONS), action_12.USER_PROFILE_ACTIONS), action_13.CLIENT_DETAILS_ACTIONS), action_14.CLIENT_USERS_ACTIONS);
