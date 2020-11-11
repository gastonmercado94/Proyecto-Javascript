// variable con los productos de la abse de datos
let products = getProducts();
console.log(products);

// creo array del carrito

const cart = [];


// llamo a mi div contenedor del html
const productsContainer = document.getElementById('productsContainer')
const showcart = document.getElementById('showcart');


products.forEach( product => {
    let productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
})

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


let addButton = document.createElement('button');
addButton.innerHTML = "Add product";
addButton.classList = 'addButton';

addButton.addEventListener('click', ()=> {
    cart.push(product);
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));


    let showcartdiv = document.createElement('div');
    showcartdiv.classList = 'showcartdiv';
    
    let cartName = document.createElement('div');
    cartName.innerHTML = product.name;
    
    let cartPrice = document.createElement('div');
    cartPrice.innerHTML = "Price $" + product.price;

    let cartQuantity = document.createElement('div');
    cartQuantity.innerHTML = "Quantity:";

    showcart.appendChild(showcartdiv);
    showcartdiv.appendChild(cartName);
    showcartdiv.appendChild(cartPrice);
    showcartdiv.appendChild(cartQuantity);


})

productCard.appendChild(nameDiv);
productCard.appendChild(priceDiv);
productCard.appendChild(stockDiv);
productCard.appendChild(addButton);

    return productCard;
}
