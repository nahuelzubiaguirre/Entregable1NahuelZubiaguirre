
let saludar = alert ("Bienvenid@, gracias por ponerte en contacto con nosotros, a continuacion vamos a pedirte tus datos")

const datos = [] 

const agregarDatos = () => {
    const nombre = prompt("Ingresa tu nombre:")
    const apellido = prompt("Ingresa tu apeliido:")
    const edad = parseInt(prompt("Ingrese su edad:"))

    const dato = { nombre , apellido, edad}
    datos.push(dato)


}

agregarDatos()

console.table(datos)

let inicio = alert("A continuacion nos podra indicar cual de nuestros servicios le interesa")

let informacion = parseInt(prompt("Ingrese el numero segun corresponda: \n 1.Manuel de marca \n 2.Marketing de redes \n 3.Desarrollo web \n 4.Fotoproducto \n 5.Ninguno"))

function manual() {
    let marca = prompt("Ingrese el nombre de su marca")
    console.log("Es un placer trabajar con" + " " + marca)
    let manuelDeMarca= prompt("Si ya posee hecho un manual de marca ingrese: \n 1, de la contrario ingrese: 2.")
    if (manuelDeMarca == 1) {
        console.log("Ahora podra enviarnos su manual de marca, para que lo podamos mejorar")
    } else {
        console.log("Perfecto, vamos a comenzar de 0 a construir su marca!")
    }
}

function marketing() {
    let mkt = prompt("Ingrese la red social que utiliza")
    console.log("Vamos a empezar a conocer cuales son sus objetivos, para moder mejor sus campañas en" + " " + mkt)
    let campañas= prompt("Ya viene realizando campañas publicitarias en redes? \n Ingrese segun corresponda: 1 por si, de la contrario ingrese: 2.")
    if (campañas == 1) {
        console.log("Vamos a controlar las metricas de sus campañas para optimizar el resultado")
    } else {
        console.log("Comenzaremos segun sus objetivos a plantear campañas estrategicamente para maximizar los beneficios")
    }
}

function web() {
    let pagina = prompt("Ingrese su pagina web")
    console.log("Ahora vamos a poder trabajar en base al dominio que nos indico:" + " " + pagina)
    let dominioWeb= prompt("Si nos indico una pagina web de dominio propio ingrese 1, si usted no posee una pagina web ingrese 2.")
    if (dominioWeb == 1) {
        console.log("Con esta informacion podemos brindarle una actualizacion a su pagina para que la experiencia de sus usuarios mejore")
    } else {
        console.log("Es tiempo de ponernos manos a la obra para poder comunicarse mejor con sus usuarios a travez de su web.")
    }
}

function foto() {
    let productos = parseInt(prompt("Cuantos productos tiene su empresa/emprendimiento?"))
    console.log("Vamos a trabajar a partir de los" + " " + productos + " " + "productos que nos indico")
    let fotoProducto= prompt("Usted tiene un catalogo desarrollado? 1. Si , 2. No")
    if (fotoProducto == 1) {
        console.log("Ya que posee un catalogo, podriamos ofrecerle material complementario para sus redes y pautas publicitarias.")
    } else {
        console.log("Es tiempo de empezar a trabajar en su portfolio y crear contenido para que pueda mostrar correctamente sus productos.")
    }
}


while(informacion !==5) {
    switch(informacion) {
        case 1:
            manual()
            break
        case 2:
            marketing()
            break
        case 3:
            web()
            break
        case 4:
            foto()
            break
        default:
            alert("Opcion incorrecta")  
            break
    }
    informacion = parseInt(prompt("Ingrese el numero segun corresponda: \n 1.Manuel de marca \n 2.Marketing de redes \n 3.Desarrollo web \n 4.Fotoproducto \n 5.Ninguno"))
    
}

let encuesta = confirm ("Si lo desea, puede responder una breve encuesta")

function cuestionar () {
    let respuesta = parseInt(prompt("Como considera su experiencia? \nIngrese un valor del 1 al 10."))
    if (respuesta >=6) {
        let positiva =alert("Gracias por su respuesta! Hasta la proxima")
        console.log("Su experiencia fue positiva")
    } else {
        let negativa = (alert("Esperemos que su experiencia sea mejor la proxima vez!"))
        console.log("Vamos a trabajar en mejorar su experiencia. Hasta la proxima!")
    }
    
}

cuestionar()