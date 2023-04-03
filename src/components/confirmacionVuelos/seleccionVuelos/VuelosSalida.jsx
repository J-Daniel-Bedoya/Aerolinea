import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setValorMaletas } from "../../../store/slices/valorMaletas.slice";

const VuelosSalida = ({ apiVuelos }) => {
  const dispatch = useDispatch();

  const [color, setColor] = useState(0);

  const maletas = (v1, v2) => {
    dispatch(setValorMaletas(v1));
    setColor(v2);
  };

  return (
    <>
      <div className="vuelo_salida">
        <div className="title_vuelo">
          <h1 className="title_salida">Vuelo de salida</h1>
        </div>
        <div className="title_datos">
          <p className="title_fechasVuelo">{apiVuelos?.fechaSalida}</p>
          <p className="title_paisVuelo">
            De {apiVuelos?.paisOrigen} a {apiVuelos?.paisDestino}
          </p>
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
          <div
            onClick={() => maletas(120.0, 1)}
            style={{
              backgroundColor: color === 1 && "#4925ec",
              color: color === 1 && "#fff",
            }}
            className="maleta1"
          >
            <p>1 objeto personal</p>
            <p>$120.000</p>
          </div>
          <div
            onClick={() => maletas(240.0, 2)}
            style={{
              backgroundColor: color === 2 && "#4925ec",
              color: color === 2 && "#fff",
            }}
            className="maleta2"
          >
            <p>Equipaje de mano</p>
            <p>$240.000</p>
          </div>
          <div
            onClick={() => maletas(320.0, 3)}
            style={{
              backgroundColor: color === 3 && "#4925ec",
              color: color === 3 && "#fff",
            }}
            className="maleta3"
          >
            <p>Equipaje 25Kg</p>
            <p>$320.000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VuelosSalida;
