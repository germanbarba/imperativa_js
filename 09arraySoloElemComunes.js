/*como hacerlo:
-funcion que reciba dos arrMayores
-filtrar array y evaluando una condicion
-devolver un array nuevo*/

let elementosComunes = (array1, array2)=>{
    const filtrado = array1.filter(elemento => array2.includes(elemento));
    //console.log(filtrado);
    return filtrado;
}

console.log("los elementos comunes a los dos array son; ",elementosComunes([4,5,6,7],[7,8,9,7,5]));
console.log("los elementos comunes a los dos array son; ",elementosComunes(['german','wilson','jorge','luis'],['luis','jorge','carlos','santi','tito']));