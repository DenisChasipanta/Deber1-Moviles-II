import React from 'react'

import { CalcularArea } from './typescript/CalcularArea';
import { ArregloValores } from './typescript/ArregloValores';
import { ArregloValoresDivididos } from './typescript/ArregloValoresDivididos';
import { ParOImpar } from './typescript/ParOImpar';
import { DeterminarTextoMayorYOperaciones } from './typescript/DeterminarTextoMayorYOperaciones';
import { PromedioCalificaciones } from './typescript/PromedioCalificaciones';
import { Contador } from './typescript/Contador';


export const App = () => {
  return (
    <div>
      <h3>EJERCICIOS TYPESCRIPT - REACT DEBER N°1</h3>
      <hr />
      {/* <CalcularArea/> */}
      {/* <ArregloValores/> */}
      {/* <ArregloValoresDivididos/> */}
      {/* <ParOImpar/> */}
      {/* <DeterminarTextoMayorYOperaciones/> */}
      {/* <PromedioCalificaciones/> */}
      <Contador/>
    </div>
  )
}

export default App;
