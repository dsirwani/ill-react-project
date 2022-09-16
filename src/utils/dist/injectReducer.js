"use strict";
exports.__esModule = true;
exports.rootReducer = void 0;
var redux_1 = require("redux");
var reducer_1 = require("../containers/Dashboard/reducer");
var reducer_2 = require("../containers/App/reducer");
var reducer_3 = require("../containers/WithAuthentication/reducer");
var reducer_4 = require("../containers/PlatformView/reducer");
var reducer_5 = require("../containers/Upload/reducer");
var reducer_6 = require("../containers/AccountDrilldowns/reducer");
var reducer_7 = require("../containers/AccountDrilldowns/AccountKPIDetails/reducer");
var reducer_8 = require("../containers/AccountsView/reducer");
var reducer_9 = require("../containers/AccountDrilldowns/VisualizationPanel/reducer");
var reducer_10 = require("../containers/AccountDrilldowns/AccountTeam/reducer");
var reducer_11 = require("../containers/AccountDrilldowns/AccountDetails/reducer");
var reducer_12 = require("../containers/AccountDrilldowns/UserManagement/reducer");
var reducer_13 = require("../containers/AccountDrilldowns/ClientDetails/reducer");
var reducer_14 = require("../containers/TeamAccessManagement/reducer");
exports.rootReducer = redux_1.combineReducers({
    dashboard: reducer_1.dashboardReducer,
    app: reducer_2.appReducer,
    auth: reducer_3.authReducer,
    accountList: reducer_8.accountListReducer,
    uploadData: reducer_5.uploadReducer,
    accSummaryData: reducer_6.accSummaryReducer,
    prodCategoryData: reducer_7.prodCategoryReducer,
    visualizationData: reducer_9.visualizationReducer,
    accountTeamData: reducer_10.accountTeamReducer,
    clientData: reducer_4.clientDataReducer,
    accountDetailsData: reducer_11.accountDetailsReducer,
    userProfileData: reducer_12.userProfileReducer,
    editUserProfileData: reducer_12.editUserProfileReducer,
    clientDetailsData: reducer_13.clientDetailsReducer,
    clientUsersList: reducer_14.teamManagementReducer
});
