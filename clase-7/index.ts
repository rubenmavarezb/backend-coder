import express from 'express';
import fs from 'fs';



const app = express();


app.use(express.json());

const products = JSON.parse(fs.readFileSync('./clase-7/productos.txt', 'utf-8'));
let visitas = {
    items: 0,
    item: 0
}

app.get('/items', (req, res) => {
    try {
        visitas.items++
        res.status(200).send({items: products, cantidad: products.length});
    } catch (error) {
        res.status(404).send({msg:'Hubo un error :('});
        console.log(error)
    }

})

app.get('/item-random', (req, res) => {
    try {
        const prodRandom = products[Math.floor(Math.random() * 3)]
        visitas.item++
        res.status(200).send({item: prodRandom});
    } catch (error) {
        res.status(404).send({msg:'Hubo un error :('});
        console.log(error)
    }
})
app.get('/visitas', (req, res) => {
    try {
        res.status(200).send({visitas: visitas});
    } catch (error) {
        res.status(404).send({msg:'Hubo un error :('});
        console.log(error)
    }
   
})

const PORT = 8080

app.listen(PORT, () => {
    try {
        console.log(`server running in port ${PORT}`)
    } catch (error) {
        console.log(`El puerto es ${PORT}`)
    }
    
})

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
