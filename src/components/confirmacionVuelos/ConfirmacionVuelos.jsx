import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmacionVuelos = () => {
  const navigate = useNavigate();
  return (
    <div className="confirmacion_vuelos">
      <div className="configuracionVuelos_container">
      <div className="vuelo_salida">
        <div className="title_vuelo">
          <h1>Vuelo de salida</h1>
          <button onClick={() => navigate("/")} className="btn_cambiarVuelo">
            Cambiar vuelo
          </button>
        </div>
        <div className="title_datos">
          <p>Martes 30 noviembre 2021</p>
          <p>Colombia a Brasil</p>
          <p>Seleccion de horarios y equipajes</p>
        </div>
        <div className="info_vuelo">
          <p>05:50 PM</p>
          <div>
            <p>1h 57min</p>
            <hr />
            <p>Sin escalas</p>
          </div>
          <p>06:47 PM</p>
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
          <p>Miercoles 8 diciembre 2021</p>
          <p>Brasil a Colombia</p>
          <p>Seleccion de horarios y equipajes</p>
        </div>
        <div className="info_vuelo">
          <p>07:28 AM</p>
          <div>
            <p>1h 57min</p>
            <hr />
            <p>Sin escalas</p>
          </div>
          <p>10:08 AM</p>
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
      <div className="info_reservacion">
        <p>Tu reservacion</p>
        <div className="info_pasajeros">
          <p>pasajeros</p>
          <div>
            <p>1 adulto</p>
            <p>1 niños</p>
            <p>1 bebes</p>
          </div>
        </div>
          <p>Vuelo de salida</p>
          <div className="info_salida">
            <p>COL</p>
            <p>------</p>
            <p>BR</p>
          </div>
          <div className="info_hora">
            <p>05:45 PM </p>
            <p>06:47 PM</p>
          </div>
          <p>Martes, 30 noviembre, 2021</p>
      </div>
      <div>
        <div>
          <div>
            <p>tarifa base</p>
            <p>$450.000</p>
          </div>
          <div>
            <p>Total</p>
            <p>$450.000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionVuelos;
