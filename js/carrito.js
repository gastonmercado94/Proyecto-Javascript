// variable con los productos de la base de datos
getProducts();

// creo array del carrito
let packageCounter = 0 
let cart = [];

function addProducts(products) {
    products.forEach( product => {
    let productCard = createProductCard(product);
    $("#productsContainer").append(productCard);
 
})
}

function createProductCard(product) {

    let productCard = document.createElement('div');
    productCard.id = product.id;
    productCard.classList = 'productCard';
    
    let nameDiv = document.createElement('div');
    nameDiv.innerHTML = product.name;
    nameDiv.classList = 'productName';
 
    let priceDiv = document.createElement('div');
    priceDiv.innerHTML = "Price: $" + product.price;

    let stockDiv = document.createElement('div');
    stockDiv.innerHTML = "Stock: " + product.stock;

    let inputQuantityDiv = document.createElement('div');
    inputQuantityDiv.classList = "inputQuantityDiv";

    let inputQuantityName = document.createElement('div');
    inputQuantityName.innerHTML = "Quantity: ";

    let inputQuantity = document.createElement('input');
    inputQuantity.classList = 'inputQuantity';
    inputQuantity.type = "number";


    let addButton = document.createElement('button');
    addButton.innerHTML = "Add product";
    addButton.classList = 'addButton';


    addButton.addEventListener('click', ()=> {
        if (inputQuantity.value<1){
                alert("ingrese cantidad valida");
        } else {
        const package = new Package(product, inputQuantity.value, packageCounter);
        packageCounter = packageCounter + 1;
        cart.push(package);
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        showCart(cart);


}});

    productCard.appendChild(nameDiv);
    productCard.appendChild(priceDiv);
    productCard.appendChild(stockDiv);
    productCard.appendChild(inputQuantityDiv);
    inputQuantityDiv.appendChild(inputQuantityName);
    inputQuantityDiv.appendChild(inputQuantity);
    productCard.appendChild(addButton);

    return productCard;
}

function showCart(){

    $("#showcart").remove();
    var showcart =  document.createElement('div');
    showcart.id = "showcart";
    $("#mainShowCart").append(showcart);

    cart.forEach( package => {

        let showcartdiv = document.createElement('div');
        showcartdiv.classList = 'showcartdiv';
        
        let cartName = document.createElement('div');
        cartName.classList = cartName;
        cartName.innerHTML = package.product.name;
        
        let cartPrice = document.createElement('div');
        cartPrice.innerHTML = "Price $" + package.product.price;

        let cartQuantity = document.createElement('div');
        cartQuantity.innerHTML = "Quantity: " + package.quantity;

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "Remove";
        removeButton.classList = "removeButton";
        removeButton.id = package.product.id ;

        removeButton.addEventListener('click', ()=> {
            removePackage(package.id);

        });

        $("#showcart").append(showcartdiv);
    
        showcartdiv.appendChild(cartName);
        showcartdiv.appendChild(cartPrice);
        showcartdiv.appendChild(cartQuantity);
        showcartdiv.appendChild(removeButton);

    })
}

class Package {
    constructor(product, quantity, id){
        this.product = product;
        this.quantity = quantity;
        this.id = id;
    }
}

function removePackage(packageId){
    cart = cart.filter(package => package.id != packageId);
    showCart();
}




