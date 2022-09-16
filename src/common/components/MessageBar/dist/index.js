"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var ExpandMore_1 = require("@material-ui/icons/ExpandMore");
var localStorageUtils_1 = require("../../utils/localStorageUtils");
var useI18n_1 = require("../../hooks/useI18n");
var style_1 = require("./style");
var MessageBar = function () {
    var classes = style_1.useStyles();
    var userName = localStorageUtils_1.getUserName();
    var i18n = useI18n_1.useI18n();
    return (react_1["default"].createElement("div", { className: classes.messageBar },
        react_1["default"].createElement(core_1.Accordion, null,
            react_1["default"].createElement(core_1.AccordionSummary, { expandIcon: react_1["default"].createElement(ExpandMore_1["default"], { className: classes.expandIcon }), "aria-controls": "panel1a-content", id: "panel1a-header" },
                react_1["default"].createElement(core_1.Typography, { variant: "h3", className: classes.greetContent },
                    i18n._('Hello'),
                    " ",
                    userName)),
            react_1["default"].createElement(core_1.AccordionDetails, null,
                react_1["default"].createElement(core_1.Typography, null,
                    i18n._('Important Updates'),
                    "...")))));
};
exports["default"] = MessageBar;
