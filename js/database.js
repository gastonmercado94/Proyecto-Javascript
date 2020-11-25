class Product {
    constructor(id, name, price, stock){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
function getProducts(){


    $.ajax({
        url: "js/data.json",
        dataType: "json",
        type:"get",
        success: function(response) {
            console.log("asd; " , response);
            let products = [];
            for(element of response){
                let product = new Product(element.id, element.name, element.price, element.stock);
                products.push(product);
            }
            addProducts(products);
        }
       });

}

