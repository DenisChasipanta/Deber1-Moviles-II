import React from 'react'

export const ArregloValoresDivididos = () => {
  const array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  //Función Map 
  const arregloDividido = array.map((valor) => valor / 5);

  return (
    <div>
      <h3>Lista De valores:</h3>
      [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
      <hr />
      <h3>Lista de valores divididos para 5</h3>
      <div style={{ display: "flex" }}>
        {arregloDividido.map((valor, index) => (
          <ul key={index}>{valor}</ul>
        ))}
      </div>

    </div>
  )
}







