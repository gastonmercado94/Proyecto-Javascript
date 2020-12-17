// variable con los productos de la base de datos
getProducts();

// creo array del carrito
let cart = loadCartFromLocalStorage();
showCart();

function loadCartFromLocalStorage() {
    let cart = localStorage.getItem('cart');
    if(cart != ''){
        return JSON.parse(cart);
    }
    return [];
}

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
            alert("Please enter a valid quantity");
        } else {
            addPackage(product, Number(inputQuantity.value));
            console.log(cart);
            localStorage.setItem('cart', JSON.stringify(cart));
            showCart(cart);
        }
    }
);

    productCard.appendChild(nameDiv);
    productCard.appendChild(priceDiv);
    productCard.appendChild(stockDiv);
    productCard.appendChild(inputQuantityDiv);
    inputQuantityDiv.appendChild(inputQuantityName);
    inputQuantityDiv.appendChild(inputQuantity);
    productCard.appendChild(addButton);

    return productCard;
}

function addPackage(product, quantity) {
    let newProduct = cart.some(package => package.product.id == product.id);
    console.log('newProduct: ', newProduct);
    if (newProduct){
        cart = cart.map (package =>{
            if (package.product.id == product.id){
                return new Package (product, quantity + package.quantity);
            }
            return package;
        })
    } else {
        const package = new Package(product, quantity);
        cart.push(package);
    }
}

function showCart(){

    $("#showcart").remove();
    var showcart =  document.createElement('div');
    showcart.id = "showcart";
    $("#mainShowCart").append(showcart);

    let buyContainer = document.createElement('div');
    buyContainer.id = "buyContainer";

    let totalPriceDiv = document.createElement('div');
    totalPriceDiv.id = "totalPrice";

    let buyButton = document.createElement('button');
        buyButton.innerHTML = "Buy";
        buyButton.id = "buyButton";

        buyButton.addEventListener('click', ()=> {
            buy();
        });


    let totalPrice = 0;

    cart.forEach( package => {
        totalPrice = totalPrice + package.quantity*package.product.price;

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
            removePackage(package.product.id);

        });

        $("#showcart").append(showcartdiv);
    
        showcartdiv.appendChild(cartName);
        showcartdiv.appendChild(cartPrice);
        showcartdiv.appendChild(cartQuantity);
        showcartdiv.appendChild(removeButton);
    })

    if(cart.length != 0){
        showcart.appendChild(buyContainer);
        buyContainer.appendChild(totalPriceDiv);
        totalPriceDiv.innerText = "Total Price: $" + totalPrice;
        buyContainer.appendChild(buyButton);
    }
}

class Package {
    constructor(product, quantity){
        this.product = product;
        this.quantity = quantity;
    }
}

function removePackage(productId){
    cart = cart.filter(package => package.product.id != productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
}

function buy(){
    console.log(cart);
    if(cart.length == 0){
        alert('Your cart is empty');
    } else {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
    alert('Congratulations on your purchase!');
    }
}




