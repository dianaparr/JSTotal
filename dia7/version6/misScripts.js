function crearTiendas(contenedorId, min, cantidadTiendas) {
    // 1. encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorId)

    // 2. loop para crear las tiendas que se requieran
    for (let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++) {
        // 2.1 crear el texto label para poder llamar la función
        let textoEtiqueta = "Tienda " + conteoTiendas

        // 2.2 crear tiendas con crearParrafoTienda()
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min)

        // 2.3 agregar párrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda)
    }
}

function crearParrafoTienda(textoLabel, valorMin) {
    // 1. crear las etiquetas de párrafo
    let elementoParrafo = document.createElement("p")

    // 2. crear las etiquetas label
    let elementoEtiqueta = document.createElement("label")
    elementoEtiqueta.innerText = textoLabel + ": "

    // 3. conectar label con el input
    elementoEtiqueta.setAttribute("for", textoLabel)

    // 4. crear elemento input
    let elementoInput = document.createElement("input")

    // 5. establecer atributos de input
    elementoInput.setAttribute("type", "number")
    elementoInput.setAttribute("id", textoLabel)
    elementoInput.setAttribute("min", valorMin)
    elementoInput.setAttribute("value", 0)

    // 6. agregar label e input al párrafo
    elementoParrafo.appendChild(elementoEtiqueta)
    elementoParrafo.appendChild(elementoInput)

    // 7. retornar el párrafo completo
    return elementoParrafo
}

function extraerNumeroDesdeElemento(elemento) {
    let miTexto = elemento.value
    let miNumero = Number(miTexto)

    return miNumero
}

function calcular() {
    let ventas = []
    let posicionVentas = 0
    let elementosVentas = document.getElementById("itemsTiendas")

    for (let item of elementosVentas.children) {
        let valorVenta = extraerNumeroDesdeElemento(item.children[1])
        ventas[posicionVentas] = valorVenta
        posicionVentas++
    }

    let totalVentas = sumarTotal(ventas)
    let ventaMayor = calcularMayor(ventas)
    let ventaMenor = calcularMenor(ventas)

    for (let venta of elementosVentas.children) {
        let inputVenta = extraerNumeroDesdeElemento(venta.children[1])

        venta.children[1].className = "inputSinColor"

        if (inputVenta == ventaMayor) venta.children[1].className = "inputMayor"
        if (inputVenta == ventaMenor) venta.children[1].className = "inputMenor"
    }

    let mensajeSalida = "Total ventas: " + totalVentas

    let elementoSalida = document.getElementById("parrafoSalida")

    elementoSalida.textContent = mensajeSalida
}

function sumarTotal(array) {
    let total = 0
    for (let venta of array) total += venta

    return total
}

function calcularMayor(array) {
    let maximo = array[0]
    for (let venta of array) {
        if (venta > maximo) maximo = venta
    }
    return maximo
}

function calcularMenor(array) {
    let minimo = array[0]
    for (let venta of array) {
        if (venta < minimo) minimo = venta
    }
    return minimo
}