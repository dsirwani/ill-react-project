"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("@material-ui/core");
var Search_1 = require("@material-ui/icons/Search");
var react_redux_1 = require("react-redux");
var style_1 = require("./style");
var cognitoUtils_1 = require("../../utils/cognitoUtils");
var routeConstants_1 = require("../../utils/routeConstants");
var ContentWrapper_1 = require("../../components/ContentWrapper");
var configureActionCreators_1 = require("../../utils/configureActionCreators");
var useI18n_1 = require("../../hooks/useI18n");
var Footer_1 = require("../../components/Footer");
var Dashboard = function () {
    var classes = style_1.useStyles();
    var dispatch = react_redux_1.useDispatch();
    var i18n = useI18n_1.useI18n();
    var history = react_router_dom_1.useHistory();
    //const avtrMenuOptions = [i18n._('Logout'), i18n._('Team Management')];
    var _a = react_1["default"].useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var localeLang = react_redux_1.useSelector(function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.dashboard) === null || _a === void 0 ? void 0 : _a.locale; });
    var languages = [
        { locale: 'English', code: 'en' },
        { locale: 'Japanese', code: 'ja' },
        { locale: 'French', code: 'fr' },
        { locale: 'Arabic', code: 'ar' },
    ];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleLocaleChange = function (event) {
        dispatch(configureActionCreators_1.dashboardActionCreator.setLocaleLang(event.target.value));
    };
    var onSignOut = function (e) {
        e.preventDefault();
        cognitoUtils_1["default"].signOutCognitoSession();
        localStorage.clear();
    };
    var handleTeamManagement = function (e) {
        e.preventDefault();
        history.push(routeConstants_1.ROUTES.TEAM_MANAGEMENT);
    };
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(core_1.CssBaseline, null),
        react_1["default"].createElement(core_1.AppBar, { position: "fixed", className: classes.appBar },
            react_1["default"].createElement(core_1.Toolbar, null,
                react_1["default"].createElement(core_1.Typography, { variant: "h6", noWrap: true }, "PolarisIO"),
                react_1["default"].createElement("div", { className: classes.search },
                    react_1["default"].createElement("div", { className: classes.searchIcon },
                        react_1["default"].createElement(Search_1["default"], null)),
                    react_1["default"].createElement(core_1.InputBase, { placeholder: i18n._('Search'), classes: {
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }, inputProps: { 'aria-label': 'search' } })),
                react_1["default"].createElement(core_1.Button, { variant: "outlined", color: "primary", className: classes.themeButton }, i18n._('Btn.Go')),
                react_1["default"].createElement(react_router_dom_1.Link, { to: routeConstants_1.ROUTES.UPLOAD, className: classes.uploadBtn },
                    react_1["default"].createElement(core_1.Button, { variant: "outlined", color: "primary", className: classes.themeButton }, i18n._('Btn.Upload'))),
                react_1["default"].createElement(core_1.FormControl, { className: classes.formControl },
                    react_1["default"].createElement(core_1.InputLabel, { id: "select-language-lbl" }, "Select Language"),
                    react_1["default"].createElement(core_1.Select, { labelId: "select-language-label", id: "select-language", value: localeLang, onChange: handleLocaleChange, classes: { icon: classes.ddArowCls }, className: classes.selectHover }, languages.map(function (language) { return (react_1["default"].createElement(core_1.MenuItem, { key: language.code, value: language.code }, language.locale)); }))))),
        react_1["default"].createElement(core_1.Drawer, { className: classes.drawer, variant: "permanent", classes: {
                paper: classes.drawerPaper
            }, anchor: "left" },
            react_1["default"].createElement("div", { className: classes.avtarImg },
                react_1["default"].createElement(core_1.Avatar, { src: "/broken-image.jpg", onClick: handleClick })),
            react_1["default"].createElement(core_1.Menu, { id: "avatar-menu", anchorEl: anchorEl, keepMounted: true, open: open, onClose: handleClose, elevation: 0, getContentAnchorEl: null, anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                }, transformOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                }, PaperProps: {
                    style: {
                        width: '27ch',
                        background: '#27272d'
                    }
                } },
                react_1["default"].createElement(core_1.MenuItem, { key: "team-management", onClick: handleClose },
                    react_1["default"].createElement(core_1.ListItemText, { primary: i18n._('Team Management'), onClick: handleTeamManagement })),
                react_1["default"].createElement(core_1.MenuItem, { key: "logout", onClick: handleClose },
                    react_1["default"].createElement(core_1.ListItemText, { primary: i18n._('Logout'), onClick: onSignOut })))),
        react_1["default"].createElement("main", { className: classes.content },
            react_1["default"].createElement("div", { className: classes.toolbar }),
            react_1["default"].createElement(ContentWrapper_1["default"], null)),
        react_1["default"].createElement(Footer_1["default"], null)));
};
exports["default"] = Dashboard;
