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
var react_1 = require("react");
var SvgIcon_1 = require("@material-ui/core/SvgIcon");
var GridIcon = function (props) {
    return (react_1["default"].createElement(SvgIcon_1["default"], __assign({ viewBox: "0 0 24 24" }, props),
        react_1["default"].createElement("defs", null,
            react_1["default"].createElement("path", { id: "prefix__1", d: "M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 18H2v-4h4v4zm0-6H2V8h4v4zm0-6H2V2h4v4zm6 12H8v-4h4v4zm0-6H8V8h4v4zm0-6H8V2h4v4zm6 12h-4v-4h4v4zm0-6h-4V8h4v4zm0-6h-4V2h4v4z" })),
        react_1["default"].createElement("g", { fill: "none", fillRule: "evenodd", transform: "translate(2 2)" },
            react_1["default"].createElement("mask", { id: "prefix__2", fill: "#fff" },
                react_1["default"].createElement("use", { xlinkHref: "#prefix__1" })),
            react_1["default"].createElement("g", { fill: "#4a4a4f", mask: "url(#prefix__2)" },
                react_1["default"].createElement("path", { d: "M0 0H24V24H0z", transform: "translate(-2 -2)" })))));
};
exports["default"] = GridIcon;
