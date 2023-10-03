function crearParrafoTienda(textoLabel, valorMin) {
    // 1. crear las etiquetas de párrafo
    let elementoParrafo = document.createElement("p")

    // 2. crear las etiquetas label
    let elementoEtiqueta = document.createElement("label")

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
    let miElemento = document.getElementById(elemento)
    let miTexto = miElemento.value
    let miNumero = Number(miTexto)

    return miNumero
}

function calcular() {
    let ventas = []

    ventas[0] = extraerNumeroDesdeElemento('ventasTienda1')
    ventas[1] = extraerNumeroDesdeElemento('ventasTienda2')
    ventas[2] = extraerNumeroDesdeElemento('ventasTienda3')
    ventas[3] = extraerNumeroDesdeElemento('ventasTienda4')
    ventas[4] = extraerNumeroDesdeElemento('ventasTienda5')
    ventas[5] = extraerNumeroDesdeElemento('ventasTienda6')

    let totalVentas = sumarTotal(ventas)
    let ventaMayor = calcularMayor(ventas)
    let ventaMenor = calcularMenor(ventas)

    let mensajeSalida = "Total ventas: " + totalVentas +  
                        " / Venta Mayor: " + ventaMayor +
                        " / Venta Menor: " + ventaMenor

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