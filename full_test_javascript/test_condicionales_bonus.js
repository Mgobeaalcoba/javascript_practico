opcion = "ExpertPlus" 

paquetes = ["Free","Basic","Expert","ExpertPlus"]

descripcion = ["Solo puede tomar dos cursos gratis","Puedes tomar casi todos los cursos durante un mes","puedes tomar todos los cursos durante un año","tú y alguien más pueden tomar todos los cursos durante un año"]

let lugar = paquetes.indexOf(opcion)

function imprime(lugar){
    `Con una suscripción ${paquetes[lugar]} entonces ${descripcion[lugar]}.`
}

imprime(lugar);