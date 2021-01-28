"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// //Save and modify writeFileSync() and writeFile()
// fs.writeFileSync('./clase-6/text.txt', "Hola Ruben!");
// fs.writeFile('./clase-6/text.txt', "Hola Ruben!", error => {
//     if(error) {
//         return error;
//     }
//      console.log('Archivo creado!')
// })
//Lo mismo con todos los demas metodos
// //Read readFileSync()
// let fsread = fs.readFileSync('./clase-6/text.txt', 'utf-8')
// console.log(fsread)
// //Add appendFileSync()
// fs.appendFileSync('./clase-6/text.txt', '\n este texto esta editado!');
// fsread = fs.readFileSync('./clase-6/text.txt', 'utf-8');
// console.log(fsread);
// //Delete unlinkSync()
// console.log('Adios mundo cruel me van a eliminar');
// fs.unlinkSync('./clase-6/text.txt')
// const createFile = (filename: string) => {
//     const date = new Date();
//     try {
//         fs.writeFileSync(`./clase-6/${filename}.txt`, date.toString());
//     } catch (error) {
//         console.log("Hubo un error, no existe el archivo", error)
//     }
// }
// createFile('fyh');
// const fsread = fs.readFileSync('./clase-6/fyh.txt', 'utf-8');
// console.log(fsread)
// fs.mkdir('./clase-6/dir', error => {
//     if(error){
//         return error;
//     }
//     console.log('Directorio creado :)');
// })
// fs.readdir('./clase-6/dir', (error, data) => {
//     if(error) {
//         return error;
//     }
//     console.log(data);
// })
// fs.readFile('./package.json', 'utf-8', (error, data) => {
//     if(error) {
//         return error;
//     }
//     const info = {
//         contentStr: data,
//         contentJson: JSON.parse(data),
//         contentSize: getStat('./package.json').size,
//     }
//     console.log(info)
// })
// const getStat = (path: string) => fs.statSync(path);
// fs.promises.readFile('./clase-6/text2.txt', 'utf-8')
//     .then( data => {
//         console.log(data)
//     })
//     .catch( error => {
//         console.log(error)
//     })
// const readFileAsync = async () => {
//     try {
//         const data = await fs.promises.readFile('./clase-6/text2.txt', 'utf-8');
//         console.log(data) 
//     } catch (error) {
//         console.log('Ese archivo no existe', error)
//     }
// }
// readFileAsync()
