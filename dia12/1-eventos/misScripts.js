let boton = document.getElementById('miBoton')

/*boton.addEventListener('click', () => {
    alert('El botón fue presionado')
})*/

let mostrarMensaje = () => {
    alert('El botón ha sido presionado')
}

let otroMensaje = () => {
    alert('Flotar')
}

boton.addEventListener('click', mostrarMensaje)
boton.addEventListener('mouseover', otroMensaje)

