"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#27272d'
    },
    headerTitleBar: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 1,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    nav: {
        textAlign: 'left',
        color: '#0096dc'
    },
    titleContent: {
        fontSize: 26,
        fontWeight: 300,
        paddingLeft: 8
    }
}); });
