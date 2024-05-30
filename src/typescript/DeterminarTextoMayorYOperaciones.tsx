import React from 'react'


export const DeterminarTextoMayorYOperaciones: React.FC = () => {
  const datos = [7, 5, 'sistemas', 'hola', 'adios', 2];

  // Filtrar los datos numéricos
  const numeros = datos.filter((dato) => typeof dato === 'number') as number[];

  // Encontrar el máximo de los datos de texto
  const textoMayor = datos.filter((dato): dato is string => typeof dato === 'string').reduce((max, texto) => texto.length > (max as string).length ? texto : (max as string), '');

  // Realizar las operaciones matemáticas con los datos numéricos
  const suma = numeros.reduce((total, num) => total + num, 0);
  const resta = numeros.reduce((total, num) => total - num, 0);
  const multiplicacion = numeros.reduce((total, num) => total * num, 1);
  const division = numeros.reduce((total, num) => total / num, numeros[0]);
  const modulo = numeros.reduce((total, num) => total % num, numeros[0]);

  return (
    <div>
      <p>El dato de texto más largo es: {textoMayor}</p>
      <p>Suma: {suma}</p>
      <p>Resta: {resta}</p>
      <p>Multiplicación: {multiplicacion}</p>
      <p>División: {division}</p>
      <p>Módulo: {modulo}</p>
    </div>
  )
}