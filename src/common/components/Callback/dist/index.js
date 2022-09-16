"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var configureActionCreators_1 = require("../../utils/configureActionCreators");
var Callback = function () {
    var location = react_router_dom_1.useLocation();
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (location.hash || location.search) {
            dispatch(configureActionCreators_1.authActionCreator.initSession(window.location.href));
        }
    }, []);
    var auth = react_redux_1.useSelector(function (state) { return state.auth; });
    return (react_1["default"].createElement(react_1["default"].Fragment, null, (!location.hash && !location.search) || auth.isLoggedIn ? (react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/" })) : null));
};
exports["default"] = Callback;
