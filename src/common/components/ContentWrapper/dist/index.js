"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var routeConstants_1 = require("../../utils/routeConstants");
var MessageBar_1 = require("../MessageBar");
var AccountsView = react_1.lazy(function () { return Promise.resolve().then(function () { return require('../../containers/AccountsView'); }); });
var Upload = react_1.lazy(function () { return Promise.resolve().then(function () { return require('../../containers/Upload'); }); });
var AccountDrilldowns = react_1.lazy(function () {
    return Promise.resolve().then(function () { return require('../../containers/AccountDrilldowns'); });
});
var TeamAccessManagement = react_1.lazy(function () {
    return Promise.resolve().then(function () { return require('../../containers/TeamAccessManagement'); });
});
var ContentWrapper = function () {
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement("div", { className: "" },
            react_1["default"].createElement(MessageBar_1["default"], null),
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_1.Suspense, { fallback: 'Loading...' },
                    react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: routeConstants_1.ROUTES.ACCOUNT_DRILLDOWN, component: AccountDrilldowns }),
                    react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: routeConstants_1.ROUTES.UPLOAD, component: Upload }),
                    react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: routeConstants_1.ROUTES.TEAM_MANAGEMENT, component: TeamAccessManagement }),
                    react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: routeConstants_1.ROUTES.DEFAULT, component: AccountsView }))))));
};
exports["default"] = react_router_dom_1.withRouter(ContentWrapper);
