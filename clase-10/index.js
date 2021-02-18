"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_handlebars_1 = __importDefault(require("express-handlebars"));
var express_1 = __importDefault(require("express"));
var uuid_1 = require("uuid");
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var products = [
    {
        id: 1,
        producto: 'televisor',
        precio: 1000,
        thumbnail: 'image.jpg'
    },
    {
        id: 2,
        producto: 'telefono',
        precio: 3000,
        thumbnail: 'image2.jpg'
    },
    {
        id: 3,
        producto: 'heladera',
        precio: 5000,
        thumbnail: 'image3.jpg'
    }
];
app.engine('hbs', express_handlebars_1.default({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));
app.set("view engine", ".hbs");
app.set("views", __dirname + "/views");
app.get('/', function (req, res) {
    console.log(__dirname);
    res.render('main', { products: products, listExists: true });
});
app.get('/add', function (req, res) {
    res.sendFile('C:/Users/Glamit/Desktop/backend-coder/clase-10/public/index.html');
});
app.post('/formsuccess', function (req, res) {
    var _a = req.body, producto = _a.producto, precio = _a.precio, thumbnail = _a.thumbnail;
    var newProduct = {
        id: uuid_1.v4(),
        producto: producto,
        precio: precio,
        thumbnail: thumbnail
    };
    products.push(newProduct);
    res.send("\n        <h4>Producto agregado</h4>\n        <a href=\"http://localhost:8080\">Ir a productos</a>\n    ");
});
app.listen(8080, function () {
    console.log('Servidor corriendo en el puerto 8080');
});
