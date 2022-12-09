const h1 = document.querySelector('h1'); 
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const p = document.getElementById('result');

// Una de las formas de escuchar eventos en HTML es: 

// Detallo las acciones que quiero escuchar en el HTML como atributos de los elementos y luego elaboro en el JS las funciones que van a accionar esas acciones. Finalmente llamo a esas funciones en el HTML

function btnOnClick() {
    p.innerHTML = `${input1.value} ${input2.value}`
} // Concatena los valores ingresados en el input1 y el input2

// Spoiler alert: Hay otra forma de escuchar eventos de nuestro HTML dejando el mismo mas limpio. Se trata de los .addEventListen()
