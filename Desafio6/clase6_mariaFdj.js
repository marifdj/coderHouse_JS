//Arrays!!
/*
Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
Incorporar al menos un Array en tu proyecto.
Utilizar algunos de los métodos o propiedades vistos en la clase.
 */

//Array de bebidas
class Bebida {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];

productos.push(new Bebida("Honey", 250));
productos.push(new Bebida("IPA", 340));
productos.push(new Bebida("Negra", 350));


for (const producto of productos) {
    producto.sumaIva();
    console.log(producto);
}




