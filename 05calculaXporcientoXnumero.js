/*como hacerlo:
-funcion con parametros "porcentaje" y "numero"
-crear una variable para la operacion del porcentaje
-devolver string que responda a la pregunta del enunciado*/

let tantoPorCiento=(porcentaje, numero)=>{
    let operacion = (numero * (porcentaje/100))
    let resultado = `el resultado del ${porcentaje} % de ${numero} es ${operacion}`
    return resultado;

}
console.log(tantoPorCiento(43,897));