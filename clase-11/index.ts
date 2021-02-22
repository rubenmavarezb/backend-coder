// import pug from 'pug';
// import express from 'express';
// import { v4 as uuidv4 } from 'uuid';

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

// interface Product {
//     id: number | string;
//     producto: string;
//     precio: number;
//     thumbnail: string;
// }

// const products: Product[] = [
//     {
//         id: 1,
//         producto: 'televisor',
//         precio: 1000,
//         thumbnail: 'image.jpg'
//     },
//     {
//         id: 2,
//         producto: 'telefono',
//         precio: 3000,
//         thumbnail: 'image2.jpg'
//     },
//     {
//         id: 3,
//         producto: 'heladera',
//         precio: 5000,
//         thumbnail: 'image3.jpg'
//     }
// ]


// app.set("view engine", ".pug");
// app.set("views", __dirname + "/views");

// app.get('/', (req, res) => {
//     console.log(__dirname)
//     res.render('index.pug', {products: products, dir:'http://localhost:8080/add'})
// })

// app.get('/add', (req, res) => {
//     res.render('C:/Users/Glamit/Desktop/backend-coder/clase-11/public/index.pug')
// });

// app.post('/formsuccess', (req, res) => {
//     const { producto, precio, thumbnail } = req.body;

//     const newProduct: Product = {
//         id: uuidv4(),
//         producto,
//         precio,
//         thumbnail
//     }
    
//     products.push(newProduct);
    
//     res.send(`
//         <h4>Producto agregado</h4>
//         <a href="http://localhost:8080">Ir a productos</a>
//     `)
// });

// app.listen(8080, () => {
//     console.log('Servidor corriendo en el puerto 8080');
// })