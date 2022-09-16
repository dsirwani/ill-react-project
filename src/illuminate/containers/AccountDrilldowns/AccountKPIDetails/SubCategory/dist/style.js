"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = styles_1.makeStyles(function (theme) { return ({
    tableRow: {
        backgroundColor: '#27272D',
        '&:hover': {
            backgroundColor: '#182A37 !important'
        }
    },
    subTableRow: {
        '&:hover': {
            backgroundColor: '#182A37 !important'
        }
    },
    prodName: {
        width: "47%"
    },
    tableDataCell: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: '0.15px',
        color: 'rgba(255, 255, 255, 0.87)'
    },
    subCatCell: {
        fontWeight: 300,
        '&:hover': {
            fontWeight: 'normal'
        }
    },
    spaceCell: {
        padding: '6px 0px 6px 0px',
        textAlign: 'center',
        width: '3%'
    },
    cellSizeSmall: {
        padding: '1% 2% 1% 1%'
    },
    toggleIcon: {
        color: 'white'
    },
    prodSubCatName: {
        width: '47%'
    },
    catValue: {
        width: function (_a) {
            var noOfColumns = _a.noOfColumns;
            return 50 / noOfColumns + '%';
        }
    }
}); });
