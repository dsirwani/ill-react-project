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
var core_1 = require("@material-ui/core");
var clsx_1 = require("clsx");
var KeyboardArrowDown_1 = require("@material-ui/icons/KeyboardArrowDown");
var KeyboardArrowUp_1 = require("@material-ui/icons/KeyboardArrowUp");
var Error_1 = require("../../../../components/Error");
var style_1 = require("./style");
var SubCategory = function (_a) {
    var prodSummaryColumns = _a.prodSummaryColumns, toggleEntity = _a.toggleEntity, productId = _a.productId, tabName = _a.tabName, level = _a.level, subProdCategories = _a.subProdCategories, handleToggle = _a.handleToggle, loading = _a.loading, switchCollapseFlag = _a.switchCollapseFlag, setSwitchCollapseFlag = _a.setSwitchCollapseFlag;
    var classes = style_1.useStyles({ noOfColumns: prodSummaryColumns });
    var handleSubCatSelection = function (level, subCatId, parentGrp, callAPI) {
        handleToggle(level, subCatId, parentGrp, callAPI);
    };
    var handleSubCategoryToggle = function (level, productId, parentGrp, collapse) {
        var _a, _b;
        var callAPI = false;
        if (!collapse) {
            setSwitchCollapseFlag(__assign(__assign({}, switchCollapseFlag), (_a = {}, _a[parentGrp] = false, _a)));
            callAPI = false;
        }
        else {
            setSwitchCollapseFlag(__assign(__assign({}, switchCollapseFlag), (_b = {}, _b[parentGrp] = true, _b)));
            callAPI = true;
        }
        handleToggle(level, productId, parentGrp, callAPI);
    };
    var getPadding = function () {
        if (level === 0) {
            return { padding: 0 };
        }
        else {
            return {
                paddingBottom: 0,
                paddingTop: 0,
                paddingRight: 0
            };
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(core_1.TableRow, null,
            react_1["default"].createElement(core_1.TableCell, { style: getPadding(), colSpan: prodSummaryColumns + 2 }, subProdCategories && (react_1["default"].createElement(core_1.Collapse, { "in": toggleEntity, timeout: "auto", unmountOnExit: true },
                react_1["default"].createElement(core_1.Table, { size: "small" },
                    react_1["default"].createElement(core_1.TableBody, null, subProdCategories.length === 0 ? (react_1["default"].createElement(react_1["default"].Fragment, { key: level + "-" + productId + "-error" },
                        react_1["default"].createElement(core_1.TableRow, { className: classes.subTableRow, key: "no-data-" + productId },
                            react_1["default"].createElement(Error_1["default"], { errorMessage: "No Data Available" })))) : (subProdCategories.map(function (row, idx) {
                        return (react_1["default"].createElement(react_1["default"].Fragment, { key: level + "-" + idx },
                            react_1["default"].createElement(core_1.TableRow, { className: level === 0
                                    ? classes.tableRow
                                    : classes.subTableRow, key: row.product_id },
                                react_1["default"].createElement(core_1.TableCell, { className: classes.spaceCell }, row.sub_category ? (react_1["default"].createElement(core_1.IconButton, { className: classes.toggleIcon, onClick: function () {
                                        return handleSubCategoryToggle(level + 1, row.product_id, row.parentGrp, row.collapse);
                                    }, "aria-label": "expand row", size: "small" }, !row.collapse ? (react_1["default"].createElement(KeyboardArrowUp_1["default"], null)) : (react_1["default"].createElement(KeyboardArrowDown_1["default"], null)))) : ('')),
                                react_1["default"].createElement(core_1.TableCell, { scope: "row", className: level === 0
                                        ? clsx_1["default"](classes.tableDataCell, classes.prodName)
                                        : clsx_1["default"](classes.subCatCell, classes.prodName) }, row.product),
                                row.kpi.map(function (r, idx) { return (react_1["default"].createElement(core_1.TableCell, { key: idx, scope: "row", className: level === 0
                                        ? clsx_1["default"](classes.tableDataCell, classes.catValue)
                                        : clsx_1["default"](classes.subCatCell, classes.catValue), classes: { sizeSmall: classes.cellSizeSmall }, align: "right" }, r.variable_type === 'financial value'
                                    ? '$ ' + r.value
                                    : r.value + ' %')); })),
                            row.sub_category &&
                                switchCollapseFlag[row.parentGrp] && (react_1["default"].createElement(SubCategory, { key: "level-" + level + "-" + idx, prodSummaryColumns: prodSummaryColumns, toggleEntity: switchCollapseFlag[row.parentGrp], productId: row.product_id, tabName: tabName, level: level + 1, subProdCategories: row.subCategories, handleToggle: function (level, subCatId, parentGrp, callAPI) {
                                    handleSubCatSelection(level, subCatId, parentGrp, callAPI);
                                }, loading: loading, switchCollapseFlag: switchCollapseFlag, setSwitchCollapseFlag: setSwitchCollapseFlag }))));
                    }))))))))));
};
exports["default"] = SubCategory;
