import React from "react"
import Saludo from "./Saludo"
import Mensaje from "./Mensaje"

let App = () => {
  return (
    <div>
      <Saludo nombre='Juan'/>
      <Mensaje mensaje='Bienvenido a mi app React'/>
    </div>
  )
}

export default App