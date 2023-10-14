let socket = new WebSocket('ws://localhost:8080')
let mensajeIngresado = document.getElementById('mensajeIngresado')
let botonEnviar = document.getElementById('botonEnviar')

let mostrarMensajes = (contenido) => {
    let contenedorMensajes = document.getElementById('mensajesChat')
    let elementoMensaje = document.createElement('p')
    elementoMensaje.innerText = contenido
    contenedorMensajes.appendChild(elementoMensaje)
}

botonEnviar.onclick = () => {
    let mensaje = mensajeIngresado.value
    mostrarMensajes(mensaje)
    socket.send(mensaje)
}

socket.onmessage = (event) => {
    let mensaje = event.data
    mostrarMensajes(mensaje)
}