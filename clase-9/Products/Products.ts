// interface Product {
//     id: string;
//     name: string;
//     price: number;
//     thumbnail: string;
// }

// class Products {
//     constructor(public products: Product[]){}

//     addProduct(prod: Product) {
//         this.products.push(prod);
//     }

//     getProducts() {
//         return this.products;
//     }

//     findOneProduct(id: string){
//         const findProduct = this.products.find(prod => prod.id === id);
//         return findProduct;
//     }
    
//     deleteProduct(id:string) {
//         const deleteProduct = this.products.filter(prod => prod.id !== id);
//         this.products = [...deleteProduct];
//     }
// }

// export default Products