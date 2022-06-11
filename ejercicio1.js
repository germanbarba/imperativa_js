const prompt=require("prompt-sync")({sigint:true});

let nombre = prompt("dime tu nombre: ");
console.log(`mi nombre es ${nombre}`);