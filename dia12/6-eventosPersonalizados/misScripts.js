let audio = document.getElementById('audio')
let listaCanciones = document.getElementById('listaCanciones')

let cambiarCancion = () => {
    let cancionElegida = listaCanciones.value
    audio.src = cancionElegida
    audio.play()
    let evento = new CustomEvent('cambioDeCancion')
    audio.dispatchEvent(evento)
}

listaCanciones.addEventListener('change', cambiarCancion)

let mostrarCancion = () => {
    console.log('La canción actual es: ' + listaCanciones.value)
}

audio.addEventListener('cambioDeCancion', mostrarCancion)