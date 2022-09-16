"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var routeConstants_1 = require("../../utils/routeConstants");
var Dashboard_1 = require("../Dashboard");
var WithAuthentication_1 = require("../WithAuthentication");
var Logout_1 = require("../../components/Logout");
var index_1 = require("../../components/Callback/index");
var App = function () { return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "main-app" },
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: routeConstants_1.ROUTES.LOGOUT, render: function () { return react_1["default"].createElement(Logout_1["default"], null); } }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: routeConstants_1.ROUTES.CALLBACK, render: function () { return react_1["default"].createElement(index_1["default"], null); } }),
                react_1["default"].createElement(WithAuthentication_1["default"], { component: Dashboard_1["default"], path: "/" })))))); };
exports["default"] = App;
