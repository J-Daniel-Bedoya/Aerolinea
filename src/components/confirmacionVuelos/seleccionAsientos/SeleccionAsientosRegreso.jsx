import React from 'react'
import { useNavigate } from 'react-router-dom';
import AsientosSalida from './AsientosSalida';
 
const SeleccionAsientosRegreso = () => {
  const navigate = useNavigate()

  return (
    <div className='SeleccionAsientosRegreso'>
      <div className="title_vuelo">
          <h1>Vuelo de regreso</h1>
        </div>
        <div className="title_datos">
          <p className="title_fechasVuelo">Miercoles 8 diciembre 2021</p>
          <p className="title_paisVuelo">Brasil a Colombia</p>
          <p className="title_horariosVuelo">
            Seleccion de horarios y equipajes
          </p>
          <AsientosSalida />
        </div>
        
    </div>
 
  )
}
 
export default SeleccionAsientosRegreso;