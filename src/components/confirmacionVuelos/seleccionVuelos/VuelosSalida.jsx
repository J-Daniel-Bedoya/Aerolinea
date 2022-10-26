import React from 'react'
 
const VuelosSalida = () => {
  return (
    <>
      <div className="vuelo_salida">
        <div className="title_vuelo">
          <h1 className="title_salida">Vuelo de salida</h1>
          <button onClick={() => navigate("/")} className="btn_cambiarVuelo">
            Cambiar vuelo
          </button>
        </div>
        <div className="title_datos">
          <p className="title_fechasVuelo">Martes 30 noviembre 2021</p>
          <p className="title_paisVuelo">Colombia a Brasil</p>
          <p className="title_horariosVuelo">
            Seleccion de horarios y equipajes
          </p>
        </div>
        <div className="info_vuelo">
          <p className="number_vuelo">05:50 PM</p>
          <div>
            <p>1h 57min</p>
            <hr />
            <p>Sin escalas</p>
          </div>
          <p className="number_vuelo">06:47 PM</p>
          <div className="maleta1">
            <p>1 objeto personal</p>
            <p>$120.000</p>
          </div>
          <div className="maleta2">
            <p>Equipaje de mano</p>
            <p>$240.000</p>
          </div>
          <div className="maleta3">
            <p>Equipaje 25Kg</p>
            <p>$320.000</p>
          </div>
        </div>
      </div>
    </>
 
  )
}
 
export default VuelosSalida;