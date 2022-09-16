"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        fontFamily: 'Roboto',
        fontSize: 16
    },
    kpiType: {
        lineHeight: '4px',
        textDecoration: 'underline',
        fontSize: 12
    },
    mY: {
        fontSize: 8
    },
    tableContainer: {
        width: '100%',
        backgroundColor: '#000'
    },
    tableRow: {
        backgroundColor: '#27272D',
        '&:hover': {
            backgroundColor: '#182A37 !important'
        }
    },
    tableHeaderCellRoot: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.14,
        letterSpacing: '0.47px',
        color: 'rgba(255, 255, 255, 0.6)'
    },
    tableTitleCellRoot: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 300,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        letterSpacing: 'normal',
        color: 'rgba(255, 255, 255, 0.87)'
    },
    tableDataCell: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        letterSpacing: '0.15px',
        color: 'rgba(255, 255, 255, 0.87)'
    },
    subTableRow: {
        '&:hover': {
            backgroundColor: '#182A37 !important'
        }
    },
    subCatCell: {
        fontWeight: 300,
        '&:hover': {
            fontWeight: 'normal'
        }
    },
    prodName: {
        width: '47%'
    },
    prodSubCatName: {
        width: '47%'
    },
    catValue: {
        width: function (_a) {
            var noOfColumns = _a.noOfColumns;
            return 50 / noOfColumns + '%';
        }
    },
    spaceCell: {
        padding: '6px 0px 6px 0px',
        textAlign: 'center',
        width: '3%'
    },
    toggleIcon: {
        color: 'white'
    }
}); });
