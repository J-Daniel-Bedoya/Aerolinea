import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import InfoRecervacion from "./seleccionVuelos/InfoRecervacion";
import VuelosRegreso from "./seleccionVuelos/VuelosRegreso";
import VuelosSalida from "./seleccionVuelos/VuelosSalida";

const ConfirmacionVuelos = () => {

  const apiInfoVuelos = "https://apiaerolinea-production.up.railway.app/api/v1";
  const navigate = useNavigate();
  const [objetoApiVuelos, setObjetoApiVuelos] = useState([]);

  useEffect(() => {
    axios.get(`${apiInfoVuelos}/recerva`)
    .then(res => {
      setObjetoApiVuelos(res.data)
    })
  }, [])
  const apiVuelos = objetoApiVuelos[objetoApiVuelos?.length-1]


  return (
    <div className="confirmacion_vuelos">
      <div className="configuracionVuelos_container">
        <button
          onClick={() => navigate("/")}
          className="btn_cambiarVuelo btn__arriba"
        >
          Cambiar vuelo
        </button>
        <button
          onClick={() => navigate("/")}
          className="btn_cambiarVuelo btn__arriba"
        >
          Cambiar vuelo
        </button>
        <VuelosSalida apiVuelos={apiVuelos} />
        {apiVuelos?.tipoVuelo && (
          <>
            <VuelosRegreso apiVuelos={apiVuelos} />
          </>
        )}
      </div>
      {/* info reservación */}
      <InfoRecervacion
        // handleAsientos={handleAsientos}
        apiVuelos={apiVuelos}
        // addArrayNumeros={addArrayNumeros}
      />
    </div>
  );
};

export default ConfirmacionVuelos;
