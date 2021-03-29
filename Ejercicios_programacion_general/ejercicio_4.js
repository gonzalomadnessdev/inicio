//Ejercicio 4

/*Implementa una función que reciba una oración y devuelva cada letra inicial de una palabra en mayúscula.


Entrada: 'laboratoria mexico'
Salida: 'Laboratoria Mexico'

*/

let entrada = 'laboratoria mexico';

let salida =  entrada.replace(/\b\w/g, x => x.toUpperCase()); 

console.log(salida);
