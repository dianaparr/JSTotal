let empleados = []

function Empleado(documento, nombre, apellido, nacimiento, cargo) {
    this.documento = documento
    this.nombre = nombre
    this.apellido = apellido
    this.nacimiento = nacimiento
    this.cargo = cargo
}

function agregarEmpleado() {
    let documento = document.getElementById("txtDocumento").value
    let nombre = document.getElementById("txtNombre").value
    let apellido = document.getElementById("txtApellido").value
    let nacimiento = document.getElementById("txtNacimiento").value
    let cargo = document.getElementById("txtCargo").value

    let empleado = new Empleado(documento, nombre, apellido, nacimiento, cargo)
    empleados.push(empleado)

    alert('El empleado ha sido agregado.')
    limpiarCampos()
}

function mostrarEmpleados() {
    let mostrarResultado = ''
    for (let empleado of empleados) {
        for (let prop in empleado) {
            mostrarResultado += prop.toUpperCase() + ': ' + empleado[prop] + ',' 
        }
        mostrarResultado += '\n'
    }
    alert(mostrarResultado)
}

function limpiarCampos() {
    document.getElementById("txtDocumento").value = ""
    document.getElementById("txtNombre").value = ""
    document.getElementById("txtApellido").value = ""
    document.getElementById("txtNacimiento").value = ""
    document.getElementById("txtCargo").value = ""

}