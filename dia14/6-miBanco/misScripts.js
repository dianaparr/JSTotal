let cargarResumen = () => {
    let datosJson

    fetch('persona.json')
    .then(res => res.json())
    .then(salida => {
        datosJson = salida
    
        document.getElementById("nombre").textContent = 'Nombre: ' + datosJson.nombre
        document.getElementById("numeroCuenta").textContent = 'Nro. Cuenta: ' + datosJson.numeroCuenta
        document.getElementById("cbu").textContent = 'CBU: ' + datosJson.CBU
        document.getElementById("saldos").textContent = 'Saldos: '
    
        let lista = document.getElementById('listaSaldos');

        for(let saldo of datosJson.saldos) {
            let item = document.createElement('li');
            item.innerText = saldo.monto + ' ' + saldo.moneda;
            lista.appendChild(item);
        }
    })
    .catch((err) => {
        alert(err)
    })
}

