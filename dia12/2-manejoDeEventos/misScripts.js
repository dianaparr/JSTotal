let boton = document.getElementById('miBoton')
let div = document.getElementById('miDiv')
let enlace = document.getElementById('miEnlace')

let evitarEnlace = (event) => {
    event.preventDefault()
    alert('Enlace no habilitado')
}

let mostrarMensaje = (event) => {
    alert(event.target)
    alert(event.currentTarget)
}

div.addEventListener('click', mostrarMensaje)
// Elementos que desencadenan un evento:
// target: [object HTMLButtonElement]
// currentTarget: [object HTMLDivElement]
enlace.addEventListener('click', evitarEnlace)