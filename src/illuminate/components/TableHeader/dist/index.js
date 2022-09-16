"use strict";
exports.__esModule = true;
exports.EnhancedTableHead = void 0;
var react_1 = require("react");
var TableCell_1 = require("@material-ui/core/TableCell");
var TableHead_1 = require("@material-ui/core/TableHead");
var TableRow_1 = require("@material-ui/core/TableRow");
var style_1 = require("./style");
exports.EnhancedTableHead = function (props) {
    var headCells = props.headCells;
    var classes = style_1.useStyles();
    return (react_1["default"].createElement(TableHead_1["default"], null,
        react_1["default"].createElement(TableRow_1["default"], null, headCells.map(function (headCell, id) { return (react_1["default"].createElement(TableCell_1["default"], { key: id, align: headCell.align, padding: "default", sortDirection: false, classes: { root: classes.tableCellRoot } }, headCell.title)); }))));
};
{
    /*   <TableSortLabel
      //'active={'REVENUE' === headCell}
      //direction="desc"
      //onClick={createSortHandler(headCell)}
      classes={{
        root: classes.tableSortLabelRoot,
        icon: classes.tableSortLabelIcon,
      }}
    >
       // </TableSortLabel>
    */
}
