/*
Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
*/

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var auto1 = new auto("Ford", "Ka", 2015)
auto1

function imprimirTodo(objeto) {
    for (const parte in objeto) {
        console.log(objeto[parte]);    
    }
};

imprimirTodo(auto1);