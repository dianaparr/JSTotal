// 1. Creo el constructor Automovil
function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.anio = anio
    this.titular = titular
}

let auto1 = new Automovil('Chevrolet', 'New', 'Gris', 2022, 'Carolina Garcia')
let auto2 = new Automovil('Ranault', 'Bold', 'Negro', 2023, 'Gonza Lemes')
let auto3 = new Automovil('Nissan', 'Caoba', 'Azul', 2020, 'Kevin Otras')

let arr = [auto1, auto2, auto3]

// 2. Modificar Prototipo: agregar funciones
Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular
}

Automovil.prototype.verAuto = function(){
    return `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`
}

Automovil.prototype.enceder = function(){
    alert('El automóvil está en marcha')
}

function mostrarAutos() {
    let lista = document.getElementById('listaAutos');

    for(let auto of arr) {
        let item = document.createElement('li');
        item.innerText = auto.verAuto();
        lista.appendChild(item);
    }
}
