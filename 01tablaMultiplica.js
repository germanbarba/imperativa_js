/*como hacerlo:
-funcion con parametro "numero"
-variabler con texto de encabezado
-bucle del 1 al 10
-concatenar a la variable strin con multiplicacion y resultadp
*/

let tablaMultiplica=(numero)=>{
    let resultado=`# tabla del ${numero} #\n`;

    for (let i = 1; i <= 10; i++) {
        let multiplicacion=(i*numero);

        resultado += `${i} X ${numero} = ${multiplicacion}\n`
        
    }
    return resultado;

}
console.log(tablaMultiplica(7))