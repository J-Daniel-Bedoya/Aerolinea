import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmacionVuelos = () => {
  const navigate = useNavigate();
  return (
    <div className="confirmacion_vuelos">
      <div className="configuracionVuelos_container">
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
      </div>
      {/* info reservación */}
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
            <button className="btn_seleccionarAsientos">Seleccionar asientos</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionVuelos;
