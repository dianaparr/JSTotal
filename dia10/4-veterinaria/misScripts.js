class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre
        this.peso = peso
        this.edad = edad
    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años`
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad)
        this.raza = raza
    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.raza}`
    }
    // Perro - [nombre] - [peso] kg - [edad] años - [raza]
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad)
        this.sexo = sexo
    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.sexo}`
    }
    // Gato - [nombre] - [peso] kg - [edad] años - [sexo]
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad)
        this.color = color
    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - Color: ${this.color}`
    }
    // Conejo - [nombre] - [peso] kg - [edad] años - Color: [color]
}

let perro1 = new Perro('Rosky', 17, 3, 'Criollito')
let gato1 = new Gato('Ramona', 12, 2, 'Hembra')
let conejo1 = new Conejo('Gilberto', 15, 4, 'Negro')

let arrAnimales = [perro1, gato1, conejo1]

function verInformacion() {
    let lista = document.getElementById('listaPacientes');

    for(let paciente of arrAnimales) {
        let item = document.createElement('li');
        item.innerText = paciente.informacion();
        lista.appendChild(item);
    }
}