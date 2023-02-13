import { useNavigate } from "react-router-dom";

import InfoRecervacion from "./seleccionVuelos/InfoRecervacion";
import VuelosRegreso from "./seleccionVuelos/VuelosRegreso";
import VuelosSalida from "./seleccionVuelos/VuelosSalida";

const ConfirmacionVuelos = ({ objetoApiVulos }) => {

  const navigate = useNavigate();

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
        <VuelosSalida objetoApiVulos={objetoApiVulos} />
        {objetoApiVulos?.tipoVuelo && (
          <>
            <VuelosRegreso objetoApiVulos={objetoApiVulos} />
          </>
        )}
      </div>
      {/* info reservación */}
      <InfoRecervacion
        // handleAsientos={handleAsientos}
        objetoApiVulos={objetoApiVulos}
        // addArrayNumeros={addArrayNumeros}
      />
    </div>
  );
};

export default ConfirmacionVuelos;
