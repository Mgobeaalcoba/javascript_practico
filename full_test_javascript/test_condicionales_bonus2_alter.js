const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertDuo: "Tu y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

tiposDeSuscripciones.free

// Es lo mismo que: 

tiposDeSuscripciones["free"]

const ejemploSuscripción = "free"

tiposDeSuscripciones[ejemploSuscripción]

// Vayamos a la solución

function conseguirTipoSuscripcion(suscripción) {
    if (tiposDeSuscripciones[suscripción]) {
        console.log(tiposDeSuscripciones[suscripción])
    }
} // Si el tipo de suscripción que paso existe entonces va a imprimir el value de la key pasada. Si no existe no imprime nada:

conseguirTipoSuscripcion("free") // Solo puedes tomar los cursos gratis