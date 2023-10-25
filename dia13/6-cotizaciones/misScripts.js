let index = () => {
    // Una función que va a consultar los recursos 
    // externos y obtener las cotizaciones que necesitamos.
    getData(showExchange)

    // Otra función que cargue los valores para el titulo y logo, 
    // que en la pregunta anterior dejamos sin datos y mencionamos que 
    // lo ibamos a cargar vía JavaScript
    showHeader()

    // Y por ultimo, otra función que en los div o p que declaramos para mostrar las cotizaciones,
    // vaya cargando los textos informativos de tipo: USD a EUR, ARS a USD y Bitcoin a USD.
    showData()
   
}

let getData = async (callback) => {
    await delay(2500)

    let dataBitcoin = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    callback(await dataBitcoin.json())

    let dataEUR = await fetch('https://open.er-api.com/v6/latest/USD')
    let promise2 = await dataEUR.json()
    document.getElementById('eur').append(promise2.rates.EUR)

    let dataARS = await fetch('https://open.er-api.com/v6/latest/ARS')
    let promise3 = await dataARS.json()
    document.getElementById('peso_ar').append(promise3.rates.USD)
    document.getElementById('loading').style.visibility = 'hidden'
}

let showExchange = (data) => {
    document.getElementById('bitcoin').append(data.bpi.USD.rate)
}

let showHeader = () => {
    try {
        let divHeader = document.getElementById('encabezado')

        let img = document.createElement('img')
        img.src = 'us-dollar.jpg'
        divHeader.appendChild(img)

        let title = document.createElement('h1')
        title.textContent = 'Cotizaciones - HOY'
        divHeader.appendChild(title)

        document.getElementById('current_date').textContent = Date()
        document.getElementById('loading').setAttribute('src', 'loading.gif')
        document.getElementById('loading').style.visibility = 'visible'
    } catch (error) {
        alert(error)
    }
}

let showData = () => {
    try {
        document.getElementById('eur').append('EUR a USD: ')
        document.getElementById('bitcoin').append('Bitcoin a USD: ')
        document.getElementById('peso_ar').append('Peso Argentino a USD: ')
    } catch (error) {
        alert(error)
    }
}

let delay = (ms) => {
    return new Promise((res) => {
        setTimeout(res, ms)
    })
}