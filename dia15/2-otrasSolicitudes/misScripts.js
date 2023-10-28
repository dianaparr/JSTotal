// Method PUT 
/*fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: 'Nuevo título',
        body: 'nueva descripción'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error('Error: ', err))*/

// Method DELETE
/*fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error('Error: ', err))*/

// Method PATCH
fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: 'Nuevo título'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error('Error: ', err))
