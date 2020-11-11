class Product {
    constructor(id, name, price, stock){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
function getProducts(){

    let productAsObjects = JSON.parse(data);
    let products = [];

    for(element of productAsObjects){
        let product = new Product(element.id, element.name, element.price, element.stock);
        products.push(product);
    }

    return products;
}



const data = '[{"id": 1,"name": "London Guide","price": 11,"stock": 27},{"id": 2,"name": "Tokyo guide","price": 15,"stock": 74}, {"id": 3,"name": "Paris guide","price": 11,"stock": 9},{"id": 4,"name": "Moscow guide","price": 13,"stock": 29},{"id": 5,"name": "Thailand guide","price": 10,"stock": 4}, {"id": 6,"name": "Patagonia guide","price": 21,"stock": 43}, {"id": 7,"name": "Iceland guide","price": 30,"stock": 50}, {"id": 8,"name": "Peru guide","price": 25,"stock": 96}]'