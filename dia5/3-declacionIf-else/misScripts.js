function evaluarCompra() {
    let elementResponse = document.getElementById("decision")
    let elementPrecio = document.getElementById("textoPrecio")

    let precio = elementPrecio.value
    if (precio < 5) {
        elementResponse.textContent = "Comprar 2 cartones de leche"
    } else {
        if (precio < 8) {
            elementResponse.textContent = "Comprar 1 carton de leche"
        } else {
            elementResponse.textContent = "No compres nada"
        }
    }
}