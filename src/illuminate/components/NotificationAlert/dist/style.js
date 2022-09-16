"use strict";
exports.__esModule = true;
var styles_1 = require("@material-ui/core/styles");
var colors_1 = require("@material-ui/core/colors");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        basicProperties: {
            width: '85%',
            borderRadius: '8px'
        },
        success: {
            backgroundColor: colors_1.green[600]
        },
        error: {
            backgroundColor: theme.palette.error.dark
        },
        info: {
            backgroundColor: theme.palette.primary.main
        },
        warning: {
            backgroundColor: colors_1.amber[700]
        },
        icon: {
            fontSize: 20
        },
        iconVariant: {
            opacity: 0.9,
            marginRight: theme.spacing(1)
        },
        message: {
            display: 'flex',
            alignItems: 'center'
        },
        snackbarContentRoot: {
            width: '100%'
        }
    });
});
exports["default"] = useStyles;
