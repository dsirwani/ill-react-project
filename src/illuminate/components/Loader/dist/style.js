"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > * + *': {
                marginLeft: theme.spacing(2)
            }
        },
        loaderRoot: {
            margin: '30px 0 10px'
        }
    });
});
