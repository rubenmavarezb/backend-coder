import express from "express";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('clase-13/public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

interface Product {
    id: number | string;
    producto: string;
    precio: number;
    thumbnail: string;
}

let preguntas = ''
let respuestas = ''


app.set("view engine", ".pug");
app.set("views", __dirname + "/public");


app.get('/server', (req, res) => {
    res.render('index.pug')
});

app.get('/', (req, res) => {
    res.render('user.pug')
})

io.on('connection', (socket: any) => {
    console.log(socket.id);
    socket.on('pregunta',(pregunta:string) => {
        console.log(pregunta)
        io.emit('pregunta', pregunta)
    })
    socket.on('respuesta', (respuesta:string) => {
        console.log(respuesta)
        io.emit('respuesta', respuesta)
    })
})




http.listen( 8080, () => {
    console.log('Running on port http://localhost:8080')
})