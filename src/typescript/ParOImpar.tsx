import React from 'react'

export const ParOImpar = () => {
  const numeros = [1, 2, 3, 4];

  return (
    <div>
      <h3>Lista de Números</h3>
      [1, 2, 3, 4]
      <hr />
      <div>
      <h3>Nuevo arreglo que remplace el número por las palabras correspondiente:</h3>
        {numeros.map((numero, index) => (
          <span key={numero}>
            {numero % 2 === 0 ? 'Par' : 'Impar'}
            {index < numeros.length - 1 && ', '}
          </span>
        ))}
      </div>
    </div>
  );
};
