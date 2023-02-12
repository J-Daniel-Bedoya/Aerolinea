import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Personas = () => {

  const apiInfoVuelos = "https://apiaerolinea-production.up.railway.app/api/v1";

  const {register, handleSubmit, reset} = useForm();
  const [recerva, setRecerva] = useState({});
  const [pais, setPais] = useState([]);
  const [recidencia, setRecidencia] = useState([]);
  const [genero, setGenero] = useState('');
  const [conteo, setConteo] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`${apiInfoVuelos}/recerva/1`)
    .then(res => {
      setRecerva(res.data);
      console.log(recerva)
    })
  }, [])

  useEffect(() => {
    axios
    .get(`${apiInfoVuelos}/pais`)
    .then(res => {
      setPais(res.data);
      console.log(recerva)
    })
  }, [])
  
  const infoReset = {
    nombres: '',
    apellidos: '',
    edad: '',
    email: ''
  }
  const submit = (form) => {
    const info = {
      nombres: form.nombres,
      apellidos: form.apellidos,
      edad: Number(form.edad),
      genero: genero,
      email: form.email,
      paisRecidencia: recidencia
    }

    axios.post(`${apiInfoVuelos}/persona`, info)
    const totalPersonas = recerva?.adultos + recerva?.niños + recerva?.bebes
    console.log(info)
    if (conteo <= totalPersonas){
      setConteo(conteo+1);
      reset(infoReset)
    }else {
      navigate('/finalizar_compra')
    }

  }


  return (
    <div className='personas'>
      
      <form className='personas__form' onSubmit={handleSubmit(submit)}>
        <div className='personas__form--container'>
          <h3>Datos adicionales de la persona #{conteo} que viaja</h3>
          <br />
          <div className='personas__form--nombre input'>
            <label htmlFor="nombres">Nombres</label>
            <input id='nombres' type="text" {...register('nombres')}/>
          </div>
          <div className='personas__form--apellido input'>
            <label htmlFor="apellidos">Apellidos</label>
            <input id='apellidos' type="text" {...register('apellidos')}/>
          </div>
          <div className='personas__form--edad input'>
            <label htmlFor="edad">Edad</label>
            <input id='edad' type="number" {...register('edad')}/>
          </div>
          <div className='personas__form--email input'>
            <label htmlFor="email">Email</label>
            <input id='email' type="email" {...register('email')}/>
          </div>
          <div className='personas__form--genero'>
            <p>Genero</p>
            <select name="genero" id="genero" onChange={e => setGenero(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="femenino">Femenino</option>
              <option value="masculino">Masculino</option>
              <option value="otro">Otro</option>
            </select> 
          </div>
          <div>
            <p>Pais de Recidencia</p>
            <select name="pais" id="pais" onChange={e => setRecidencia(e.target.value)}>
              <option value="">Seleccionar</option>
            {
              pais.map((pais,i) => (
                  <option key={i} value={pais.nombre}>{pais.nombre}</option>
                  ))
            }
            </select>
          </div>
        </div>

        <div>
          <button type='submit'>Siguiente</button>
        </div>
      </form>
    </div>
  )
}

export default Personas
