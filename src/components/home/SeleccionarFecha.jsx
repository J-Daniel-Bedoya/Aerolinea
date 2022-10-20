import React, { useEffect } from 'react'
import { DateTime } from "luxon"; 

const SeleccionarFecha = () => {
  const fecha =  DateTime.local().toLocaleString(DateTime.DATETIME_FULL); //=>  '2017-W24-5'
  
  return (
    <div className='seleccionarFecha'>
      <div className='seleccionarFecha__card'>
        <div className='seleccionarFecha__card--text'>
          <h2>Selecionar tus fechas</h2>
          <button>Cerrar</button>
          <hr />
        </div>
        <div className='seleccionarFecha__card--fechas'>
          <div>
            <p>
              {fecha}
            </p>
          </div>
          <div>

          </div>
        </div>
        <div className='seleccionarFecha__card--info'>
          <p>$ Precios bajos</p>
          <button>Hecho</button>
        </div>
      </div>
    </div>
 
  )
}
 
export default SeleccionarFecha;