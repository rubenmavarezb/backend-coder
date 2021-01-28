import fs from 'fs';

interface Product {
    id: number
    price: number,
    thumbnail: string
}

class File {
    constructor(public filename: string) {}

    read(){
        try {
            const readFile = fs.readFileSync(`./clase-7/${this.filename}`, 'utf-8');
            return readFile ? readFile : '[]'; 
        } catch (error) {
            console.log(error)
        }
    }

    writeAndSave(arr: Product){
        try {
            fs.writeFileSync(`./clase-7/${this.filename}`, JSON.stringify([arr]));
        } catch (error) {
            console.log('El archivo no se pudo crear', error)
        } 
    }

    append(arr: any, product: Product){
        try {
            let arrParse = JSON.parse(arr);
            product.id = arrParse.length + 1
            arrParse = [
                ...arrParse,
                product
            ]
            fs.writeFileSync(`./clase-7/${this.filename}`, JSON.stringify(arrParse));
        } catch (error) {
            console.log('El archivo no existe!', error)
        } 
    }
    delete(){
        try {
            fs.unlinkSync(`./clase-6/${this.filename}`);
            console.log('Archivo eliminado!!')
        } catch (error) {
            console.log('El archivo no existe!', error)
        } 
    }
}

export default File