"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/core/styles");

var drawerWidth = 80;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    messageBar: {
      width: "100%",
      position: 'relative'
    },
    expandIcon: {
      color: '#0096dc'
    },
    greetContent: {
      fontSize: 26,
      fontWeight: 300
    }
  };
});
exports.useStyles = useStyles;