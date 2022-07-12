/*como hacerlo:
-funcion con parametros, dos parametros "frase" y "busqueda"
-poner strring en minuscula y limpiarlo
-comprobar si la busqueda esta incluida en la frase
-crear un array de palabras de la frase
-mapear esas palabras y hacer un contador de cada una
-devolver el contador de la busqueda*/

let coincidencias=(frase,busqueda)=>{
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, '');
    let resultado=0;

    if (texto_limpio.includes(busqueda)) {
        let palabras = texto_limpio.split(" ");
        let mapa = {};

        for (let palabra of palabras) {
            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
            
        }
        //console.log(palabras);
        //console.log(mapa);
        resultado = mapa[busqueda]
        
    }else{
        resultado=0;
    }
    return resultado;

}
console.log("numero de coincidencias en la frase: ",
    coincidencias('hola, que Tal german, Soy GERMAN BARBOSA. german, german', 'german'));
