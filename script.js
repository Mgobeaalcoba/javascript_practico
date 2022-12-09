// Manipulación del DOM desde JavaScript

// ¿Como leemos desde el JavaScript lo que sucede en nuestro HTML?

// Todas las funciones que comienzan con get, y con query, son para manipular el dom, es decir el archivo HTML y la interacción con el usuario. 

/*
document.getElementById()
document.getElementsByClassName()
document.getElementsByName()
document.getElementsByTagName()
document.getElementsByTagNameNS()
document.querySelector()
document.querySelectorAll()
*/

// La forma profesional de trabajar es crear variables en JS que representen a cada uno de nuestros selectores en HTML.

// Si desde el HTML ya linkee el JS a traves de script src="./" ya están conectados los archivos. Ahora solo debo asignar los elementos de mi HTML a variables de JavaScript. Por ejemplo de la siguiente manera: 

const h1 = document.querySelector('h1'); // Parecido a h1 {} en CSS. Voy a modificar las acciones para el primer h1 con el que se encuentra. Para modificar a todos los h1 debo usar querySelectorAll()
const p = document.querySelectorAll('p'); // Selecciona al primer parrafo con el que se encuentra. Si quiero seleccionar a todos los parrafos debo usar querySelectorAll()
const parrafito = document.querySelector('.parrafito'); // El primer elemento con la clase parrafito. 
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const title = document.querySelector('title');
const h2 = document.querySelector('h2');

// Como vemos es la misma sintaxis que CSS lo que se usa dentro del querySelector. 
/*
h1 { color: red }
.parrafito { ... }
#pid { ... }
*/

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
    title
});

console.log(h1)

// h1 es un objeto. Y como tal puedo observar mediante ."" las caracteristicas de dicho objeto. Así como escuchar los eventos que ocurren sobre dicho objeto. 

console.log(h1.autofocus)

console.log(input.value)

// Desafio: modificar el h1 (titulo impreso) del HTML desde nuestro JS:

// h1.innerText = "Hola esto es una prueba"
h1.innerHTML = "Hola esto es una prueba <br> Patito"

// El JS está pisando el contenido pre definido en el HTML
// Dentro del innerHTML puedo tmb poner etiquetas de HTML nuevas que irían en este caso dentro del h1
// Con innerText puedo modificar el contenido del h1 pero NO puedo agregar etiquetas. 

// Desafio: darle una clase a nuestro elemento h1

h1.className = 'pruebita'

// Otra forma de hacer lo mismo es con .setAttribute()

h1.setAttribute('class', 'rojo')

// Como leer desde JS un atributo de un elemento HTML: 

console.log(h1.getAttribute('class')) // Me muestra que es 'pruebita' o 'rojo' porque lo setee arriba

// Tmb podría agregarle clases a un elemento con .classList.add()

h1.classList.add('verde')

console.log(h1.getAttribute('class')) 

// Tmb puedo eliminar una de sus clases: 

h1.classList.remove('rojo')

console.log(h1.getAttribute('class')) // Queda solo clase 'verde'

// Desafio: modificar el valor por defecto del input y agregar un placeholder

input.value = null
input.placeholder = "Escribe lo que quieras aquí: "

// Desafio: como creamos un elemento HTML nuevo desde cero y desde JS: 

console.log(document.createElement('img'))

// Ubiquemos ahora este span dentro de algún elemento existente:

const img = document.createElement('img')
img.setAttribute('src','https://images.pexels.com/photos/12900890/pexels-photo-12900890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

console.log(img) // Ya la imagen sale impresa en consola con su link

h2.append(img) // append introduce dentro de mi h2 la foto seleccionada y guardada como un elemento html img desde JS. 

// Lo mismo se podría haber echo con h2.appendChild(img)

// Lo realmente útil es manipular el DOM cuando los usuarios hagan algo...