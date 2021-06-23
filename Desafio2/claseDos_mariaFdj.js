/* CLASE2_ DESAFIO_MARIA_FDJ
Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
Pedir un número por prompt y evaluar si está entre 10 y 50. 
En caso positivo mostrar un alert.
*/

alert("Bienvenidx! Este es el desafío de la clase 2! :D");

const numeroSolicitado = parseInt(prompt("Por favor ingrese un número"));

if(numeroSolicitado>1000){
    alert("El número es mayor a 1000")
    console.log("El número es mayor a 1000");
}
else{
    alert("En este caso el número no es mayor a 1000")
    console.log("En este caso el número no es mayor a 1000")
    }

const ingreseTexto= prompt("Ahora por favor ingrese un texto:");
    if(ingreseTexto==="Hola"){
        alert("Hola!!!! Qué tal?")
    }
    else{
        alert("El texto que ingreso no equivale a Hola :(")
    }

const numeroSolicitado2= parseInt(prompt("Por favor, ingrese un número nuevamente!"));
    if(numeroSolicitado2>=10 && numeroSolicitado2<=50){
        alert("El número ingresado se encuentra dentro del rango y es " + numeroSolicitado2);
    }
    else{
        alert("El valor que ingreso no se encuentra dentro del rango aceptable.")
    }