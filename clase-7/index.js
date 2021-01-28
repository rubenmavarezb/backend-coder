"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var app = express_1.default();
app.use(express_1.default.json());
var products = JSON.parse(fs_1.default.readFileSync('./clase-7/productos.txt', 'utf-8'));
var visitas = {
    items: 0,
    item: 0
};
app.get('/items', function (req, res) {
    try {
        visitas.items++;
        res.status(200).send({ items: products, cantidad: products.length });
    }
    catch (error) {
        res.status(404).send({ msg: 'Hubo un error :(' });
        console.log(error);
    }
});
app.get('/item-random', function (req, res) {
    try {
        var prodRandom = products[Math.floor(Math.random() * 3)];
        visitas.item++;
        res.status(200).send({ item: prodRandom });
    }
    catch (error) {
        res.status(404).send({ msg: 'Hubo un error :(' });
        console.log(error);
    }
});
app.get('/visitas', function (req, res) {
    try {
        res.status(200).send({ visitas: visitas });
    }
    catch (error) {
        res.status(404).send({ msg: 'Hubo un error :(' });
        console.log(error);
    }
});
var PORT = 8080;
app.listen(PORT, function () {
    try {
        console.log("server running in port " + PORT);
    }
    catch (error) {
        console.log("El puerto es " + PORT);
    }
});
// interface User {
//     id: string;
//     name: string;
// }
//let users: User[] = [];
// for (let i = 0; i < 20; i++) {
//     users.push(
//         {
//             id: casual.uuid,
//             name: casual.name
//         }
//     )
// }
// app.get('/', (req, res) => {
//     console.log('hola')
//     res.send(users)
// })
// app.post('/', (req, res) => {
//     console.log(req.body)
//     users = [
//         ...users,
//         req.body
//     ]
//     res.status(200).send(users);
// })
