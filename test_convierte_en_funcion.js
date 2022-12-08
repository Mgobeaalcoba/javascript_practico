/* 
Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
*/
/*
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name  + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
*/
// Versión función: 

const name = "Juan David";
const lastname = "Castro Gallego";
const nickname = "juandc";

function presentarse(nombre, apellido, apodo) {
    let nombreCompleto = nombre + " " + apellido;
    console.log(`Mi nombre es ${nombreCompleto}, pero prefiero que me digas ${apodo}.`);
}

presentarse(name, lastname, nickname);



