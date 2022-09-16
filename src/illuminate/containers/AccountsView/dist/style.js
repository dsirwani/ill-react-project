"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        viewBar: {
            display: 'flex',
            flexDirection: 'row-reverse',
            margin: theme.spacing(3, 5)
        },
        svgIcon: {
            margin: theme.spacing(0, 1)
        },
        svgActive: {
            cursor: 'pointer',
            filter: 'invert(39%) sepia(45%) saturate(1807%) hue-rotate(168deg) brightness(104%) contrast(102%)'
        },
        svgNotActive: {
            cursor: 'pointer'
        },
        noAccountsDisplay: {
            margin: theme.spacing(1, 7)
        }
    });
});
