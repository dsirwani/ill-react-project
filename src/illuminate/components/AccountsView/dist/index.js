"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
var TableBody_1 = require("@material-ui/core/TableBody");
var TableCell_1 = require("@material-ui/core/TableCell");
var TableContainer_1 = require("@material-ui/core/TableContainer");
var TableRow_1 = require("@material-ui/core/TableRow");
var Paper_1 = require("@material-ui/core/Paper");
var style_1 = require("./style");
var TableHeader_1 = require("../../components/TableHeader");
var Loader_1 = require("../../components/Loader");
//import { useI18n } from '../../hooks/useI18n';
var configureActionCreators_1 = require("../../utils/configureActionCreators");
var AccountListView = function () {
    var _a;
    var classes = style_1.useStyles();
    var scrollDivRef = react_1.useRef(null);
    var _b = react_1.useState([]), selected = _b[0], setSelected = _b[1];
    var _c = react_1.useState(0), pageNo = _c[0], setPageNo = _c[1];
    var dispatch = react_redux_1.useDispatch();
    var isLoadingData = react_redux_1.useSelector(function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.accountList) === null || _a === void 0 ? void 0 : _a.isLoading; });
    var accountListData = react_redux_1.useSelector(function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.accountList) === null || _a === void 0 ? void 0 : _a.accountList; });
    var nextPageUrl = react_redux_1.useSelector(function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.accountList) === null || _a === void 0 ? void 0 : _a.nextPageUrl; });
    react_1.useEffect(function () {
        if (pageNo && nextPageUrl) {
            dispatch(configureActionCreators_1.accountListActionCreator.getAccountList(nextPageUrl));
        }
    }, [pageNo]);
    var scrollObserver = react_1.useCallback(function (node) {
        new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.intersectionRatio > 0 && !isLoadingData) {
                    setPageNo(function (prevState) { return prevState + 1; });
                }
            });
        }).observe(node);
    }, [dispatch]);
    react_1.useEffect(function () {
        if (scrollDivRef.current) {
            scrollObserver(scrollDivRef.current);
        }
    }, [scrollObserver, scrollDivRef]);
    react_1.useEffect(function () {
        dispatch(configureActionCreators_1.accountListActionCreator.getAccountList());
    }, []);
    var headCells = ['', 'REVENUE', 'GROWTH', 'PLANS', 'BUYING CENTERS'];
    var handleClick = function (event, name) {
        var selectedIndex = selected.indexOf(name);
        var newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        }
        else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        }
        else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        }
        else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };
    return (react_1["default"].createElement("div", { className: classes.root, style: { overflow: 'auto' } },
        react_1["default"].createElement(Paper_1["default"], { className: classes.paper },
            react_1["default"].createElement("div", { className: classes.titleBorder },
                react_1["default"].createElement(core_1.Typography, { variant: "h6", className: classes.headerBottomBorder }, "Dashboard")),
            (accountListData === null || accountListData === void 0 ? void 0 : accountListData.length) ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(TableContainer_1["default"], { className: classes.container },
                    react_1["default"].createElement(core_1.Table, { stickyHeader: true, className: classes.table, "aria-labelledby": "tableTitle", "aria-label": "enhanced table" },
                        react_1["default"].createElement(TableHeader_1.EnhancedTableHead, { numSelected: selected.length, rowCount: (_a = accountListData === null || accountListData === void 0 ? void 0 : accountListData.length) !== null && _a !== void 0 ? _a : 0, headCells: headCells }),
                        react_1["default"].createElement(TableBody_1["default"], null, accountListData.map(function (row, index) {
                            var _a, _b, _c, _d;
                            var labelId = "enhanced-table-" + row.account_id;
                            return (react_1["default"].createElement(TableRow_1["default"], { hover: true, onClick: function (event) {
                                    return handleClick(event, row.account_name);
                                }, tabIndex: -1, key: row.account_id + '-' + index },
                                react_1["default"].createElement(TableCell_1["default"], { component: "th", id: labelId, scope: "row" },
                                    react_1["default"].createElement("div", { className: classes.thumbnailIcon },
                                        react_1["default"].createElement(core_1.Avatar, { alt: row.account_name, src: row.logo_link }),
                                        react_1["default"].createElement("div", null,
                                            "\u00A0 ",
                                            row.account_name))),
                                row.application_status !== 'D' &&
                                    row.application_status !== 'P' ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                                    react_1["default"].createElement(TableCell_1["default"], { align: "right" }, (_a = row === null || row === void 0 ? void 0 : row.revenue) === null || _a === void 0 ? void 0 : _a.value),
                                    react_1["default"].createElement(TableCell_1["default"], { align: "right" }, (_b = row === null || row === void 0 ? void 0 : row.growth) === null || _b === void 0 ? void 0 : _b.value),
                                    react_1["default"].createElement(TableCell_1["default"], { align: "right" }, (_c = row === null || row === void 0 ? void 0 : row.plan) === null || _c === void 0 ? void 0 : _c.value),
                                    react_1["default"].createElement(TableCell_1["default"], { align: "right" }, (_d = row === null || row === void 0 ? void 0 : row.buying_centers) === null || _d === void 0 ? void 0 : _d.value))) : row.application_status === 'P' ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                                    react_1["default"].createElement(TableCell_1["default"], { align: "left", colSpan: 4 },
                                        react_1["default"].createElement(core_1.Typography, { variant: "h6" }, "Application Pending"),
                                        react_1["default"].createElement(core_1.Typography, null, "(Waiting for approval)")))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                                    react_1["default"].createElement(TableCell_1["default"], { align: "left", colSpan: 4 },
                                        react_1["default"].createElement("div", null,
                                            react_1["default"].createElement(core_1.Typography, { variant: "h6" }, "Application Denied")))))));
                        })))))) : (accountListData === null || accountListData === void 0 ? void 0 : accountListData.length) === 0 ? (react_1["default"].createElement(core_1.Typography, { variant: "h6" }, "No Accounts to Display")) : null,
            react_1["default"].createElement("div", { id: "scrollDetectDiv", ref: scrollDivRef, style: { border: '1px solid #0096DC' } }),
            isLoadingData && react_1["default"].createElement(Loader_1["default"], null))));
};
exports["default"] = AccountListView;
