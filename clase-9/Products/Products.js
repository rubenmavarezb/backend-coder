"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Products = /** @class */ (function () {
    function Products(products) {
        this.products = products;
    }
    Products.prototype.addProduct = function (prod) {
        this.products.push(prod);
    };
    Products.prototype.getProducts = function () {
        return this.products;
    };
    Products.prototype.findOneProduct = function (id) {
        var findProduct = this.products.find(function (prod) { return prod.id === id; });
        return findProduct;
    };
    Products.prototype.deleteProduct = function (id) {
        var deleteProduct = this.products.filter(function (prod) { return prod.id !== id; });
        this.products = __spreadArrays(deleteProduct);
    };
    return Products;
}());
exports.default = Products;
