/* CLASE1_ DESAFIO_MARIA_FDJ
Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. Ejemplo:  ¡Hola, Juan!
Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.
*/

const nombre = (prompt("Cómo se llama?"));
alert("Su nombre es " +nombre);
console.log("Hola!"+" "+nombre);

var num1=5;
const numeroIngresado = parseInt(prompt("Por favor, ingrese un número!"));
var suma = numeroIngresado + num1;
alert("El número que esta en el código es " +num1);
alert("La suma de los dos números es " + suma);
console.log(suma);

const camada = parseInt(prompt("Podria ingresar su numero de camada por favor?"));
console.log(camada);
const lenguaje= (prompt("Podria ingresar que tipo de lenguaje esta aprendiendo?"));
alert("Su camada es "+camada+" Y su lenguaje es "+lenguaje);


