import React, { useState } from 'react'

export const Contador = () => {

    //Hook useState
    const [valor, setvalor] = useState<number>(0)

    //Función para contador
    const contador = (numero:number) =>{
        setvalor(valor + numero)
    }
    const contador2 = (numero:number) =>{
        setvalor(valor - numero)
    }
  return (
    <div>
        <h3>Contador: <small>{valor}</small></h3>
        <button className='btn btn-primary'
        onClick={()=>contador(5)}>+5</button>
        &nbsp;
        <button className='btn btn-primary'
        onClick={()=>contador2(5)}>-5</button>
    </div>
  )
}
