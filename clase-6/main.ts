import File from './File';

const file1 = new File('productos.txt');

file1.writeAndSave({"id": 1, "price":200,"thumbnail":"imagen.jpg"})

const producto1 = {
    id: 0,
    price: 200,
    thumbnail: 'imagen.jpg'
}

file1.append(file1.read(), producto1);


const producto2 = {
    id:0,
    price: 300,
    thumbnail: 'imagen2.jpg'
}

file1.append(file1.read(), producto2);




