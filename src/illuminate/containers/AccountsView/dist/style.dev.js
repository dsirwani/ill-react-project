"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToolbarStyles = exports.useStyles = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: '100%',
      fontFamily: 'Roboto',
      fontSize: '20px',
      fontWeight: '300',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.2',
      letterSpacing: '0.15px',
      color: 'var(--on-surface-high-emphasis-ffffff-87)',
      background: '#000'
    },
    paper: {
      width: '100%',
      background: '#000'
    },
    table: {
      minWidth: 750 //padding: '1% 0',

    },
    container: {
      // maxHeight: 440,
      background: '#272727'
    },
    paginationRoot: {
      background: '#272727'
    }
  };
});
exports.useStyles = useStyles;
var useToolbarStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      borderBottom: '1px solid #272727'
    },
    highlight: theme.palette.type === 'light' ? {
      color: theme.palette.secondary.main,
      backgroundColor: (0, _styles.lighten)(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    title: {
      flex: '1 1 100%'
    }
  });
});
exports.useToolbarStyles = useToolbarStyles;