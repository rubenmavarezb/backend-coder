import Handlebars from 'express-handlebars';
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

interface Product {
    id: number;
    producto: string;
    precio: number;
}

const products: Product[] = [
    {
        id: 1,
        producto: 'televisor',
        precio: 1000
    },
    {
        id: 2,
        producto: 'telefono',
        precio: 3000
    },
    {
        id: 3,
        producto: 'heladera',
        precio: 5000
    }
]

app.engine(
    'hbs',
    Handlebars({
        extname:'.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    })
)

app.set("view engine", "hbs");
app.set("views", "./views");

app.get('/', (req, res) => {
    console.log(__dirname)
    res.render('main', {products: products, listExists: true})
})

app.listen(8080, () => {
    console.log('Servidor corriendo en el puerto 8080');
})