const http = require('http');

const info = () => {
    return {
        id: Math.floor(Math.random() * 10),
        producto: `Producto ${Math.floor(Math.random() * 10)}`,
        price: `${(Math.random() * 9999.99).toFixed(2)}$`,
        foto: `Foto ${Math.floor(Math.random() * 10)}`
    }
}


const server = http.createServer((req, res) => {
    res.end(JSON.stringify(info()));
})

const PORT = 3333

server.listen(PORT, () => {
    console.log(`server running in port ${PORT}`)
})
