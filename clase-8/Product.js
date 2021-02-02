"use strict";
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
    return Products;
}());
exports.default = Products;
