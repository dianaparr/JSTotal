let data = {
    title: 'Nuevo post',
    body: 'Esta es la descipción'
}

// INTERCEPTORES DE SOLICITUD

let miToken = 'este_es_mi_token'

axios.interceptors.request.use(
    (config) => {
        config.headers.Authorizatios = `Bearer ${miToken}`
        return config
    }, (err) => {
        return Promise.reject(err)
    }
)

// INTERCEPTORES DE RESPUESTA

axios.interceptors.response.use(
    (response) => {
        response.data.customField = 'Nuevo Campo'
        return response
    }, (err) => {
        return Promise.reject(err)
    }
)

let pedido1 = axios.get('https://api.ejemplo.com/data1')
let pedido2 = axios.get('https://api.ejemplo.com/data2')
let pedido3 = axios.get('https://api.ejemplo.com/data3')

// axios.all()
Promise.all([pedido1,pedido2,pedido3])
//axios.spread(response1,response2,response3)
.then(([response1,response2,response3]) => {
    //Code
})
.catch(err => {
    //manejo de errores
})

