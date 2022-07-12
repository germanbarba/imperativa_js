/*como hacerlo:
-funcion con parametro "cadena"
-crear una variable para guardar la cadena invertida
-bucle que recorra el string y guarde los caracteres en la variable*/

let invertir = (texto)=>{
    let invertido = "";

    for(let letra of texto){
        invertido = letra + invertido;
    }

    return invertido;

}
console.log("texto invertido: ",invertir("german"))

let invertido = (texto)=>{
    return texto.split("").reverse().join('');
}
console.log("texto invertido con Split: ", invertido("wilson"))