import React from 'react'

export const CalcularArea = () => {
  const calcularAreaCuadrado = (lado: number) => {
    return lado * lado;
  }

  // Operación para calcular el Área de un cuadrado
  const ladoDelCuadrado = 5;
  const areaDelCuadrado = calcularAreaCuadrado(ladoDelCuadrado);

  return (
    <div>
      <p>El área del cuadrado con lado {ladoDelCuadrado} es: {areaDelCuadrado}</p>
    </div>
  )
}
