"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.prodCategoryReducer = void 0;
var configureActions_1 = require("../../../utils/configureActions");
var getSubCategoriesUtils_1 = require("../../../utils/getSubCategoriesUtils");
var initialProdCatState = {
    loading: false,
    scrollLoader: false,
    error: false,
    errorMessage: '',
    prodCategories: null,
    nextPageUrl: null,
    prodSummary: null,
    currency: 'USD',
    product_id: null,
    unit: '',
    prodCategoriesTree: null
};
exports.prodCategoryReducer = function (state, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (state === void 0) { state = {
        prodData: initialProdCatState
    }; }
    switch (action.type) {
        case configureActions_1["default"].PRODUCT_CATEGORY_REQUEST:
            return __assign(__assign({}, state), { prodData: __assign(__assign({}, initialProdCatState), { scrollLoader: true, error: false, errorMessage: '' }) });
        case configureActions_1["default"].PRODUCT_CATEGORY_SUCCESS:
            var _j = getSubCategoriesUtils_1.getprodCategories((_a = action === null || action === void 0 ? void 0 : action.payload) !== null && _a !== void 0 ? _a : {}, state.prodData), prodSummary = _j.prodSummary, prodCategoriesTree = _j.prodCategoriesTree;
            return __assign(__assign({}, state), { prodData: __assign(__assign({}, state.prodData), { scrollLoader: false, error: false, errorMessage: '', data: action === null || action === void 0 ? void 0 : action.payload, prodCategories: __spreadArrays(prodCategoriesTree), prodSummary: prodSummary, nextPageUrl: (_b = action === null || action === void 0 ? void 0 : action.payload) === null || _b === void 0 ? void 0 : _b.next }) });
        case configureActions_1["default"].PRODUCT_CATEGORY_ERROR:
            return __assign(__assign({}, state), { prodData: __assign(__assign({}, state.prodData), { scrollLoader: false, error: true, errorMessage: action === null || action === void 0 ? void 0 : action.payload, data: null }) });
        case configureActions_1["default"].PRODUCT_CATEGORY_REMOVE:
            var _k = (_c = action === null || action === void 0 ? void 0 : action.payload) === null || _c === void 0 ? void 0 : _c.data, productId = _k.productId, parentGrp = _k.parentGrp;
            var prodCategories = getSubCategoriesUtils_1.removeSubCategoriesOnClose(state.prodData.prodCategories, productId, parentGrp);
            return __assign(__assign({}, state), { prodData: __assign(__assign({}, state.prodData), { prodCategories: __spreadArrays(prodCategories), scrollLoader: false, error: false, errorMessage: '', data: null }) });
        case configureActions_1["default"].PRODUCT_CATEGORY_RESET:
            return __assign(__assign({}, state), { prodData: __assign(__assign({}, state.prodData), { scrollLoader: false, error: false, errorMessage: '', data: null }) });
        case configureActions_1["default"].GET_MORE_PRODUCT_CATEGORY_REQUEST:
            return __assign(__assign({}, state), { prodData: __assign(__assign({}, state.prodData), { scrollLoader: true, error: false, errorMessage: '', data: null, nextPageUrl: (_d = action === null || action === void 0 ? void 0 : action.payload) === null || _d === void 0 ? void 0 : _d.nextPageUrl }) });
        case configureActions_1["default"].GET_MORE_PRODUCT_CATEGORY_SUCCESS:
            var moreProducts = getSubCategoriesUtils_1.getCategoriesTree((_f = (_e = action === null || action === void 0 ? void 0 : action.payload) === null || _e === void 0 ? void 0 : _e.items) !== null && _f !== void 0 ? _f : [], '');
            return __assign(__assign({}, state), { prodData: __assign(__assign({}, state.prodData), { scrollLoader: false, error: false, errorMessage: '', data: action === null || action === void 0 ? void 0 : action.payload, prodCategories: __spreadArrays(state.prodData.prodCategories, moreProducts), nextPageUrl: (_g = action === null || action === void 0 ? void 0 : action.payload) === null || _g === void 0 ? void 0 : _g.next }) });
        case configureActions_1["default"].GET_MORE_PRODUCT_CATEGORY_ERROR:
            return __assign(__assign({}, state), { prodData: __assign(__assign({}, state.prodData), { scrollLoader: false, error: true, errorMessage: action === null || action === void 0 ? void 0 : action.payload, data: null }) });
        case configureActions_1["default"].PRODUCT_SUB_CATEGORY_REQUEST:
            return __assign(__assign({}, state), { prodData: __assign(__assign({}, state.prodData), { loading: true, error: false, errorMessage: '', data: null }) });
        case configureActions_1["default"].PRODUCT_SUB_CATEGORY_SUCCESS:
            var _l = getSubCategoriesUtils_1.getprodCategories((_h = action === null || action === void 0 ? void 0 : action.payload) !== null && _h !== void 0 ? _h : {}, state.prodData), subProdSummary = _l.prodSummary, subProdCategoriesTree = _l.prodCategoriesTree;
            return __assign(__assign({}, state), { prodData: __assign(__assign({}, state.prodData), { loading: false, error: false, errorMessage: '', data: action === null || action === void 0 ? void 0 : action.payload, prodCategories: __spreadArrays(subProdCategoriesTree), prodSummary: subProdSummary }) });
        case configureActions_1["default"].PRODUCT_SUB_CATEGORY_ERROR:
            return __assign(__assign({}, state), { prodData: __assign(__assign({}, state.prodData), { loading: false, error: true, errorMessage: action === null || action === void 0 ? void 0 : action.payload, data: null }) });
        case configureActions_1["default"].PRODUCT_SUB_CATEGORY_RESET:
            return __assign(__assign({}, state), { prodData: {
                    loading: false,
                    error: false,
                    errorMessage: '',
                    data: null,
                    prodSubCategories: null
                } });
        default:
            return __assign({}, state);
    }
};
