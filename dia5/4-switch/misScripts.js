function consultarPrecio() {
    let elementResponse = document.getElementById("textoPrecio")
    let elementFruit = document.getElementById("numeroFruta")
    let fruit = elementFruit.value
    switch (fruit) {
        case "1":
            elementResponse.textContent = "$850"
            break;
        case "2":
            elementResponse.textContent = "$1,200"
            break;
        case "3":
            elementResponse.textContent = "$500"
            break;
        case "4":
            elementResponse.textContent = "$1,100"
            break;
        case "5":
            elementResponse.textContent = "$2,000"
            break;
    }
}