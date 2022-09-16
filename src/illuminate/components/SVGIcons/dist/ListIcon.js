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
var ListIcon = function (props) {
    return (react_1["default"].createElement(SvgIcon_1["default"], __assign({ viewBox: "0 0 24 24" }, props),
        react_1["default"].createElement("defs", null,
            react_1["default"].createElement("path", { id: "prefix__a", d: "M2 6.5C1.17 6.5.5 7.17.5 8S1.17 9.5 2 9.5 3.5 8.83 3.5 8 2.83 6.5 2 6.5zm0-6C1.17.5.5 1.17.5 2S1.17 3.5 2 3.5 3.5 2.83 3.5 2 2.83.5 2 .5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM5 15h14v-2H5v2zm0-6h14V7H5v2zm0-8v2h14V1H5z" }),
            react_1["default"].createElement("path", { id: "prefix__c", d: "M0 0H24V24H0z" })),
        react_1["default"].createElement("g", { fill: "none", fillRule: "evenodd", transform: "translate(2 4)" },
            react_1["default"].createElement("mask", { id: "prefix__b", fill: "#fff" },
                react_1["default"].createElement("use", { xlinkHref: "#prefix__a" })),
            react_1["default"].createElement("g", { mask: "url(#prefix__b)" },
                react_1["default"].createElement("g", { transform: "translate(-2 -4)" },
                    react_1["default"].createElement("use", { fill: "#1C1C22", xlinkHref: "#prefix__c" }),
                    react_1["default"].createElement("use", { fill: "#FFF", fillOpacity: ".2", xlinkHref: "#prefix__c" }))))));
};
exports["default"] = ListIcon;
