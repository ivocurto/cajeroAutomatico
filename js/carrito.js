let carrito = []

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto ('Iphone 13', 1000);
const producto2 = new Producto ('Cargador', 100);
const producto3 = new Producto ('Airpods', 200);

let lista = prompt('Lista de productos \n1- Iphone 13 \n2- Cargador \n3- Airpods \nPulse "X" para salir');

while (lista!='X'&&lista!='x'){
switch (lista) {
case '1':
        carrito.push(producto1);
        alert ('Haz agregado Iphone 13 al carrito');
    break;
case '2':
        carrito.push(producto2);
        alert ('Haz agregado Cargador al carrito');
    break;
case '3':
        carrito.push(producto3);
        alert ('Haz agregado Airpods al carrito');
    break;
default:
        alert('Elegiste una opción inválida');
    break;
}
lista = prompt('Lista de productos \n1- Iphone 13 \n2- Cargador \n3- Airpods \nPulse "X" para salir');
}

if(carrito[0] != null && carrito[1] == null){
    alert(`Tienes estos items en tu carrito: ${carrito[0].nombre}\nPrecio: ${carrito[0].precio}`)
}
else if(carrito[1] != null  && carrito[2] == null){
    alert(`Tienes estos items en tu carrito: ${carrito[0].nombre} ${carrito[1].nombre} \nPrecio: ${carrito[0].precio + carrito[1].precio}`)
}
else if(carrito[2] != null){
    alert(`Tienes estos items en tu carrito: ${carrito[0].nombre} ${carrito[1].nombre} ${carrito[2].nombre} \nPrecio: ${carrito[0].precio + carrito[1].precio + carrito[2].precio}`)
}
