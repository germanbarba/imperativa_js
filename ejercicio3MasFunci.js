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

//una funcion que reciba 3 numeros y devuelva el promedio
const calculaPromedio=(num1,num2,num3)=>(num1+num2+num3)/3;
let promedioFinal=calculaPromedio(5,6,10);
console.log(promedioFinal)

//algoritmo para convertir una cantidad de pesos a dolares. Recibe
//los pesos y recibe el valor del cambio
let pesos=prompt("ingrese la cantidad de pesos a convertir: ");
let dolar=prompt("ingrese el valor del dolar: ");

const conversorMoneda=(cantidadPesos,valorDolar)=>cantidadPesos/valorDolar;
console.log(`sus dolares en pesos equivalen a: ${conversorMoneda (+pesos, +dolar)}`)


//calcular promedio alumno mayor o igual a 7 aprobado
const calculaPromedio2=(nota1,nota2,nota3)=>{
    let suma=nota1+nota2+nota3;
    let promedio=suma/3

    if(promedio>=7){
        return "promocionado"
    }else if(promedio){
        return "desaprobado"
    }
}
let promedioNotas=calculaPromedio2(5,2,2);
console.log(promedioNotas);

//tablas de multiplicar
const mostraTablas=(numero)=>{
    for(let i=1; i<=10; i++){
        console.log(`${numero} * ${i} = ${numero*i}`)
        //console.log(numero + "*" +i+"=" + (numero * i));
    }
}
mostraTablas(8)
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> 875d09ff24d5dba6e53f20a81ada3ccc1c60c59d
//apartir del siguiemte array de edades nos solicitan realizar lo siguiente:
//a. obtner en un arraay las edades menores de 18
//b.mayores o igual a 18
//c. igual a 18
//const edades = [11,12,15,18,25,22,10,33,18,5];

let arrDeEdadesMenores = [];
let arrMayores = [];
let arrIguales = [];

let cradorArr = (arr)=>{
    for (let i=0; i<arr.length; i++){
        if(arr[i]<18){
            arrDeEdadesMenores.push(arr[i]);
        }else if(arr[i]===18){
            arrIguales.push(arr[i]);
        }else{
            arrMayores.push(arr[i]);
        }
    }
}
console.log(cradorArr(edades));
console.log(arrMayores);
console.log(arrIguales);
console.log(arrDeEdadesMenores);
console.log("---------------------")

<<<<<<< HEAD
//const edades = [11,12,15,18,25,22,10,33,18,5];
let min = edades[0]; //El minimo por el momento es el primer elemento de nuestro array

for(i=0;i<edades.length;i++){  //empezamos desde la 0 posicion  
    if(edades[i]<min){   //preguntamos si el proximo elemento de nuestro array (posicion i) es menor que el min
       (min=edades[i])   // si se cumple la condicion reemplazamos el valor de min por el valor que se encuentra en nuestro array en la posicion i
    }
}
console.log(min); //una vez finalizado el recorrido y encontrado el menor valor lo mostramos por pantalla

//ahora con una funcion
const edades = [11,12,15,18,25,22,10,33,18,5,1];
//ahora co una funcion
const encontrarMenor=(edades)=>{
    let menor=edades[0];
    for(let i=0; i<edades.length; i++){
        if(edades[i]<menor){
            (menor=edades[i]);
        }
    }
    return [menor]
}
console.log(encontrarMenor(edades))
=======
const edades = [11,12,15,18,25,22,10,33,18,5];
var min = edades[0]; //El minimo por el momento es el primer elemento de nuestro array

for(i=0;i<edades.length;i++){  //empezamos desde la 0 posicion  
    if(edades[i]<min){   //preguntamos si el proximo elemento de nuestro array (posicion i) es menor que el min
       (min=edades[i])   // si se cumple la condicion reemplazamos el valor de min por el valor que se encuentra en nuestro array en la posicion i 
    }
}
console.log(min); //una vez finalizado el recorrido y encontrado el menor valor lo mostramos por pantalla
>>>>>>> 3c670430a841e3e3c7006116bd85f888cbd66a68
>>>>>>> 875d09ff24d5dba6e53f20a81ada3ccc1c60c59d
