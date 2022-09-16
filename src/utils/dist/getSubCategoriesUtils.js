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
exports.removeSubCategoriesOnClose = exports.getprodCategories = exports.getCategoriesTree = void 0;
function getCategoriesTree(items, parentGrp) {
    return items.map(function (product) {
        if (product.sub_category) {
            return __assign({ collapse: true, parentGrp: parentGrp
                    ? parentGrp + "." + product.product_id
                    : "" + product.product_id }, product);
        }
        else {
            return __assign({}, product);
        }
    });
}
exports.getCategoriesTree = getCategoriesTree;
function getprodCategories(data, prodData) {
    var _a;
    var level = data.level, items = data.items, _b = data.parentGrp, parentGrp = _b === void 0 ? '' : _b;
    var prodCategoriesTree = [];
    var subCategories = [];
    subCategories = getCategoriesTree(items, parentGrp);
    if (level === 0) {
        prodCategoriesTree = subCategories;
    }
    else {
        var parentHirarchy = parentGrp && parentGrp.split('.');
        var subCatTree = __spreadArrays(prodData === null || prodData === void 0 ? void 0 : prodData.prodCategories);
        var categoryId = data.product_id;
        prodCategoriesTree = getSubCategories(subCatTree, parentHirarchy, categoryId, subCategories);
    }
    var prodSummary = level === 0 ? (_a = __spreadArrays(data === null || data === void 0 ? void 0 : data.summary)) !== null && _a !== void 0 ? _a : [] : __spreadArrays(prodData.prodSummary);
    return { prodSummary: prodSummary, prodCategoriesTree: prodCategoriesTree };
}
exports.getprodCategories = getprodCategories;
function getSubCategories(subCatTree, parentHirarchy, categoryId, currentCategories) {
    var categories = subCatTree;
    if (parentHirarchy.length) {
        parentHirarchy.forEach(function (prodId, idx) {
            var currentCategoryIdx = categories.findIndex(function (product) { return product.product_id === +prodId; });
            if (currentCategoryIdx >= 0 && idx === parentHirarchy.length - 1) {
                categories[currentCategoryIdx]['collapse'] = !categories[currentCategoryIdx].collapse;
                categories[currentCategoryIdx]['subCategories'] = currentCategories;
                //  return categories;
            }
            else if (currentCategoryIdx >= 0) {
                categories[currentCategoryIdx]['subCategories'] = getSubCategories(categories[currentCategoryIdx]['subCategories'], parentHirarchy.slice(1), categoryId, currentCategories);
            }
        });
        return categories;
    }
    else {
        var currentCategoryIdx = subCatTree.findIndex(function (product) { return product.product_id === categoryId; });
        subCatTree[currentCategoryIdx]['subCategories'] = currentCategories;
        categories = subCatTree;
        return categories;
    }
}
function removeSubCategoriesOnClose(productCategories, productId, parentGrp) {
    var categories = productCategories;
    var parentHirarchy = parentGrp && (parentGrp === null || parentGrp === void 0 ? void 0 : parentGrp.split('.'));
    if (parentHirarchy.length) {
        parentHirarchy.forEach(function (prodId, idx) {
            var currentCategoryIdx = categories.findIndex(function (product) { return product.product_id === +prodId; });
            if (currentCategoryIdx >= 0 &&
                idx === parentHirarchy.length - 1 &&
                categories[currentCategoryIdx].product_id === productId) {
                categories[currentCategoryIdx]['collapse'] = !categories[currentCategoryIdx].collapse;
                delete categories[currentCategoryIdx]['subCategories'];
            }
            else if (currentCategoryIdx >= 0) {
                categories[currentCategoryIdx]['subCategories'] = removeSubCategoriesOnClose(categories[currentCategoryIdx]['subCategories'], productId, parentHirarchy.slice(1).join('.'));
            }
        });
        return categories;
    }
}
exports.removeSubCategoriesOnClose = removeSubCategoriesOnClose;
