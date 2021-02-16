"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_handlebars_1 = __importDefault(require("express-handlebars"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var products = [
    {
        id: 1,
        producto: 'televisor',
        precio: 1000
    },
    {
        id: 2,
        producto: 'telefono',
        precio: 3000
    },
    {
        id: 3,
        producto: 'heladera',
        precio: 5000
    }
];
app.engine('hbs', express_handlebars_1.default({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));
app.set("view engine", "hbs");
app.set("views", "./views");
app.get('/', function (req, res) {
    console.log(__dirname);
    res.render('main', { products: products, listExists: true });
});
app.listen(8080, function () {
    console.log('Servidor corriendo en el puerto 8080');
});
