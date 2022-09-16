"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var react_redux_1 = require("react-redux");
var configureActionCreators_1 = require("../../utils/configureActionCreators");
var useI18n_1 = require("../../hooks/useI18n");
var useInfiniteScroll_1 = require("../../hooks/useInfiniteScroll");
var Loader_1 = require("../../components/Loader");
var Error_1 = require("../../components/Error");
var index_1 = require("../../components/HeaderTitleBar/index");
var style_1 = require("./style");
var TeamAccessManagement = function (_a) {
    var classes = style_1.useStyles();
    var i18n = useI18n_1.useI18n();
    var selectedClient = localStorage.getItem('selectedClient')
        ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
        : '';
    var dispatch = react_redux_1.useDispatch();
    var _b = react_redux_1.useSelector(function (state) { return state === null || state === void 0 ? void 0 : state.clientUsersList; }), loading = _b.loading, error = _b.error, data = _b.data, nextPageUrl = _b.nextPageUrl, errorMessage = _b.errorMessage;
    var ACC_TEAM_HEADERS = [
        i18n._('Name'),
        i18n._('Email'),
        i18n._('Status'),
        i18n._('Last Platform Activity'),
        i18n._(''),
    ];
    var ACTIVE_ACTIONS = [i18n._('Deny'), i18n._('Suspend')];
    var PENDING_ACTIONS = [i18n._('Approve'), i18n._('Deny')];
    var DENIED_SUSPENDED_ACTIONS = [i18n._('Invite'), i18n._('Approve')];
    var ACTIONS = [
        i18n._('Invite'),
        i18n._('Approve'),
        i18n._('Deny'),
        i18n._('Suspend'),
    ];
    var COLORS = [
        '#FF5722',
        '#673AB7',
        '#67CDAA',
        '#419BF9',
        '#9140C1',
        '#4CAF50',
        '#E91E63',
    ];
    var _c = react_1["default"].useState(0), pageNo = _c[0], setPageNo = _c[1];
    var incrementPageNo = function () { return setPageNo(function (prevState) { return prevState + 1; }); };
    var scrollDivRef = react_1["default"].useRef(null);
    useInfiniteScroll_1.useInfiniteScroll(scrollDivRef, dispatch, loading, incrementPageNo);
    /* const handleDoubleClick = (
      event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>,
      userId: string
    ) => {
      dispatch(
        userProfileActionCreator.getUserProfileRequest(
          selectedClient?.client_id ?? null,
          userId
        )
      );
    }; */
    react_1.useEffect(function () {
        var _a;
        dispatch(configureActionCreators_1.clientUsersActionCreator.clientUsersRequest({
            clientId: (_a = selectedClient === null || selectedClient === void 0 ? void 0 : selectedClient.client_id) !== null && _a !== void 0 ? _a : 'ABC0001'
        }));
        return function () {
            dispatch(configureActionCreators_1.clientUsersActionCreator.clientUsersReset());
        };
    }, []);
    react_1.useEffect(function () {
        if (pageNo && nextPageUrl) {
            dispatch(configureActionCreators_1.clientUsersActionCreator.getMoreClientUsersRequest({
                nextPageUrl: nextPageUrl
            }));
        }
    }, [pageNo]);
    var ifDefaultImg = function (link) {
        if (link.split('/').pop() === 'genericUserProfile.png') {
            return true;
        }
        return false;
    };
    var getActions = function (userStatus) {
        var USER_ACTIONS = ACTIONS;
        switch (userStatus) {
            case 'Active':
                USER_ACTIONS = ACTIVE_ACTIONS;
                break;
            case 'Pending':
                USER_ACTIONS = PENDING_ACTIONS;
                break;
            case 'Suspend':
                USER_ACTIONS = DENIED_SUSPENDED_ACTIONS;
                break;
            case 'Denied':
                USER_ACTIONS = DENIED_SUSPENDED_ACTIONS;
                break;
            default:
                USER_ACTIONS = ACTIONS;
        }
        return USER_ACTIONS.map(function (action) {
            return (react_1["default"].createElement(core_1.MenuItem, { className: classes.selectBox, key: action, value: action }, action));
        });
    };
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(index_1["default"], { headerTitle: i18n._('Team Access Management') }),
        (data === null || data === void 0 ? void 0 : data.length) && (react_1["default"].createElement(core_1.TableContainer, { component: core_1.Paper, className: classes.tableContainer },
            react_1["default"].createElement(core_1.Table, { size: "small", "aria-label": "simple table" },
                react_1["default"].createElement(core_1.TableHead, null,
                    react_1["default"].createElement(core_1.TableRow, { className: classes.headerRow }, ACC_TEAM_HEADERS.map(function (header, i) {
                        return (react_1["default"].createElement(core_1.TableCell, { className: classes.tableHeaderCellRoot, key: i }, header));
                    }))),
                react_1["default"].createElement(core_1.TableBody, null, data.map(function (row, i) { return (react_1["default"].createElement(core_1.TableRow, { className: classes.tableRow, key: row.user_id },
                    react_1["default"].createElement(core_1.TableCell, { scope: "row" },
                        react_1["default"].createElement("div", { className: classes.nameCell },
                            ifDefaultImg(row.default_logo_link) ? (react_1["default"].createElement(core_1.Avatar, { alt: "acc_logo", className: classes.smallAvatar, style: {
                                    backgroundColor: COLORS[Math.floor(Math.random() * 7)],
                                    color: '#FFF'
                                } }, row.name.slice()[0].toUpperCase())) : (react_1["default"].createElement(core_1.Avatar, { alt: "acc_logo", className: classes.smallAvatar, src: row.default_logo_link })),
                            react_1["default"].createElement("div", { className: classes.tableDataCell }, row.name))),
                    react_1["default"].createElement(core_1.TableCell, { scope: "row", className: classes.tableDataCell }, row.email),
                    react_1["default"].createElement(core_1.TableCell, { scope: "row", className: classes.tableDataCell }, row.status),
                    react_1["default"].createElement(core_1.TableCell, { scope: "row", className: classes.tableDataCell }, row.last_sign_in ? row.last_sign_in : '-'),
                    react_1["default"].createElement(core_1.TableCell, { scope: "row", className: classes.tableDataCell },
                        react_1["default"].createElement(core_1.FormControl, { className: classes.formControl },
                            react_1["default"].createElement(core_1.InputLabel, { id: "account-action-label" }, "Action"),
                            react_1["default"].createElement(core_1.Select, { labelId: "account-action-label", id: "account-action-select", classes: { icon: classes.ddArowCls } }, getActions(row.status)))))); }))))),
        error ? react_1["default"].createElement(Error_1["default"], { errorMessage: errorMessage }) : null,
        react_1["default"].createElement("div", { id: "scrollDetectDiv", ref: scrollDivRef, style: { border: '1px solid #0096DC', margin: '10px 50px' } }),
        loading ? react_1["default"].createElement(Loader_1["default"], null) : null));
};
exports["default"] = TeamAccessManagement;
