import React from 'react'

interface Alumno {
  name: string;
  edad: number;
  calificacion: number;
}
export const PromedioCalificaciones = () => {
  const alumnos: Alumno[] = [
    {
        name: "Viviana",
        edad: 19,
        calificacion: 10,
    },
    {
        name: "Wendy",
        edad: 20,
        calificacion: 8,
    },
    {
        name: "Gerson",
        edad: 18,
        calificacion: 9,
    }
];
  const calcularPromedio = (alumnos: Alumno[]): number => {
    const totalCalificaciones = alumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
    return totalCalificaciones / alumnos.length;
}
  const promedio = calcularPromedio(alumnos);
  return (
      <div>
          <h2>Promedio de Calificaciones: {promedio.toFixed(2)}</h2>
      </div>
  )
}
