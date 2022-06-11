const prompt=require("prompt-sync")({sigint:true});
//funciones

//declaradas
function saludar(){
    console.log("hola");
}
saludar()

//expresada
let restar=function(a,b){
    let resul=a-b;
    console.log(resul);
}
console.log=restar(20,10)

//expresada tipo flecha
let sumar=(a,b)=>{
    let resul = a+b;
    //console.log(resul);
}
console.log=sumar(50,80)

//expresada resumida
let suma=(a,b)=>a+b
let resulta=suma(20,30)
//console.log(resulta)


//utiliza prompt
let suma2=(a,b)=>{
    //parsear
    let num=parseInt(a);
    let num2=parseInt(b);
    return num+num2;
}
let primero=prompt("ingresa el primer numero: ");
let segundo=prompt("ingresa el segundo numero: ");
console.log(suma2(primero,segundo));