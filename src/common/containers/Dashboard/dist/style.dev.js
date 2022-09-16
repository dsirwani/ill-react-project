"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/core/styles");

var _path = require("path");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var drawerWidth = 80;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    appBar: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      background: '#121212'
    },
    //toolbar: theme.mixins.toolbar,
    toolbar: {
      minHeight: '40px'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3, 0)
    },
    search: _defineProperty({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (0, _styles.fade)(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: (0, _styles.fade)(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: _defineProperty({
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: 120,
      '&:focus': {
        width: 200
      }
    }),
    themeButton: {
      background: '#0096dc',
      color: '#000000',
      margin: theme.spacing(1),
      '&:hover,&:focus': {
        backgroundColor: 'rgb(232, 236, 245)'
      }
    },
    avtarImg: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: '5%'
    },
    uploadBtn: {
      textDecoration: 'none'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
      position: 'absolute',
      right: 0
    },
    ddArowCls: {
      color: '#0096dc'
    },
    selectHover: {
      '&:hover:not(.Mui-disabled):before': {
        borderBottom: '2px solid #0096fc'
      }
    }
  };
});
exports.useStyles = useStyles;