/*
Consigna: 
Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:
Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
Armar la estructura HTML del proyecto.
Incorporar al menos un prompt para pedir un dato y luego mostrarlo mediante alert realizando alguna operación.
Utilizar funciones para realizar esas operaciones.

*/
//Calcular nota final de alumnos ingresados

function saludarYpedirNombre(){
    let nombre = prompt('Hola! Puede ingresar su nombre por favor');
    alert('Hola alumno ' + nombre);
    alert('A continuacion se le pediran las notas de sus examenes');
}

function pedirValores(){
let valor1 = prompt("Ingrese el primer valor");
let valor2 = prompt("Ingrese el segundo valor");
let valor3 = prompt("Ingrese el tercer valor");
let promedio = ((parseFloat(valor1)+parseFloat(valor2)+parseFloat(valor3))/3);
alert("Su promedio es: "+promedio);
}

saludarYpedirNombre();
pedirValores();


