"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
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
      textAlign: 'right',
      color: 'rgba(255, 255, 255, 0.6)',
      padding: theme.spacing(1.5)
    }
  });
});
exports.useStyles = useStyles;