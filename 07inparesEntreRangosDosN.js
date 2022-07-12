/*como hacerlo:
-funcion que reciba los dos numeros
-bucle de numero1 al numero2
-condicion, si el resto es distinto a cero, es impar
-aumentar en uno el contador
-devolver contador*/

let impares = (numero1, numero2)=>{
    let contador = 0;
    while(numero1 < numero2){
       /* if(numero1 % 2 !== 0){
            console.log(`el ${numero1} es impar`);
        }*/
        if(numero1 % 2 !== 0) contador++;
        
        numero1++;
    }
    return contador;

}
console.log("el total de numeros impares es: ",impares(1,11)) ;