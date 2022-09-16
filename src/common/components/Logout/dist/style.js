"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            flexGrow: 1,
            padding: 0
        },
        paper: {
            marginTop: 30,
            paddingBottom: 5,
            backgroundColor: theme.palette.common.white
        },
        content: {
            color: theme.palette.common.black,
            textAlign: 'center'
        },
        reLoginLink: {
            color: '#0096dc',
            textDecoration: 'none'
        }
    });
});
