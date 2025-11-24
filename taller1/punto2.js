// 2. Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase `Hola X, grandioso! Tienes X años`. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: `Hola Juan, grandioso! Tienes 20 años`

const prompt = require("prompt-sync")();

const nombre = prompt('Ingrese su nombre');
const añoNacimiento = Number(prompt('ingrese su año de nacimiento'));


const añoActual = Number(2025);
const restarEdad = añoNacimiento - añoActual;

console.log('Hola' + nombre +'tu edad es' + restarEdad);
