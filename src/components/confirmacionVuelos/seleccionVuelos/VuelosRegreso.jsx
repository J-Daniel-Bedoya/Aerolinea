import React from 'react'
 
const VuelosRegreso = () => {
  return (
    <>
      <div className="vuelo_regreso">
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
        <div className="info_vuelo">
          <p className="number_vuelo">07:28 AM</p>
          <div>
            <p>1h 57min</p>
            <hr />
            <p>Sin escalas</p>
          </div>
          <p className="number_vuelo">10:08 AM</p>
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
 
export default VuelosRegreso;