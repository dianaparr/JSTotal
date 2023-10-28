let crearPost = async (titulo, contenido) => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: titulo,
                body: contenido,
                userId: 1
            })
        })

        if (!response.ok) throw new Error('Error en la petición: ', response.statusText)

        let data = await response.json()
        console.log('Registro creado: ', data)
    } catch (err) {
        console.error('Algo salió mal al crear el registro: ', err)
    }
}

crearPost('My title', 'My custom content')