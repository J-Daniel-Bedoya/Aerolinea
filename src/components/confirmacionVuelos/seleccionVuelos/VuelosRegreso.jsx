import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setValorMaletas2 } from "../../../store/slices/valorMaletas2.slice";

const VuelosRegreso = ({ apiVuelos }) => {
  const dispatch = useDispatch();

  const [color, setColor] = useState(0);

  const maletas = (v1, v2) => {
    dispatch(setValorMaletas2(v1));
    setColor(v2);
  };

  return (
    <>
      <div className="vuelo_regreso">
        <div className="title_vuelo">
          <h1>Vuelo de regreso</h1>
        </div>
        <div className="title_datos">
          <p className="title_fechasVuelo">{apiVuelos?.fechaLlegada}</p>
          <p className="title_paisVuelo">
            De {apiVuelos?.paisDestino} a {apiVuelos?.paisOrigen}
          </p>
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
          <div
            onClick={() => maletas(120.0, 1)}
            style={{
              backgroundColor: color === 1 && "#a789c2",
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
              backgroundColor: color === 2 && "#a789c2",
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
              backgroundColor: color === 3 && "#a789c2",
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

export default VuelosRegreso;
