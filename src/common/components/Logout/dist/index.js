"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var cognitoUtils_1 = require("../../utils/cognitoUtils");
var style_1 = require("./style");
var Logout = function () {
    var classes = style_1.useStyles();
    return (react_1["default"].createElement(core_1.Grid, { container: true, direction: "column", className: classes.root, justify: "center", alignItems: "center" },
        react_1["default"].createElement(core_1.Grid, { item: true },
            react_1["default"].createElement(core_1.Paper, { className: classes.paper },
                react_1["default"].createElement(core_1.Grid, { item: true },
                    react_1["default"].createElement("img", { width: "350", height: "220", src: "assets/brand_logo/polaris-io-brand-logo.jpg", alt: "brand logo" })),
                react_1["default"].createElement(core_1.Grid, { item: true, className: classes.content },
                    react_1["default"].createElement(core_1.Typography, { gutterBottom: true, variant: "h5", component: "h2" }, "Signed out successfully"),
                    react_1["default"].createElement("a", { className: classes.reLoginLink, href: cognitoUtils_1["default"].getCognitoSignInUri() }, "Re-Login"))))));
};
exports["default"] = Logout;
