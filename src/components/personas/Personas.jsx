import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Personas = () => {

  const apiInfoVuelos = "https://apiaerolinea-production.up.railway.app/api/v1";
  const [recerva, setRecerva] = useState({});

  useEffect(() => {
    axios
    .get(`${apiInfoVuelos}/recerva/2`)
    .then(res => {
      setRecerva(res.data);
      console.log(recerva)
    })
  }, [])
  const [array, setArray] = useState([]);
  useEffect(() => {
    const arrayContador = []
    for(let i = 0; i<recerva.adultos; i++){
      arrayContador.push(i)
    }
    for(let i = 0; i<recerva.niños; i++){
      arrayContador.push(i)
    }
    for(let i = 0; i<recerva.bebes; i++){
      arrayContador.push(i)
    }
    setArray(arrayContador)
  }, [recerva])



  return (
    <div>
      
      <form action="">
        {
          array.map((arr, i) => (
            <div key={i}>
              <div>
                <label htmlFor="nombres">Nombres</label>
                <input id='nombres' type="text" />
              </div>
              <div>
                <label htmlFor="apellidos">Apellidos</label>
                <input id='apellidos' type="text" />
              </div>
              <div>
                <label htmlFor="edad">Edad</label>
                <input id='edad' type="number" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id='email' type="email" />
              </div>
              <div>
                <label htmlFor="genero">Genero</label>
                <input id='genero' type="radio" />Femenina
                <input id='genero' type="radio" />Maculino
                <input id='genero' type="radio" />Otro
              </div>
            </div>
          ))
        }
      </form>
    </div>
  )
}

export default Personas
