let listFiles = document.getElementById('listFiles')
let inputUser = document.getElementById('inputUser')
let searchButton = document.getElementById('searchButton')
let showResults = document.getElementById('showResults')

listFiles.addEventListener('change', () => {
    let eventAlert = new CustomEvent('changeFile') 
    listFiles.dispatchEvent(eventAlert)
})

let showFile = () => {
    alert(`El archivo de búsqueda es ${listFiles.value}`)
}

listFiles.addEventListener('changeFile', showFile)

let validateInput = (event) => {
    if ((event.key < 65 || event.key > 90) && event.key != 32 && event.key != 8) {
        event.preventDefault()
    }
}

inputUser.addEventListener('keydown', validateInput)

let searchFilm = () => {
    showResults.innerHTML = ''
    fetch(listFiles.value)
        .then(res => res.json())
        .then(salida => {
            for (let film of salida.data) {
                let input = inputUser.value.toUpperCase()
                if (film.nombre.startsWith(input)) {
                    let itemParagraph = document.createElement('p')
                    itemParagraph.id = film.nombre
                    itemParagraph.innerHTML = film.sinopsis
                    itemParagraph.style.display = 'none'

                    let itemList = document.createElement('li')
                    itemList.innerHTML = film.nombre
                    
                    itemList.addEventListener('mouseover', () => {
                        let p = document.getElementById(film.nombre)
                        p.style.display = 'block'
                    })

                    itemList.addEventListener('mouseout', () => {
                        let p = document.getElementById(film.nombre)
                        p.style.display = 'none'
                    })
                    
                    itemList.appendChild(itemParagraph)
                    showResults.appendChild(itemList)
                }
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

searchButton.addEventListener('click', searchFilm)




