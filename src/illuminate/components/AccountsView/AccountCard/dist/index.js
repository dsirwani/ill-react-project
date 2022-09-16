"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var clsx_1 = require("clsx");
var style_1 = require("./style");
var CustomCardHeader = function (_a) {
    var account = _a.account, classes = _a.classes;
    return (react_1["default"].createElement(core_1.CardHeader, { classes: {
            root: classes.cardHeaderRoot,
            avatar: classes.cardAvatar,
            title: classes.cardTitle
        }, avatar: react_1["default"].createElement(core_1.Avatar, { "aria-label": account.account_name, alt: account.account_name, src: account.logo_link }), title: account.account_name }));
};
var AccountCard = function (_a) {
    var account = _a.account, handleDoubleClick = _a.handleDoubleClick;
    var classes = style_1.useStyles();
    return (react_1["default"].createElement(react_1["default"].Fragment, null, account.application_status === 'A' ? (react_1["default"].createElement(core_1.Card, { className: clsx_1["default"](classes.root, classes.cursorPointer), key: "card-" + account.account_id, onDoubleClick: function (event) {
            return handleDoubleClick(event, account.account_id);
        } },
        react_1["default"].createElement(CustomCardHeader, { account: account, classes: classes }),
        react_1["default"].createElement(core_1.CardContent, { classes: { root: classes.cardContent } }, (account === null || account === void 0 ? void 0 : account.cardTable) &&
            Object.keys(account.cardTable).map(function (key, idx) {
                var _a, _b;
                return (react_1["default"].createElement(react_1.Fragment, { key: idx.toString() },
                    react_1["default"].createElement("div", { className: classes.contentData, key: account.account_id + "-row-" + idx },
                        react_1["default"].createElement("div", { className: classes.colHeader }, key),
                        react_1["default"].createElement("div", { className: classes.colData },
                            account.cardTable[key].value, (_b = (_a = account.cardTable[key]) === null || _a === void 0 ? void 0 : _a['unitSymbol']) !== null && _b !== void 0 ? _b : '')),
                    idx !== Object.keys(account.cardTable).length - 1 && (react_1["default"].createElement("img", { key: "divider-" + idx, src: "/assets/Icon_assets/svg/verticalDivider.svg", alt: "vertical Divider" }))));
            })))) : account.application_status === 'P' ? (react_1["default"].createElement(core_1.Card, { className: classes.root, key: "card-" + account.account_id },
        react_1["default"].createElement(CustomCardHeader, { account: account, classes: classes }),
        react_1["default"].createElement(core_1.CardContent, { classes: { root: classes.cardContent } },
            react_1["default"].createElement("div", { className: classes.pendingAcc },
                react_1["default"].createElement(core_1.Typography, { variant: "h4" }, "Application Pending"),
                react_1["default"].createElement(core_1.Typography, { variant: "subtitle2" }, "Waiting on Approval"))))) : account.application_status === 'D' ? (react_1["default"].createElement(core_1.Card, { className: classes.root, key: "card-" + account.account_id },
        react_1["default"].createElement(CustomCardHeader, { account: account, classes: classes }),
        react_1["default"].createElement(core_1.CardContent, { classes: { root: classes.cardContent } },
            react_1["default"].createElement("div", { className: classes.pendingAcc },
                react_1["default"].createElement(core_1.Typography, { variant: "h4" }, "Application Denied"))))) : null));
};
exports["default"] = AccountCard;
