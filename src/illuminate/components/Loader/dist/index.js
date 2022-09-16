"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var style_1 = require("./style");
var useI18n_1 = require("../../hooks/useI18n");
var Loader = function () {
    var classes = style_1.useStyles();
    var i18n = useI18n_1.useI18n();
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(core_1.CircularProgress, { classes: { root: classes.loaderRoot }, disableShrink: true, size: 44 }),
        react_1["default"].createElement(core_1.Typography, null, i18n._('LOADING...'))));
};
exports["default"] = Loader;
