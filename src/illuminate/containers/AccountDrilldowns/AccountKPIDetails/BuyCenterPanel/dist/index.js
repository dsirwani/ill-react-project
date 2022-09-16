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
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var clsx_1 = require("clsx");
var index_1 = require("../../../../components/LoaderOverScreen/index");
var SubCategory_1 = require("../SubCategory");
var NotificationAlert_1 = require("../../../../components/NotificationAlert");
var useI18n_1 = require("../../../../hooks/useI18n");
var configureActionCreators_1 = require("../../../../utils/configureActionCreators");
var style_1 = require("./style");
var BuyCenterPanel = function (_a) {
    var prodCategories = _a.prodCategories, prodSummary = _a.prodSummary, tabName = _a.tabName;
    var classes = style_1.useStyles({ noOfColumns: prodSummary === null || prodSummary === void 0 ? void 0 : prodSummary.length });
    var _b = react_1["default"].useState({}), switchCollapseFlag = _b[0], setSwitchCollapseFlag = _b[1];
    var i18n = useI18n_1.useI18n();
    var dispatch = react_redux_1.useDispatch();
    var accountId = react_router_dom_1.useParams().accountId;
    var loading = react_redux_1.useSelector(function (state) { var _a; return (_a = state.prodCategoryData) === null || _a === void 0 ? void 0 : _a.prodData; }).loading;
    var showErrorAlertProps = react_redux_1.useSelector(function (state) { return state === null || state === void 0 ? void 0 : state.app; });
    var handleToggle = function (level, productId, parentGrp, callAPI) {
        if (parentGrp === void 0) { parentGrp = null; }
        if (callAPI) {
            dispatch(configureActionCreators_1.prodCategoryActionCreator.prodSubCategoryRequest({
                productId: productId,
                account_id: accountId,
                tabName: tabName,
                level: level,
                parentGrp: parentGrp
            }));
        }
        else {
            dispatch(configureActionCreators_1.prodCategoryActionCreator.prodCategoryRemove({
                productId: productId,
                parentGrp: parentGrp
            }));
        }
    };
    var hideAlertError = function () {
        dispatch &&
            dispatch(configureActionCreators_1.appActionCreator.hideMessage({
                show: false,
                errorMsg: '',
                severity: ''
            }));
    };
    return (react_1["default"].createElement("div", { className: classes.root },
        showErrorAlertProps.show ? (react_1["default"].createElement(NotificationAlert_1["default"], __assign({}, showErrorAlertProps, { anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000, onClose: hideAlertError }))) : null,
        loading ? react_1["default"].createElement(index_1["default"], null) : null,
        (prodCategories === null || prodCategories === void 0 ? void 0 : prodCategories.length) && (prodSummary === null || prodSummary === void 0 ? void 0 : prodSummary.length) && (react_1["default"].createElement(core_1.TableContainer, { component: core_1.Paper, className: classes.tableContainer },
            react_1["default"].createElement(core_1.Table, { size: "small", "aria-label": "a dense table" },
                react_1["default"].createElement(core_1.TableHead, null,
                    react_1["default"].createElement(core_1.TableRow, null,
                        react_1["default"].createElement(core_1.TableCell, { className: classes.spaceCell }),
                        react_1["default"].createElement(core_1.TableCell, { classes: {
                                root: clsx_1["default"](classes.tableHeaderCellRoot, classes.prodName)
                            } },
                            i18n._('PRODUCT CATEGORIES'),
                            "/",
                            i18n._('BUYING CENTERS')),
                        prodSummary.map(function (row, index) { return (react_1["default"].createElement(core_1.TableCell, { key: index, align: "right", classes: {
                                root: clsx_1["default"](classes.tableHeaderCellRoot, classes.catValue)
                            } },
                            react_1["default"].createElement("div", { className: classes.kpiType }, row.column &&
                                row.column[0].toUpperCase() + row.column.slice(1)))); })),
                    react_1["default"].createElement(core_1.TableRow, { className: classes.tableRow },
                        react_1["default"].createElement(core_1.TableCell, { className: classes.spaceCell }),
                        react_1["default"].createElement(core_1.TableCell, { classes: {
                                root: clsx_1["default"](classes.tableTitleCellRoot, classes.prodName)
                            } }, i18n._('Buy Center')),
                        prodSummary.map(function (row, index) { return (react_1["default"].createElement(core_1.TableCell, { key: index, align: "right", classes: {
                                root: clsx_1["default"](classes.tableTitleCellRoot, classes.catValue)
                            } }, row.variable_type === 'financial value'
                            ? '$ ' + row.value
                            : row.value + '%')); }))),
                react_1["default"].createElement(core_1.TableBody, null,
                    react_1["default"].createElement(SubCategory_1["default"], { prodSummaryColumns: prodSummary.length, key: "level-" + 0 + "-i", toggleEntity: true, productId: 0, tabName: tabName, level: 0, subProdCategories: prodCategories, handleToggle: handleToggle, loading: loading, switchCollapseFlag: switchCollapseFlag, setSwitchCollapseFlag: setSwitchCollapseFlag })))))));
};
exports["default"] = BuyCenterPanel;
