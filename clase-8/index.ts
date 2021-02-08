// import express from 'express';
// import Products from './Product';
// import { v4 as uuidv4 } from 'uuid';

// const app = express();

// app.use(express.json());

// let products = new Products([]);

// app.get('/products', (req, res) => {
//     const result = products.getProducts();
//     try {
//         res.status(200).json({products: result})
//     } catch (error) {
//         console.log(error)
//         res.status(400).json({msg: 'Hubo un error'})
//     }
// })

// app.post('/products', (req, res) => {
//     const { title, price, thumbnail } = req.body;

//     try {
//         if([title, price, thumbnail].includes('')){
//             res.status(400).json({msg: 'Todos los campos son requeridos'});
//             return;
//         }
    
//         const newProduct = {
//             id: uuidv4(),
//             title,
//             price,
//             thumbnail,
//         }
    
//         products.addProduct(newProduct);
    
//         res.status(200).json({msg: 'Producto agregado!'})
//     } catch (error) {
//         console.log('Hubo un error cargando el producto', error)
//     }
// })

// app.get('/products/:id', (req, res) => {
//     const { id } = req.params;
//     const result = products.findOneProduct(id);

//     try {
//         if(!result) {
//             res.status(400).json({msg: 'Producto no encontrado'});
//             return;
//         }
    
//         res.status(200).json({product: result})
//     } catch (error) {
//        console.log(error) 
//     }
    
// })

// app.listen(8080, () => {
//     try {
//         console.log('server is running in port 3333')
//     } catch (error) {
//         console.log('Ese puerto ya esta tomado bro!')
//     }
// })



























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

