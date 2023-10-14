let campo = document.getElementById('miCampo')

let verificarNumero = (event) => {
    if (event.keyCode < 48 || event.keyCode > 57) event.preventDefault()
}

campo.addEventListener('keydown', verificarNumero)
campo.addEventListener('keyup', (event) => {
    console.log('Entrada del usuario: ' + event.target.value)
})
campo.addEventListener('keypress', (event) => {
    console.log('Caracter ingresado: ' + event.key)
})