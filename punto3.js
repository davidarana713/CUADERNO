// 3. Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.

//     Si es múltiplo debe imprimir `Si, el número x es múltiplo 5`, de lo contrario debe imprimir `No, el número x no es múltiplo de 5`.

//*NOTA: Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.*

const prompt = require("prompt-sync")();

const numero = Number(prompt("INGRESE UN NUMERO QUE SEA MULTIPLO DE 5"));

const operacion = numero % 5 == 0;

if(operacion){
    console.log("EL NUMERO" + numero + "ES MULTIPLO DE 5");
};

else (
    console.log("EL NUMERO " + numero + "NO ES MULTIPLO DE 5" );
);
