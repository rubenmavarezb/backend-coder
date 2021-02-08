"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mascotas_1 = __importDefault(require("./routes/mascotas"));
var productos_1 = __importDefault(require("./routes/productos"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use('/mascotas', require('./routes/mascotas').default)
app.use('/api/mascotas', mascotas_1.default);
app.use('/api/productos', productos_1.default);
app.listen(8080, function () {
    try {
        console.log('server is running in port 8080');
    }
    catch (error) {
        console.log('Ese puerto ya esta tomado bro!');
    }
});
