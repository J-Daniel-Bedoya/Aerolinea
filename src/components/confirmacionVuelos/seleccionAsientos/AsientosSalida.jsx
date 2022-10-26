import React, { useEffect, useState } from 'react'
 
const AsientosSalida = () => {

  const letras = ["A", "B", "C", "", "D", "E", "F"]
  const arrayNoDisponible = [2, 5, 8, 9 , 13, 7]
  const [botones, setBotones] = useState([])
  const [botonesNumber, setBotonesNumber] = useState([])
  const [botonesNumber1, setBotonesNumber1] = useState([])
  // const [noDisponible, setNoDiponible] = useState(0)
  const [disponible, setDiponible] = useState([])

  useEffect(() => {
    let arrBasio = []
    let arrNumbers = []
    let arrNumbers1 = []
    let dis = []
    for (let i = 1; i <= 15; i++){
      dis.push(i)
      arrBasio.push("");
    }
    for (let i = 1; i <= 5; i++){
      arrNumbers.push(i);
    }
    for (let i = 6; i <= 10; i++){
      arrNumbers1.push(i);
    }
    setBotones(arrBasio)
    setBotonesNumber(arrNumbers)
    setBotonesNumber1(arrNumbers1)
    setDiponible(dis)
  }, [setDiponible])

  // console.log(disponible)
  useEffect(() => {
    // let 
    
  }, [botones, arrayNoDisponible])

  return (
    <div className='AsientosSalida'>
      <div id='asientosLetras'>
        {
          letras.map(letra => (
            <button className='botonesLetras' key={letra}>{letra}</button>
          ))
        }
      </div>

      <p>Salida Rápida</p>
      <div className='asientosBotones'>
        <div className='botonesSalidaRapida'>
          {
            botones.map(boton => (
              <button className={`salidaRapida`} 
                key={boton}>{boton}
              </button>
            ))
          }
        </div>
        <div className='botnes__container'>
          {
            botonesNumber.map(number => (
              <button className='botnes__container--number' key={number}>{number}</button>
            ))
          }
        </div>
        <div className='botonesSalidaRapida'>
        {
          botones.map(boton => (
            <button className='salidaRapida' key={boton}>{boton}</button>
          ))
        }
        </div>
      </div>
      <p>Estandar</p>
      <div className='asientosBotones'>
        <div className='botonesSalidaRapida'>
          {
            botones.map(boton => (
              <button className='salidaRapida' key={boton}>{boton}</button>
            ))
          }
        </div>
        <div className='botnes__container'>
          {
            botonesNumber1.map(number => (
              <button className='botnes__container--number' key={number}>{number}</button>
            ))
          }
        </div>
        <div className='botonesSalidaRapida'>
        {
          botones.map(boton => (
            <button className='salidaRapida' key={boton}>{boton}</button>
          ))
        }
        </div>
      </div>
    </div>
 
  )
}
 
export default AsientosSalida;