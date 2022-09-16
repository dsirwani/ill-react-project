"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var style_1 = require("./style");
var AccountInfoDropDown = function (props) {
    var classes = style_1.useStyles();
    var handleChange = function (event) {
        props.setAccountInfo(event.target.value);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(core_1.FormControl, { className: classes.formControl },
            react_1["default"].createElement(core_1.Select, { labelId: "account-info-label", id: "account-info-select", value: props.accInfo, onChange: handleChange, classes: { icon: classes.ddArowCls }, className: classes.selectHover },
                react_1["default"].createElement(core_1.MenuItem, { value: 'kpi' }, "KPI"),
                react_1["default"].createElement(core_1.MenuItem, { value: 'graph' }, "Graphs"),
                react_1["default"].createElement(core_1.MenuItem, { value: 'account_team' }, "Account Team"),
                react_1["default"].createElement(core_1.MenuItem, { value: 'account_details' }, "Account Details"),
                react_1["default"].createElement(core_1.MenuItem, { value: 'account_management', disabled: true }, "User Profile"),
                react_1["default"].createElement(core_1.MenuItem, { value: 'client_details' }, "Client Details")))));
};
exports["default"] = AccountInfoDropDown;
