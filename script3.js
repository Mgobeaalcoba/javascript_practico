// Hay otra forma de escuchar eventos de nuestro HTML dejando el mismo mas limpio. Se trata de los .addEventListen()

const h1 = document.querySelector('h1'); 
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const p = document.getElementById('result');

// Vamos a agregar el mismo onclick que teniamos en el HTML pero desde JS directamente: 

// El evento que sumamos como input viene del envío del formulario que contiene el boton. Con el no se recarga la pagina
function sumarInputValues(event) {
    console.log({event})
    event.preventDefault() // Acá es dnd le decimos que no recargue la pagina con la nueva URL del envío del form. Por eso me traigo el evento a la función. Para evitar esto. 
    const sumaInputs=input1.value+input2.value;
    p.innerText="Resultado: "+ sumaInputs;
}

btn.addEventListener('click', sumarInputValues) // El nombre de la función como argumento de addEventListener no va con parentesis

// Las funciones pueden ir abajo ya que según el hoisting en JS las funciones se corren primero junto con las variables mas allá de donde las hayamos ubicado. 


