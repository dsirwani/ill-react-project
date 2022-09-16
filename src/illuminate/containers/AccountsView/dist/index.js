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
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var SvgIcon_1 = require("@material-ui/core/SvgIcon");
var core_1 = require("@material-ui/core");
var useInfiniteScroll_1 = require("../../hooks/useInfiniteScroll");
var configureActionCreators_1 = require("../../utils/configureActionCreators");
//import MessageBar from '../../components/MessageBar';
var ListView_1 = require("../../components/AccountsView/ListView");
var GridView_1 = require("../../components/AccountsView/GridView");
var ListIcon_1 = require("../../components/SVGIcons/ListIcon");
var GridIcon_1 = require("../../components/SVGIcons/GridIcon");
var NotificationAlert_1 = require("../../components/NotificationAlert");
var Loader_1 = require("../../components/Loader");
var style_1 = require("./style");
var index_1 = require("../PlatformView/index");
var localStorageUtils_1 = require("../../utils/localStorageUtils");
var AccountsView = function () {
    var classes = style_1.useStyles();
    var history = react_router_dom_1.useHistory();
    var userEmailAddr = localStorageUtils_1.getEmail();
    var clientId = (localStorage.getItem('selectedClient')
        ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
        : '').client_id;
    var listViewtype = localStorage.getItem('accViewMode') === 'grid' ? false : true;
    var _a = react_1.useState(listViewtype), isListView = _a[0], setIsListView = _a[1];
    var _b = react_1.useState(0), pageNo = _b[0], setPageNo = _b[1];
    var dispatch = react_redux_1.useDispatch();
    var incrementPageNo = function () { return setPageNo(function (prevState) { return prevState + 1; }); };
    var listViewActiveClass = isListView
        ? classes.svgActive
        : classes.svgNotActive;
    var gridViewActiveClass = !isListView
        ? classes.svgActive
        : classes.svgNotActive;
    var _c = react_1["default"].useState(false), openModal = _c[0], setOpenModal = _c[1];
    var handleOpen = function () {
        setOpenModal(true);
    };
    var handleClose = function () {
        setOpenModal(false);
    };
    var showErrorAlertProps = react_redux_1.useSelector(function (state) { return state === null || state === void 0 ? void 0 : state.app; });
    var isLoadingData = react_redux_1.useSelector(function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.accountList) === null || _a === void 0 ? void 0 : _a.isLoading; });
    var accountListData = react_redux_1.useSelector(function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.accountList) === null || _a === void 0 ? void 0 : _a.accountList; });
    var nextPageUrl = react_redux_1.useSelector(function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.accountList) === null || _a === void 0 ? void 0 : _a.nextPageUrl; });
    var clientData = react_redux_1.useSelector(function (state) { return state === null || state === void 0 ? void 0 : state.clientData; }).data;
    var scrollDivRef = react_1.useRef(null);
    useInfiniteScroll_1.useInfiniteScroll(scrollDivRef, dispatch, isLoadingData, incrementPageNo);
    react_1.useEffect(function () {
        if (pageNo && nextPageUrl) {
            dispatch(configureActionCreators_1.accountListActionCreator.getMoreAccountList(nextPageUrl));
        }
    }, [pageNo]);
    react_1.useEffect(function () {
        if ((clientData === null || clientData === void 0 ? void 0 : clientData.length) === 1) {
            localStorage.setItem('selectedClient', JSON.stringify(clientData[0]));
            dispatch(configureActionCreators_1.accountListActionCreator.getAccountList(clientData[0].client_id));
        }
        else if (clientId) {
            dispatch(configureActionCreators_1.accountListActionCreator.getAccountList(clientId));
        }
    }, [openModal, clientData]);
    react_1["default"].useEffect(function () {
        dispatch(
        //abc@polarisIO.com
        configureActionCreators_1.clientDataActionCreator.clientDataRequest({
            email: userEmailAddr
        }));
        handleOpen();
    }, []);
    var setTheViewMode = function (viewType) {
        localStorage.setItem('accViewMode', viewType);
        var listView = viewType === 'list' ? true : false;
        setIsListView(listView);
    };
    var hideAlertError = function () {
        dispatch &&
            dispatch(configureActionCreators_1.appActionCreator.hideMessage({
                show: false,
                errorMsg: '',
                severity: ''
            }));
    };
    var handleDoubleClick = function (event, accountId, accName, accLogo) {
        history.push("/account-drilldown/" + accountId, {
            accName: accName,
            accLogo: accLogo
        });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        showErrorAlertProps.show ? (react_1["default"].createElement(NotificationAlert_1["default"], __assign({}, showErrorAlertProps, { anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000, onClose: hideAlertError }))) : null,
        (clientData === null || clientData === void 0 ? void 0 : clientData.length) !== 1 && openModal ? (react_1["default"].createElement(index_1["default"], { openModal: openModal, handleClose: handleClose })) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { className: classes.viewBar },
                react_1["default"].createElement("div", { className: classes.svgIcon },
                    react_1["default"].createElement(SvgIcon_1["default"], { component: GridIcon_1["default"], onClick: function () { return setTheViewMode('grid'); }, className: gridViewActiveClass })),
                react_1["default"].createElement("div", { className: classes.svgIcon },
                    react_1["default"].createElement(SvgIcon_1["default"], { component: ListIcon_1["default"], onClick: function () { return setTheViewMode('list'); }, className: listViewActiveClass }))),
            (accountListData === null || accountListData === void 0 ? void 0 : accountListData.length) ? (isListView ? (react_1["default"].createElement(ListView_1["default"], { accountListData: accountListData, handleDoubleClick: handleDoubleClick })) : (react_1["default"].createElement(GridView_1["default"], { accountListData: accountListData, handleDoubleClick: handleDoubleClick }))) : (accountListData === null || accountListData === void 0 ? void 0 : accountListData.length) === 0 ? (react_1["default"].createElement(core_1.Typography, { variant: "h6", classes: { root: classes.noAccountsDisplay } }, "No Accounts to Display")) : null)
        //}
        ),
        react_1["default"].createElement("div", { id: "scrollDetectDiv", ref: scrollDivRef, style: { border: '1px solid #0096DC', margin: '0 50px' } }),
        isLoadingData && react_1["default"].createElement(Loader_1["default"], null)));
};
exports["default"] = AccountsView;
