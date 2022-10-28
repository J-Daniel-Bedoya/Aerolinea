import React, { useEffect, useState } from 'react'
 
const AsientosSalida = () => {

  const letras = ["A", "B", "C", "", "D", "E", "F"]
  const noDisponibleSalidaRapidaIzquierda = [2, 1, 12, 15]
  const noDisponibleSalidaRapidaDerecha = [7, 3, 15, 1, 8]
  const noDisponibleEstandarIzquierda = [2]
  const noDisponibleEstandarDerecha = [2, 7, 9, 13]
  const [botones, setBotones] = useState([])
  const [botonesNumber, setBotonesNumber] = useState([])
  const [botonesNumber1, setBotonesNumber1] = useState([])
  const [noDisponible1, setNoDiponible1] = useState([]) 
  const [noDisponible2, setNoDiponible2] = useState([]) 
  const [noDisponible3, setNoDiponible3] = useState([]) 
  const [noDisponible4, setNoDiponible4] = useState([]) 
  // const [num1, setNum1] = useState(0)

  useEffect(() => {
    let arrBasio = []
    let arrNumbers = []
    let arrNumbers1 = []
    for (let i = 1; i <= 15; i++){
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
  }, [])

  useEffect(() => {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    botones.map((e, i) => {
      const ar1 = noDisponibleSalidaRapidaIzquierda.find(e => e === i+1)
      arr1.push(ar1 || 0)
    })
    botones.map((e, i) => {
      const ar2 = noDisponibleSalidaRapidaDerecha.find(e => e === i+1)
      arr2.push(ar2 || 0)
    })
    botones.map((e, i) => {
      const ar3 = noDisponibleEstandarIzquierda.find(e => e === i+1)
      arr3.push(ar3 || 0)
    })
    botones.map((e, i) => {
      const ar4 = noDisponibleEstandarDerecha.find(e => e === i+1)
      arr4.push(ar4 || 0)
    })
    setNoDiponible1(arr1)
    setNoDiponible2(arr2)
    setNoDiponible3(arr3)
    setNoDiponible4(arr4)
  }, [botones])

  const [numSelect, setNumSelect] = useState(0)

  const selectedNum1 = (index) => {
    const salidaRapidaIzquierda = [...noDisponibleSalidaRapidaIzquierda, index]
    let arr1 = [];
    botones.map((e, i) => {
      const ar1 = salidaRapidaIzquierda.find(e => e === i+1)
      arr1.push(ar1|| 0)
    })
    setNoDiponible1(arr1)
  }
  const selectedNum2 = (index) => {
    const salidaRapidaDerecha = [...noDisponibleSalidaRapidaDerecha, index]
    let arr2 = [];
    botones.map((e, i) => {
      const ar2 = salidaRapidaDerecha.find(e => e === i+1)
      arr2.push(ar2 || 0)
    })
    setNoDiponible2(arr2)
  }
  const selectedNum3 = (index) => {
    const estandarIzquierda = [...noDisponibleEstandarIzquierda, index]
    let arr3 = [];
    botones.map((e, i) => {
      const ar3 = estandarIzquierda.find(e => e === i+1)
      arr3.push(ar3 || 0)
    })
    setNoDiponible3(arr3)
  }
  const selectedNum4 = (index) => {
    const estandarDerecha = [...noDisponibleEstandarDerecha, index]
    let arr4 = [];

    botones.map((e, i) => {
      const ar4 = estandarDerecha.find(e => e === i+1)
      arr4.push(ar4 || 0)
    })
    setNoDiponible4(arr4)
  }
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
            botones.map((boton, index) => (
              <button 
                onClick={() => selectedNum1(index+1)}
                style={{
                  cursor: noDisponible1[index] === 0 && "pointer", 
                  // hover: noDisponible1[index] === 0 && "pointer", 
                }}
                className={`salidaRapida `} 
                id={noDisponible1[index] !== 0 ? "noDisponible" : ""}
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
          botones.map((boton, index) => (
            <button 
              onClick={() => selectedNum2(index+1)}
              style={{cursor: noDisponible2[index] === 0 && "pointer"}}
              className='salidaRapida'  
              id={noDisponible2[index] !== 0 ? "noDisponible" : ""}
              key={boton}>{boton}
            </button>
          ))
        }
        </div>
      </div>
      <p>Estandar</p>
      <div className='asientosBotones'>
        <div className='botonesSalidaRapida'>
          {
            botones.map((boton, index) => (
              <button 
                onClick={() => selectedNum3(index+1)}
                style={{cursor: noDisponible3[index] === 0 && "pointer"}}
                className='salidaRapida' 
                id={noDisponible3[index] !== 0 ? "noDisponible" : ""}
                key={boton}>{boton}
              </button>
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
          botones.map((boton, index) => (
            <button 
              onClick={() => selectedNum4(index+1)}
              style={{cursor: noDisponible4[index] === 0 && "pointer"}}
              className='salidaRapida' 
              id={noDisponible4[index] !== 0 ? "noDisponible" : ""}
              key={boton}>{boton}
            </button>
          ))
        }
        </div>
      </div>
    </div>
 
  )
}
 
export default AsientosSalida;