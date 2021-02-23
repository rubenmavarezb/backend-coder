import express from "express";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.json());
app.use(express.urlencoded({extended:true}))

interface Product {
    id: number | string;
    producto: string;
    precio: number;
    thumbnail: string;
}

const products: Product[] = [
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
]


app.set("view engine", ".pug");
app.set("views", __dirname + "/views");


app.get('/add', (req, res) => {
    res.render(__dirname + '/public/index.pug')
});

app.get('/', (req, res) => {
    res.render('index.pug', {products: products, dir:'http://localhost:8080/add'})
})

io.on('connection', (socket: any) => {
    console.log(socket.id);

    socket.broadcast.emit('products', {products});

    socket.on('product', (message:any) => {
        const { producto, precio, thumbnail } = message;

        const newProduct: Product = {
            id: uuidv4(),
            producto,
            precio,
            thumbnail
        }
        
        products.push(newProduct);
    })  
})




http.listen( 8080, () => {
    console.log('Running on port http://localhost:8080')
})