// BASIC-AUTH
/*let user = 'fede'
let pass = 'javascriptTotal'

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Authorization': 'Basic ' + btoa(user + ':' + pass),
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error(err))*/

// BEARER TOKEN y Caché
let token = 'miToken'

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    cache: 'only-if-cached',
    redirect: 'manual',
    headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (response.type === 'opaqueredirect') {
        let newLocation = response.headers.get('Location')
        console.log('Redirigiendo a: ', newLocation)
    } else {
        return response.json()
    }
})
.then(data => console.log(data))
.catch(err => console.error(err))