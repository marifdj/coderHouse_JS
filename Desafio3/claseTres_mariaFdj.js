/*CLASE3_ DESAFIO_MARIA_FDJ
Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado
Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.
*/

const numeroSolicitado= parseInt(prompt('Ingrese un número por favor!'));
alert('Su número ingresado es: '+ numeroSolicitado);
    for(let i = 1; i <= 10; i++){
        let resultado = numeroSolicitado+i;
        alert(resultado);
        console.log(resultado);
}

let mensaje= ' su texto fue ingresado';
let salir= 'salir';
let textoSolicitado= prompt('Ingrese un texto por favor');
alert('Si quiere que el programa termine, escriba salir');
while(textoSolicitado != salir){
    alert(textoSolicitado + mensaje);
    textoSolicitado= prompt('Ingrese otro texto');    
} 

let mensaje = " su texto fue ingresado";
let salir = "salir"
let textoSolicitado = prompt("Ingrese una palabra")
while(textoSolicitado != salir){
    alert(textoSolicitado + mensaje)
    textoSolicitado = prompt("Nueva palabra")
}

let indice =0;
do{
    numero = parseInt(prompt("Ingresa un valor"));
    alert('Hola!');
}while(indice !== numero);