"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        tableSortLabelRoot: {
            '&:hover': {
                color: '#0096dc'
            },
            '&.MuiTableSortLabel-active': {
                color: '#0096dc'
            }
        },
        tableSortLabelIcon: {
            color: '#0096dc !important'
        },
        tableCellRoot: {
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.14',
            letterSpacing: 0.47,
            color: 'rgba(255, 255, 255, 0.6)',
            padding: theme.spacing(1.5)
        }
    });
});
