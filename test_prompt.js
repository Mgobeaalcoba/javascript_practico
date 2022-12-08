/*
 Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.
*/

let suma = prompt("Cuanto es 2 + 2: ")

while (suma != 4) {
    suma = prompt("Cuanto es 2 + 2: ")
}

console.log("Felicitaciones!!!")
