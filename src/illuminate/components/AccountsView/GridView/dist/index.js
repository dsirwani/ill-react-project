"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_1 = require("./style");
var index_1 = require("../AccountCard/index");
var AccountGridView = function (_a) {
    var accountListData = _a.accountListData, handleDoubleClick = _a.handleDoubleClick;
    var classes = style_1.useStyles();
    //const headerTitle = ['REVENUE', 'GROWTH', 'TOTAL PLAN', 'BUY CENTER'];
    return (react_1["default"].createElement("div", { className: classes.gridContent }, accountListData &&
        accountListData.map(function (account, idx) {
            var dataToDisplay = {};
            var accountData = {};
            for (var key in account) {
                switch (key) {
                    case 'revenue':
                        dataToDisplay['REVENUE'] = account[key];
                        break;
                    case 'growth':
                        dataToDisplay['GROWTH'] = account[key];
                        dataToDisplay['GROWTH']['unitSymbol'] = '%';
                        break;
                    case 'plan':
                        dataToDisplay['TOTAL PLAN'] = account[key];
                        break;
                    case 'buying_centers':
                        dataToDisplay['BUY CENTER'] = account[key];
                        break;
                    default:
                        accountData[key] = account[key];
                }
                accountData['cardTable'] = dataToDisplay;
            }
            return (react_1["default"].createElement(index_1["default"], { key: "grid-" + account.account_id + "-" + idx, account: accountData, handleDoubleClick: handleDoubleClick }));
        })));
};
exports["default"] = AccountGridView;
