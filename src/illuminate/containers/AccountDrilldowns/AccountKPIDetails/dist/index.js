"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var RevenuePanel_1 = require("./RevenuePanel");
var Loader_1 = require("../../../components/Loader");
var GrowthPanel_1 = require("./GrowthPanel");
var TotalPlanPanel_1 = require("./TotalPlanPanel");
var BuyCenterPanel_1 = require("./BuyCenterPanel");
var PGIPanel_1 = require("./PGIPanel");
var Error_1 = require("../../../components/Error");
var useInfiniteScroll_1 = require("../../../hooks/useInfiniteScroll");
var style_1 = require("./style");
var configureActionCreators_1 = require("../../../utils/configureActionCreators");
var AccountKPIDetails = function (_a) {
    var tabValue = _a.tabValue, tabName = _a.tabName;
    var classes = style_1.useStyles();
    var dispatch = react_redux_1.useDispatch();
    var accountId = react_router_dom_1.useParams().accountId;
    var _b = react_1["default"].useState(0), pageNo = _b[0], setPageNo = _b[1];
    var incrementPageNo = function () { return setPageNo(function (prevState) { return prevState + 1; }); };
    var _c = react_redux_1.useSelector(function (state) { var _a; return (_a = state.prodCategoryData) === null || _a === void 0 ? void 0 : _a.prodData; }), scrollLoader = _c.scrollLoader, error = _c.error, errorMessage = _c.errorMessage, prodCategories = _c.prodCategories, nextPageUrl = _c.nextPageUrl, prodSummary = _c.prodSummary;
    var scrollDivRef = react_1["default"].useRef(null);
    useInfiniteScroll_1.useInfiniteScroll(scrollDivRef, dispatch, scrollLoader, incrementPageNo);
    react_1["default"].useEffect(function () {
        dispatch(configureActionCreators_1.prodCategoryActionCreator.prodCategoryRequest({
            productId: null,
            accountId: accountId,
            tabName: tabName,
            level: 0,
            parentGrp: null
        }));
    }, [tabName]);
    react_1["default"].useEffect(function () {
        if (pageNo && nextPageUrl) {
            dispatch(configureActionCreators_1.prodCategoryActionCreator.getMoreProdCategoryRequest({
                accountId: accountId,
                tabName: tabName,
                nextPageUrl: nextPageUrl
            }));
        }
    }, [pageNo]);
    return (react_1["default"].createElement("div", { className: classes.root },
        (function () {
            switch (tabValue) {
                case 0:
                    return (react_1["default"].createElement(RevenuePanel_1["default"], { prodCategories: prodCategories, prodSummary: prodSummary, tabName: tabName }));
                case 1:
                    return (react_1["default"].createElement(GrowthPanel_1["default"], { prodCategories: prodCategories, prodSummary: prodSummary, tabName: tabName }));
                case 2:
                    return (react_1["default"].createElement(TotalPlanPanel_1["default"], { prodCategories: prodCategories, prodSummary: prodSummary, tabName: tabName }));
                case 3:
                    return (react_1["default"].createElement(BuyCenterPanel_1["default"], { prodCategories: prodCategories, prodSummary: prodSummary, tabName: tabName }));
                case 4:
                    return (react_1["default"].createElement(PGIPanel_1["default"], { prodCategories: prodCategories, prodSummary: prodSummary, tabName: tabName }));
                default:
                    return null;
            }
        })(),
        error ? react_1["default"].createElement(Error_1["default"], { errorMessage: errorMessage }) : null,
        react_1["default"].createElement("div", { id: "scrollDetectDiv", ref: scrollDivRef, style: { border: '1px solid #0096DC', margin: '10px 50px' } }),
        scrollLoader ? react_1["default"].createElement(Loader_1["default"], null) : null));
};
exports["default"] = AccountKPIDetails;
