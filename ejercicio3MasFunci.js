const prompt=require("prompt-sync")({sigint:true});
//anterior: recibe un numero comoparametro y devuelve ese numero menos uno.
//tripe: recibe un numero como parametro y devuelve el triple de ese numero
//anerior del triple: recibe un numero como parametro y utilizando las dos funciones
//anteriores, tendra que devolver el numero recibido multiplicado por tres(3) y el
//resultado restarle uno(1)
let anterior = (numero) => numero - 1;
let triple = (numero) => numero * 3;
let anteriorDelTriple = (numero) => {
    return anterior(triple(numero))
}
//console.log(anteriorDelTriple(10));

let x = prompt("ingresa numero: ")
let y = anteriorDelTriple(x)
console.log(y)

//calcular horas extras
let calcularSalario = (horasTrabajadas) => {
    let salarioHorasComunes = 5 * 500;
    let salarioHorasExtras = (horasTrabajadas - 5)*800;
    return salarioHorasComunes + salarioHorasExtras
}
console.log(calcularSalario(7))