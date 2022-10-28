import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SeleccionAsientosRegreso from "./seleccionAsientos/SeleccionAsientosRegreso";
import SeleccionAsientosSalida from "./seleccionAsientos/SeleccionAsientosSalida";
// import { useNavigate } from "react-router-dom";
import InfoRecervacion from "./seleccionVuelos/InfoRecervacion";
import VuelosRegreso from "./seleccionVuelos/VuelosRegreso";
import VuelosSalida from "./seleccionVuelos/VuelosSalida";

const ConfirmacionVuelos = () => {
  const apiInfoVuelos = "https://aerolineajsonserver-production.up.railway.app/vuelos";

  const navigate = useNavigate();

  const [asientos, setAsientos] = useState(false);

  const handleAsientos = () => {
    setAsientos(!asientos);
  }
  const [objetoApiVulos, setObjetosApiVuelos] = useState({});
  useEffect(() => {
    axios.get(apiInfoVuelos)
    .then(res => {
      setObjetosApiVuelos(res.data[res.data.length-1]);
    })
  }, []);
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
              <SeleccionAsientosSalida objetoApiVulos={objetoApiVulos}/>
              <SeleccionAsientosRegreso objetoApiVulos={objetoApiVulos}/>
              <button onClick={() => navigate("/")} className="btn_cambiarVuelo" id="btn__abajo2">
                Cambiar vuelo
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/")} className="btn_cambiarVuelo btn__arriba">
                Cambiar vuelo
              </button>
              <VuelosSalida objetoApiVulos={objetoApiVulos}/>
              <VuelosRegreso objetoApiVulos={objetoApiVulos}/>
              <button onClick={() => navigate("/")} className="btn_cambiarVuelo" id="btn__abajo1">
                Cambiar vuelo
              </button>
            </>
          )
        }
      </div>
      {/* info reservación */}
      <InfoRecervacion handleAsientos={handleAsientos} objetoApiVulos={objetoApiVulos}/>
    </div>
  );
};

export default ConfirmacionVuelos;
