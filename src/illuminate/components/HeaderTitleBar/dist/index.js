"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("@material-ui/core");
var ArrowBackRounded_1 = require("@material-ui/icons/ArrowBackRounded");
var style_1 = require("./style");
var HeaderTitleBar = function (props) {
    var classes = style_1.useStyles();
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement("div", { className: classes.headerTitleBar },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/", title: "Back to Dashboard" },
                react_1["default"].createElement(ArrowBackRounded_1["default"], { color: "primary", className: classes.nav, fontSize: "large" })),
            react_1["default"].createElement(core_1.Typography, { variant: "h4", className: classes.titleContent }, props.headerTitle))));
};
exports["default"] = HeaderTitleBar;
