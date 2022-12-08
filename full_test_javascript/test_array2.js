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

// Output: 
/*
Hola
Mundo
Maravilloso
*/

// Si en lugar de for...of uso for...in me trae las posiciones de mi array:

let myArray2 = ["Hola", "Mundo", "Maravilloso"];

function imprimirTodo2(array) {
    for (const parte in array) {
        console.log(parte);    
    }
};

imprimirTodo2(myArray2);