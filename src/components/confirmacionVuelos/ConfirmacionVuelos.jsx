import React, { useState } from "react";
import SeleccionAsientosRegreso from "./seleccionAsientos/SeleccionAsientosRegreso";
import SeleccionAsientosSalida from "./seleccionAsientos/SeleccionAsientosSalida";
// import { useNavigate } from "react-router-dom";
import InfoRecervacion from "./seleccionVuelos/InfoRecervacion";
import VuelosRegreso from "./seleccionVuelos/VuelosRegreso";
import VuelosSalida from "./seleccionVuelos/VuelosSalida";

const ConfirmacionVuelos = () => {
  // const navigate = useNavigate();

  const [asientos, setAsientos] = useState(false);

  const handleAsientos = () => {
    setAsientos(!asientos);
  }
  return (
    <div className="confirmacion_vuelos">
      <div className="configuracionVuelos_container"> 
        {
          asientos ? (
            <>
              <SeleccionAsientosSalida />
              <SeleccionAsientosRegreso />
            </>
          ) : (
            <>
              <VuelosSalida />
              <VuelosRegreso />
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
