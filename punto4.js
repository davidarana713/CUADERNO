// 4. Escribe un programa que le pida al usuario ingresar un número.
//    - Si el número es múltiplo de 3 debe imprimir en la consola `bing`.
//    - Si el número es múltiplo de 5 debe imprimir en la consola `bong`.
//    - Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola `bingbong`.
//    - Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

// VALORES DE ENTRADA
// 1. NUMERO 

// PROCESO 
// 1.SABER SI ES MULTIPLO DE 5
// 2.SABER SI ES MULTIPLO DE 3
// 3.SABER SI ES MULTIPLO DE 5 Y DE 3

// VALORES DE SALIDA

// 1.BING SI ES MULTIPLO DE 3
// 2.BONG SI ES MULTIPLO DE 5
// 3.BINGBONG SI ES MULTIPLO DE 3 Y DE 5
//4.imprimir el numero ingresado si no es multiplo de 5 ni de 3
// _______________________________________________________________________

// const prompt = require('prompt-sync')();
// const numero = Number(prompt('ingrese un numero que sea multiplo de 3 o de 5 '));

// if(numero % 3 == 0 && numero % 5 == 0){
//     console.log('bingbong')
// }
// else if(numero % 3 == 0){
//     console.log('bong')
// }
// else if(numero % 5 == 0){
//     console.log('bing')
// }
// else {
//     console.log(numero)
// };
//__________________________________________________________________________________-

const prompt = require('prompt-sync')();
const numero = Number(prompt('ingrese un numero que sea multiplo de 3 o de 5 '));
let mensaje = '';

if(numero % 3 == 0){
    mensaje = 'bing';
}
if(numero % 5 == 0){
    mensaje = mensaje + 'bong';
}
if(mensaje){
    console.log(mensaje);
}
else{
    console.log(numero);
};
