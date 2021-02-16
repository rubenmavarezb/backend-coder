"use strict";
// import express from 'express';
// import Product from '../Products/Products';
// import { v4 as uuidv4 } from 'uuid';
// const router = express.Router();
// const products = new Product([]);
// router.post('/formsuccess', (req, res) => {
//     const { name, price, thumbnail } = req.body;
//     const newProduct = {
//         id: uuidv4(),
//         name,
//         price,
//         thumbnail
//     }
//     products.addProduct(newProduct);
//     res.json({msg: 'Producto agregado!'})
// });
// router.delete('/borrar/:id', (req, res) => {
//     const { id } = req.params;
//     products.deleteProduct(id);
//     res.send(`<p>Producto borrado!</p>`)
// });
// router.get('/', (req, res) => {
//     res.sendFile('C:/Users/Glamit/Desktop/backend-coder/clase-9/public/index.html')
// });
// router.put('/editar/:id', (req,res) => {
//     const { id } = req.body;
//     const product = products.findOneProduct(id);
//     //modificacion aqui luego res.send()
// })
// router.get('/allproductos', (req, res) => {
//     res.send(`
//         <h2>Tus productos:</h2>
//         <ul>
//             ${products.getProducts().map(prod => (
//                 `<li key=${prod.id}>
//                     <div>
//                         <p>ID: <strong>${prod.id}</strong></p>
//                         <h5>${prod.name}</h5>
//                         <h6>${prod.price}</h6>
//                         <p>${prod.thumbnail}</p>
//                     </div>
//                 </li>`
//             ))}
//         </ul>
//     `);
// });
// export default router;
