"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Products_1 = __importDefault(require("../Products/Products"));
var uuid_1 = require("uuid");
var router = express_1.default.Router();
var products = new Products_1.default([]);
router.post('/formsuccess', function (req, res) {
    var _a = req.body, name = _a.name, price = _a.price, thumbnail = _a.thumbnail;
    var newProduct = {
        id: uuid_1.v4(),
        name: name,
        price: price,
        thumbnail: thumbnail
    };
    products.addProduct(newProduct);
    res.json({ msg: 'Producto agregado!' });
});
router.delete('/borrar/:id', function (req, res) {
    var id = req.params.id;
    products.deleteProduct(id);
    res.send("<p>Producto borrado!</p>");
});
router.get('/', function (req, res) {
    res.sendFile('C:/Users/Glamit/Desktop/backend-coder/clase-9/public/index.html');
});
router.put('/editar/:id', function (req, res) {
    var id = req.body.id;
    var product = products.findOneProduct(id);
    //modificacion aqui luego res.send()
});
router.get('/allproductos', function (req, res) {
    res.send("\n        <h2>Tus productos:</h2>\n        <ul>\n            " + products.getProducts().map(function (prod) { return ("<li key=" + prod.id + ">\n                    <div>\n                        <p>ID: <strong>" + prod.id + "</strong></p>\n                        <h5>" + prod.name + "</h5>\n                        <h6>" + prod.price + "</h6>\n                        <p>" + prod.thumbnail + "</p>\n                    </div>\n                </li>"); }) + "\n        </ul>\n    ");
});
exports.default = router;
