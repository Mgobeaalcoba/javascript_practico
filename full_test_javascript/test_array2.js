/*
Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
*/

let myArray = ["Hola", "Mundo", "Maravilloso"];

function imprimirTodo(array) {
    for (const parte of array) {
        console.log(parte);    
    }
};

imprimirTodo(myArray);