function multiplicar() {
    // Obtener el número
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    // Obtener tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    // Producir y mostrar resultados
    for (let x = 1; x <= 10; x++) {
        // Calcular resultado
        let resultado = numeroTabla * x;
        // Mostrar resultado en un string
        let texto = numeroTabla + " x " + x + " = " + resultado;
        // Crear un elemento de lista
        let elementoLista = document.createElement("li");
        // Agregar texto al elemento de lista
        elementoLista.innerText = texto;
        // Agregar elemento de lista a la tabla
        elementoTablaMultiplicar.appendChild(elementoLista);
    }

}