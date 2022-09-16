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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var cognitoUtils_1 = require("../../utils/cognitoUtils");
var app_config_json_1 = require("../../config/app-config.json");
var WithAuthentication = function (_a) {
    var ComponentToBeRendered = _a.component, path = _a.path, rest = __rest(_a, ["component", "path"]);
    var location = react_router_dom_1.useLocation();
    var isLoggedIn = react_redux_1.useSelector(function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.auth) === null || _a === void 0 ? void 0 : _a.isLoggedIn; });
    return (react_1["default"].createElement(react_router_dom_1.Route, __assign({}, rest, { path: path, render: function (props) {
            return !location.hash &&
                !location.search &&
                isLoggedIn &&
                localStorage.getItem("CognitoIdentityServiceProvider." + app_config_json_1["default"].AWS_COGNITO_CONFIG.CLIENT_ID + ".LastAuthUser") ? (react_1["default"].createElement(ComponentToBeRendered, __assign({}, props))) : ((window.location.href = cognitoUtils_1["default"].getCognitoSignInUri())
            /* <Redirect
              to={{
                pathname: ROUTES.LOGIN,
              }}
            /> */
            );
        } })));
};
exports["default"] = WithAuthentication;
