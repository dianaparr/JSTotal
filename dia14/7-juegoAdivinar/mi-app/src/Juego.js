import React from "react";

let Juego = (props) => {
    let [numberUser, setNumberUser] = React.useState(0)
    let [numberServer, setNumberServer] = React.useState(Math.floor(Math.random() * props.limite) + 1)

    let comprobarNumeroUser = (event) => {
        setNumberUser(event.target.value)
    }

    let comprobarNumeroServer = () => {
        if (numberUser == numberServer) alert('Adivinaste!')
        else alert('Fallaste, el número era ' + numberServer)
        setNumberServer(Math.floor(Math.random() * props.limite) + 1)
    }

    return (
        <div>
            <p>Ingresa un número del 1 al 10:</p>
            <input type="number"
                    placeholder="Ingresa un número"
                    min={1}
                    max={10}
                    onChange={comprobarNumeroUser}>
            </input>
            <br/>
            <button onClick={comprobarNumeroServer}>Adivina-dor</button>
        </div>
    )
}

export default Juego