/*como hacerlo:
-funcion con parametro "tecto"
-separar el texto en un array de letras
-darle la vuelta
-unir el array de letras en un string y comparar con el parametro
*/

let palindromo=(texto)=>{
    let invertido = texto.split('').reverse().join('');

    return invertido === texto;

}
console.log("¿es un palindromo?" + palindromo('ana'));