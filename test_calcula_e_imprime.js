/* 
 Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)
*/

let nombre = "Mariano"
let apellido = "Gobea Alcoba"
let dineroAhorrado = 1000
let deudas = 200

console.log(concat(nombre,apellido))

function concat(nombre, apellido) {
    const nombreCompleto = nombre + " " + apellido
    return nombreCompleto
}

function dinero(dineroAhorrado,deudas) {
    const dineroReal = dineroAhorrado - deudas
    return dineroReal
}