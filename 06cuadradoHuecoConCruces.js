/*como hacerlo:
-funcion para crear el lado de arriba y abajo del cuadrado
-funcion que haga los lados y el hueco del cuadrado
-bucle de 0 al tamaño del lado menos 2 para equilibrar
con el lasdo de arriba y abajo
-bucle para pintar espacios menos 2 para equilibrar
con cruces de izquierda y derecha
-ir contando en una variable cada linea del cuadrado
-mostrar el cuadrado en la funcion principal*/

let lado = (numero)=>{
    let lado = "";
    for (let i = 0; i < numero; i++) {
        lado += "+";
        
    }
    return lado;
}
let cuadrado = (numero)=>{
    let dibujo = lado(numero) + "\n";

    let contenido = "";
    for (let i =2; i < numero; i++) {
        contenido = "+";
        for (let x = 0; x < (numero-2); x++) {
            contenido += " ";
            
        }
        contenido += "+";
        dibujo += contenido + "\n";
        
    }

    dibujo += lado(numero);

    return dibujo;
}
console.log(cuadrado(30))