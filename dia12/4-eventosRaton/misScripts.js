let menu = document.getElementById('miMenu')
let boton = document.getElementById('miBoton')

/*boton.addEventListener('click', () => {
    menu.style.display = 'block'
})*/

boton.addEventListener('mouseover', () => {
    menu.style.display = 'block'
})

boton.addEventListener('mouseout', () => {
    menu.style.display = 'none'
})

document.addEventListener('mousemove', (event) => {
    console.log('Posicion x: ' + event.clientX + ' - Posicion Y: ' + event.clientY)
})