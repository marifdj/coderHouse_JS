// cálculo de IVA 1) Ingresar precio de costo - 2) Sumar IVA - 3) Mostrar precio calculado.
//funcion para ingresar precio de costo
​

// Te convendría ponerlo por fuera el precio igual así es más fácil de que lo accedan el resto de las variables
let precio = 0;
​
function saludar(){
    precio = prompt('Hola! Puede ingresar el precio sin IVA por favor');
}
function mostrarPrecio(){
    alert('El precio ingresado es ' + precio);
}
//funcion para sumar IVA
// acá está pasando lo mismo: esta función no retorna el valor del iva, por lo cual la función
// calcular precio total no la puede acceder.
// también lo declaramos fuera de la variable
function calcularIva(precio){   
//Calculo
    alert('calculando precio con Iva');
    const iva = (parseFloat(precio) * 1.21);
    return iva;
}
//funcion para mostrar precio calculado
// también le falta el return para devolver el total del cálculo
function calcularPrecioTotal(precio, iva){
    let total = (parseFloat(precio) + iva);
    alert('El valor del producto con Iva es de ' + total);
}
​
saludar();
mostrarPrecio();
calcularIva(precio);
calcularPrecioTotal(precio, iva);