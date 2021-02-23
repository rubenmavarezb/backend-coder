"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var uuid_1 = require("uuid");
var app = express_1.default();
var http = require('http').Server(app);
var io = require('socket.io')(http);
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
app.set("view engine", ".pug");
app.set("views", __dirname + "/views");
app.get('/add', function (req, res) {
    res.render(__dirname + '/public/index.pug');
});
app.get('/', function (req, res) {
    res.render('index.pug', { products: products, dir: 'http://localhost:8080/add' });
});
io.on('connection', function (socket) {
    console.log(socket.id);
    socket.broadcast.emit('products', { products: products });
    socket.on('product', function (message) {
        var producto = message.producto, precio = message.precio, thumbnail = message.thumbnail;
        var newProduct = {
            id: uuid_1.v4(),
            producto: producto,
            precio: precio,
            thumbnail: thumbnail
        };
        products.push(newProduct);
    });
});
http.listen(8080, function () {
    console.log('Running on port http://localhost:8080');
});
