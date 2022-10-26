import React from 'react'
 
const SeleccionAsientosRegreso = () => {
  return (
    <div className='SeleccionAsientosRegreso'>
      <div className="title_vuelo">
          <h1>Vuelo de regreso</h1>
          <button onClick={() => navigate("/")} className="btn_cambiarVuelo">
            Cambiar vuelo
          </button>
        </div>
        <div className="title_datos">
          <p className="title_fechasVuelo">Miercoles 8 diciembre 2021</p>
          <p className="title_paisVuelo">Brasil a Colombia</p>
          <p className="title_horariosVuelo">
            Seleccion de horarios y equipajes
          </p>
        </div>
    </div>
 
  )
}
 
export default SeleccionAsientosRegreso;