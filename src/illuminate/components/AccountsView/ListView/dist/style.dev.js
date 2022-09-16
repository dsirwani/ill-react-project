"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

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
      background: '#000',
      padding: theme.spacing(3)
    },
    paper: {
      width: '100%',
      background: '#000'
    },
    table: {
      minWidth: 750 //padding: '1% 0',

    },
    tableRow: {
      '&:hover': {
        backgroundColor: '#182A37 !important'
      }
    },
    accNameCell: {
      cursor: 'pointer',
      '&:hover': {
        fontWeight: 'bold'
      }
    },
    container: {
      // maxHeight: 440,
      background: '#272727'
    },
    headerBootomBorder: {
      borderBottom: '1px solid #272727'
    },
    deniedPendingCell: {
      border: '1px dashed #fff'
    },
    thumbnailIcon: {
      display: 'flex',
      alignItems: 'center'
    },
    titleBorder: {
      borderBottom: '1px solid #272727'
    },
    tableCellRoot: {
      fontFamily: 'Roboto',
      fontSize: '24px',
      fontWeight: 300,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.5',
      letterSpacing: 'normal',
      color: 'rgba(255, 255, 255, 0.87)',
      padding: theme.spacing(1.5)
    }
  };
});
exports.useStyles = useStyles;