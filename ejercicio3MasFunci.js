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

// if else
let probarIf = (numero) => {
    if (numero > 5){
        console.log("numero es mayor que 5");
    }else if (numero === 5){
        console.log("numero es igual a 5");
    }else {
        console.log("entro en el ELSE");
    }
}
//probarIf(20)

let numero = prompt("ingrese un numero para comprobar: ")
probarIf(parseInt(numero))

// if ternario blanco o negro
let clima = "lluvioso"

let mamaSalgoConParaguas = clima ==="lluvioso" ? "si llevalo" : "no hace falta"
console.log(mamaSalgoConParaguas);

//swithc /cuando tenemos varias opciones
let hacerSonidoAnimal = (animal)=> {
    switch(animal){
        case "gato":
            return "miauu";
        case "perro":
            return "guuauuug";
        case "gallo":
            return "kikiriki";
        default:
            return "dilculpa no te distingo"
    }
}
console.log(hacerSonidoAnimal("gallo"));


//en un parque de diversiones nos piden un programa para verificar si los pasajeros de
//la montaña rusa pueden subir (debe medir mas o igual a 1.40 y menos de 2 metros.
//si mide menos de 1.40 hasta 1.20 devera venir acompañado
//si mide menos de 1.20, no podra subir ni acompañado)
let puedeSubir = ( altura, vieneAcompañada)=>{
    if(altura >= 1.4 && altura < 2){
        return "si puede subir....";
    }else if(altura < 1.40 && altura >= 1.20 && vieneAcompañada === true){
        return "si puede subir"
    }else{
        return "perdon no puede subir"
    }
}
console.log(puedeSubir(1.90, "false"))