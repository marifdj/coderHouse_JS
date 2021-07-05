
/*A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
Crear al menos un objeto para controlar el funcionamiento de tu simulador.
Incorporarle sus propiedades y su constructor.
Invocar a ese objeto en algún momento donde el usuario realice alguna acción.
Utilizar sus mètodos.
*/

class vehiculo{
    constructor(marca, modelo, color, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anio= anio;
    }
//metodo que invoca al objeto
    mostrarVehiculo(){
        console.log("El auto es un " +(this.marca) + "\nEl modelo es " + (this.modelo) + "\nSu color es " + (this.color) + "\nSu año es " +(this.anio));
    }
    
}

//creacion de objectos y llamada al metodo mostrarVehiculo

let auto1 = new vehiculo('Ferrari', '1998', 'rojo', 1998);
auto1.mostrarVehiculo();

let auto2 = new vehiculo('Peugeot', '206', 'negro', 2010);
auto2.mostrarVehiculo();



