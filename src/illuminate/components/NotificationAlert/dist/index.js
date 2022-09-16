"use strict";
exports.__esModule = true;
var react_1 = require("react");
var clsx_1 = require("clsx");
var core_1 = require("@material-ui/core");
var CheckCircle_1 = require("@material-ui/icons/CheckCircle");
var Error_1 = require("@material-ui/icons/Error");
var Info_1 = require("@material-ui/icons/Info");
var Close_1 = require("@material-ui/icons/Close");
var IconButton_1 = require("@material-ui/core/IconButton");
var Warning_1 = require("@material-ui/icons/Warning");
var style_1 = require("./style");
var variantIcon = {
    success: CheckCircle_1["default"],
    warning: Warning_1["default"],
    error: Error_1["default"],
    info: Info_1["default"]
};
var NotificationAlert = function (props) {
    var show = props.show, errorMsg = props.errorMsg, severity = props.severity, autoHideDuration = props.autoHideDuration, anchorOrigin = props.anchorOrigin, onClose = props.onClose;
    var classes = style_1["default"]();
    var Icon = variantIcon[severity];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(core_1.Snackbar, { className: clsx_1["default"](classes[severity], classes.basicProperties), "aria-describedby": "client-snackbar", open: show, role: "alert", autoHideDuration: autoHideDuration || null, anchorOrigin: anchorOrigin || { vertical: 'top', horizontal: 'center' }, onClose: onClose, ContentProps: {
                classes: {
                    root: clsx_1["default"](classes.snackbarContentRoot, classes[severity])
                }
            }, message: react_1["default"].createElement("span", { id: "client-snackbar", className: classes.message },
                react_1["default"].createElement(Icon, { className: clsx_1["default"](classes.icon, classes.iconVariant) }),
                errorMsg), action: [
                react_1["default"].createElement(IconButton_1["default"], { key: "close", "aria-label": "close", color: "inherit", onClick: onClose },
                    react_1["default"].createElement(Close_1["default"], { className: classes.icon })),
            ] })));
};
exports["default"] = NotificationAlert;
