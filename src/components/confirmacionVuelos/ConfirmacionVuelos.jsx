import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SeleccionAsientosRegreso from "./seleccionAsientos/SeleccionAsientosRegreso";
import SeleccionAsientosSalida from "./seleccionAsientos/SeleccionAsientosSalida";
// import { useNavigate } from "react-router-dom";
import InfoRecervacion from "./seleccionVuelos/InfoRecervacion";
import VuelosRegreso from "./seleccionVuelos/VuelosRegreso";
import VuelosSalida from "./seleccionVuelos/VuelosSalida";

const ConfirmacionVuelos = () => {
  const navigate = useNavigate();

  const [asientos, setAsientos] = useState(false);

  const handleAsientos = () => {
    setAsientos(!asientos);
  }
  return (
    <div className="confirmacion_vuelos">
      <div className="configuracionVuelos_container"> 
        <button onClick={() => navigate("/")} className="btn_cambiarVuelo btn__arriba">
          Cambiar vuelo
        </button>
        {
          asientos ? (
            <>
              <button onClick={() => navigate("/")} className="btn_cambiarVuelo btn__arriba">
                Cambiar vuelo
              </button>
              <SeleccionAsientosSalida />
              <SeleccionAsientosRegreso />
              <button onClick={() => navigate("/")} className="btn_cambiarVuelo" id="btn__abajo2">
                Cambiar vuelo
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/")} className="btn_cambiarVuelo btn__arriba">
                Cambiar vuelo
              </button>
              <VuelosSalida />
              <VuelosRegreso />
              <button onClick={() => navigate("/")} className="btn_cambiarVuelo" id="btn__abajo1">
                Cambiar vuelo
              </button>
            </>
          )
        }
      </div>
      {/* info reservación */}
      <InfoRecervacion handleAsientos={handleAsientos}/>
    </div>
  );
};

export default ConfirmacionVuelos;
