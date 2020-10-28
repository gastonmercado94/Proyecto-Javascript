function CarritoDeCompras(){

    // En este array vacio despues se van a agregar las compras con el push
    this.compra = [];

    // Metodo con push para agregar la copra
    this.agregarCompra = function (compra){this.compra.push(compra)}

    // Metodo para calcular el precio total de la compra del carrito
    this.calcularTotal = function (){
        var resultado = 0;
        for (i=0 ; i<this.compra.length; i++) {
            resultado = resultado + this.compra[i].precioTotal ;
        }
        return resultado;
    }
}

// funcion para crear la compra

function Compra(producto, cantidad){
    this.producto = producto;
    this.cantidad = cantidad;
    this.precioTotal = producto.precio*cantidad;

    this.agregarAlCarrito = function(carritoDeCompras){carritoDeCompras.agregarCompra(this)}
} 

// funcion para crear cada guia

function Guia(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
} 

var guiaLondon = new Guia ("londres", 50);
console.log(guiaLondon);
var guiaTokyo = new Guia ("tokyo", 50);
console.log(guiaTokyo);
var guiaParis = new Guia ("Paris", 50);
console.log(guiaParis);
var guiaThailand = new Guia ("Thailand", 50);
console.log(guiaThailand);
var guiaPatagonia = new Guia ("Patagonia", 50);
console.log(guiaPatagonia);
var guiaIceland = new Guia ("Iceland", 50);
console.log(guiaIceland);

var compra1 = new Compra(guiaLondon, 2);
var compra2 = new Compra (guiaIceland, 5);

var carritoDeCompras = new CarritoDeCompras();
carritoDeCompras.agregarCompra(compra1);
carritoDeCompras.agregarCompra(compra2);

console.log("Carrito de compras: ", carritoDeCompras);
console.log("El precio total es: ", carritoDeCompras.calcularTotal());
