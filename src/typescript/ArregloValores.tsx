import React from 'react'


export const ArregloValores = () => {
  const sumarArreglo = (arreglo: number[]): number => {
    return arreglo.reduce((total, num) => total + num, 0);
  }
  // Ejemplo de uso
  const arreglo = [1, 2, 3, 4, 5,6 ,7, 8, 9, 10];
  const suma = sumarArreglo(arreglo);

  return (
    <div>
      <p>Arreglo: {JSON.stringify(arreglo)}</p>
      <p>Suma: {suma}</p>
    </div>
  );
};