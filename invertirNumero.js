/*como hacerlo:
-funcion que reciba un numero
-convertir numero en string
-crear un array por cada letra
-darle vuelta
-unir el array en un string
-convertir el string en un entero*/

let invertirNumero = (numero)=>{
    let invertido = parseInt(numero.toString().split('').reverse().join('')) * Math.sign(numero);
   return invertido;
}
console.log("el numero invertido es: ",invertirNumero(94));