"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Product_1 = __importDefault(require("./Product"));
var uuid_1 = require("uuid");
var app = express_1.default();
app.use(express_1.default.json());
var products = new Product_1.default([]);
app.get('/products', function (req, res) {
    var result = products.getProducts();
    try {
        res.status(200).json({ products: result });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Hubo un error' });
    }
});
app.post('/products', function (req, res) {
    var _a = req.body, title = _a.title, price = _a.price, thumbnail = _a.thumbnail;
    try {
        if ([title, price, thumbnail].includes('')) {
            res.status(400).json({ msg: 'Todos los campos son requeridos' });
            return;
        }
        var newProduct = {
            id: uuid_1.v4(),
            title: title,
            price: price,
            thumbnail: thumbnail,
        };
        products.addProduct(newProduct);
        res.status(200).json({ msg: 'Producto agregado!' });
    }
    catch (error) {
        console.log('Hubo un error cargando el producto', error);
    }
});
app.get('/products/:id', function (req, res) {
    var id = req.params.id;
    var result = products.findOneProduct(id);
    try {
        if (!result) {
            res.status(400).json({ msg: 'Producto no encontrado' });
            return;
        }
        res.status(200).json({ product: result });
    }
    catch (error) {
        console.log(error);
    }
});
app.listen(8080, function () {
    try {
        console.log('server is running in port 3333');
    }
    catch (error) {
        console.log('Ese puerto ya esta tomado bro!');
    }
});
// let perros: any[] = []
// app.get('/perros', (req, res) => {
//     res.status(200).json({perros: perros})
// })
// app.get('/perro/:id', (req, res) => {
//     const id = req.params.id;
//     const perro = perros.find(dog => dog.id === Number(id));
//     if(!perro){
//         res.status(404).json({msg: 'Perro no encontrado'});
//     }
//     res.status(200).json(perro);
// })
// app.post('/perros', (req, res) => {
//     const { id, nombre, raza, edad } = req.body;
//     const perro = {
//         id,
//         nombre,
//         raza, edad
//     }
//     perros.push(perro)
//     res.sendStatus(201)
// })
// app.patch('/perro/:id/raza', (req, res) => {
//     const { id } = req.params;
//     const perro = perros.find(dog => dog.id === Number(id));
//     if(!perro){
//         res.status(404).json({msg: 'Perro no encontrado'});
//     }
//     const {raza} = req.body
//     perro.raza = raza
//     res.sendStatus(201).json({msg: 'Perro modificado'});
// })
// app.delete('/perro/:id', (req, res) => {
//     const { id } = req.params;
//     const perro = perros.find(dog => dog.id === Number(id));
//     if(!perro){
//         res.status(404).json({msg: 'Perro no encontrado'});
//     }
//     perros = perros.filter(dog => dog.id !== Number(id))
//     res.sendStatus(201).json({msg:'Perro eliminado'})
// })
