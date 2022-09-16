"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var TableBody_1 = require("@material-ui/core/TableBody");
var TableCell_1 = require("@material-ui/core/TableCell");
var TableContainer_1 = require("@material-ui/core/TableContainer");
var TableRow_1 = require("@material-ui/core/TableRow");
var Paper_1 = require("@material-ui/core/Paper");
var style_1 = require("./style");
var TableHeader_1 = require("../../TableHeader");
var AccountListView = function (_a) {
    var _b;
    var accountListData = _a.accountListData, handleDoubleClick = _a.handleDoubleClick;
    var classes = style_1.useStyles();
    var headCells = [
        { title: 'CUSTOMER', align: 'left' },
        { title: 'REVENUE', align: 'right' },
        { title: 'GROWTH', align: 'right' },
        { title: 'PLAN', align: 'right' },
        { title: 'BUY CENTER', align: 'right' },
    ];
    return (react_1["default"].createElement("div", { className: classes.root, style: { overflow: 'auto' } },
        react_1["default"].createElement(Paper_1["default"], { className: classes.paper },
            react_1["default"].createElement(TableContainer_1["default"], { className: classes.container },
                react_1["default"].createElement(core_1.Table, { stickyHeader: true, className: classes.table, "aria-labelledby": "tableTitle", "aria-label": "enhanced table" },
                    react_1["default"].createElement(TableHeader_1.EnhancedTableHead, { rowCount: (_b = accountListData === null || accountListData === void 0 ? void 0 : accountListData.length) !== null && _b !== void 0 ? _b : 0, headCells: headCells }),
                    react_1["default"].createElement(TableBody_1["default"], null, accountListData.map(function (row, index) {
                        var _a, _b, _c, _d;
                        var labelId = "enhanced-table-" + row.account_id;
                        return (react_1["default"].createElement(TableRow_1["default"], { className: classes.tableRow, hover: true, tabIndex: -1, key: row.account_id + '-' + index },
                            react_1["default"].createElement(TableCell_1["default"], { classes: { root: classes.tableCellRoot }, component: "th", className: classes.accNameCell, id: labelId, scope: "row", onDoubleClick: function (event) {
                                    if (row.application_status === 'A') {
                                        handleDoubleClick(event, row.account_id);
                                    }
                                } },
                                react_1["default"].createElement("div", { className: classes.thumbnailIcon },
                                    react_1["default"].createElement(core_1.Avatar, { alt: row.account_name, src: row.logo_link }),
                                    react_1["default"].createElement("div", null,
                                        "\u00A0 ",
                                        row.account_name))),
                            row.application_status !== 'D' &&
                                row.application_status !== 'P' ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement(TableCell_1["default"], { align: "right", classes: { root: classes.tableCellRoot } },
                                    react_1["default"].createElement("span", null, "$ "), (_a = row === null || row === void 0 ? void 0 : row.revenue) === null || _a === void 0 ? void 0 :
                                    _a.value),
                                react_1["default"].createElement(TableCell_1["default"], { align: "right", classes: { root: classes.tableCellRoot } }, (_b = row === null || row === void 0 ? void 0 : row.growth) === null || _b === void 0 ? void 0 :
                                    _b.value,
                                    react_1["default"].createElement("span", null, "%")),
                                react_1["default"].createElement(TableCell_1["default"], { align: "right", classes: { root: classes.tableCellRoot } },
                                    react_1["default"].createElement("span", null, "$ "), (_c = row === null || row === void 0 ? void 0 : row.plan) === null || _c === void 0 ? void 0 :
                                    _c.value),
                                react_1["default"].createElement(TableCell_1["default"], { align: "right", classes: { root: classes.tableCellRoot } }, (_d = row === null || row === void 0 ? void 0 : row.buying_centers) === null || _d === void 0 ? void 0 : _d.value))) : row.application_status === 'P' ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement(TableCell_1["default"], { align: "left", colSpan: 4, classes: { root: classes.tableCellRoot } },
                                    react_1["default"].createElement(core_1.Typography, { variant: "h6" }, "Application Pending"),
                                    react_1["default"].createElement(core_1.Typography, null, "(Waiting for approval)")))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement(TableCell_1["default"], { align: "left", colSpan: 4, classes: { root: classes.tableCellRoot } },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement(core_1.Typography, { variant: "h6" }, "Application Denied")))))));
                    })))))));
};
exports["default"] = AccountListView;
