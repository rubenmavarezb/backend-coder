"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express_1.default.static('clase-13/public'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var preguntas = '';
var respuestas = '';
app.set("view engine", ".pug");
app.set("views", __dirname + "/public");
app.get('/server', function (req, res) {
    res.render('index.pug');
});
app.get('/', function (req, res) {
    res.render('user.pug');
});
io.on('connection', function (socket) {
    console.log(socket.id);
    socket.on('pregunta', function (pregunta) {
        console.log(pregunta);
        io.emit('pregunta', pregunta);
    });
    socket.on('respuesta', function (respuesta) {
        console.log(respuesta);
        io.emit('respuesta', respuesta);
    });
});
http.listen(8080, function () {
    console.log('Running on port http://localhost:8080');
});
