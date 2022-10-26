import React from 'react'
 
const InfoRecervacion = ({handleAsientos}) => {
  return (
    <>
      <div className="info__reservacion">
        <div className="info__reservacion--container1">
          <p>Tu reservacion</p>
          <div className="info__div">
            <div className="info__pasajeros" id="info__pasajeros">
              <p>pasajeros</p>
              <div>
                <p>1 adulto</p>
                <p>1 niños</p>
                <p>1 bebes</p>
              </div>
            </div>
            <div className="info__date">
              <div className="info__div--date">
                <p className="p">Vuelo de salida</p>
                <div className="info__div--text">
                  <div className="info__salida">
                    <p>COL</p>
                    <p>_____</p>
                    <p>BR</p>
                  </div>
                  <div className="info__hora">
                    <p>05:45 PM </p>
                    <p>06:47 PM</p>
                  </div>
                  <p className="fecha__text">Martes, 30 noviembre, 2021</p>
                </div>
              </div>
              <div className="info__div--date">
                <p className="p">Vuelo de regreso</p>
                <div className="info__div--text">
                  <div className="info__salida">
                    <p>COL</p>
                    <p>_____</p>
                    <p>BR</p>
                  </div>
                  <div className="info__hora">
                    <p>05:45 PM </p>
                    <p>06:47 PM</p>
                  </div>
                  <p className="fecha__text">Martes, 30 noviembre, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="title_costoVuelo">Costo Vuelo</h4>
          <div className="card_costoVuelo">
            <div className="tarifa_base">
              <p>tarifa base</p>
              <p>$450.000</p>
            </div>
            <div className="costo_equipaje">
              <p>Costo equipaje</p>
              <p>$120.000</p>
            </div>
            <div className="costo_total">
              <p>Total</p>
              <p>$450.000</p>
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => handleAsientos()} className="btn_seleccionarAsientos" >Seleccionar asientos</button>
        </div>
      </div>
    </>
 
  )
}
 
export default InfoRecervacion;