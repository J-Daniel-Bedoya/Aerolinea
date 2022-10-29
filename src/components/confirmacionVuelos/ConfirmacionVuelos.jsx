import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SeleccionAsientosRegreso from "./seleccionAsientos/SeleccionAsientosRegreso";
import SeleccionAsientosSalida from "./seleccionAsientos/SeleccionAsientosSalida";

import InfoRecervacion from "./seleccionVuelos/InfoRecervacion";
import VuelosRegreso from "./seleccionVuelos/VuelosRegreso";
import VuelosSalida from "./seleccionVuelos/VuelosSalida";

import { getArrayNumerosSalidaIzquierda1Thunck } from "../../store/slices/asientosSalida/asientosIzquierda1.slice";
import { getArrayNumerosSalidaDerecha2Thunck } from "../../store/slices/asientosSalida/asientosDerecha2.slice";
import { getArrayNumerosSalidaIzquierda3Thunck } from "../../store/slices/asientosSalida/asientosIzquierda3.slice";
import { getArrayNumerosSalidaDerecha4Thunck } from "../../store/slices/asientosSalida/asientosDerecha4.slice";

import { getArrayNumerosRegresoIzquierda1Thunck } from "../../store/slices/asientosRegreso/asientosIzquierdaRegreso1.slice";
import { getArrayNumerosRegresoDerecha2Thunck } from "../../store/slices/asientosRegreso/asientosDerechaRegreso2.slice";
import { getArrayNumerosRegresoIzquierda3Thunck } from "../../store/slices/asientosRegreso/asientosIzquierdaRegreso3.slice";
import { getArrayNumerosRegresoDerecha4Thunck } from "../../store/slices/asientosRegreso/asientosDerechaRegreso4.slice";

const ConfirmacionVuelos = () => {
  const apiInfoVuelos = "https://aerolineajsonserver-production.up.railway.app/vuelos";
  const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [asientos, setAsientos] = useState(false);

  const noDisponibleSalidaRapidaIzquierda1 = useSelector(state => state.asientosIzquierda1);
  const noDisponibleSalidaRapidaDerecha1 = useSelector(state => state.asientosDerecha2);
  const noDisponibleEstandarIzquierda1 = useSelector(state => state.asientosIzquierda3);
  const noDisponibleEstandarDerecha1 = useSelector(state => state.asientosDerecha4);

  const noDisponibleSalidaRapidaIzquierda2 = useSelector(state => state.asientosIzquierdaRegreso1);
  const noDisponibleSalidaRapidaDerecha2 = useSelector(state => state.asientosDerechaRegreso2);
  const noDisponibleEstandarIzquierda2 = useSelector(state => state.asientosIzquierdaRegreso3);
  const noDisponibleEstandarDerecha2 = useSelector(state => state.asientosDerechaRegreso4);

  const handleAsientos = () => {
    setAsientos(!asientos);
  }
  const [objetoApiVulos, setObjetosApiVuelos] = useState({});
  
  useEffect(() => {
    axios.get(apiInfoVuelos)
    .then(res => {
      setObjetosApiVuelos(res.data);
    })
  }, []);
  useEffect(() => {
    dispatch(getArrayNumerosSalidaIzquierda1Thunck());
    dispatch(getArrayNumerosSalidaDerecha2Thunck());
    dispatch(getArrayNumerosSalidaIzquierda3Thunck());
    dispatch(getArrayNumerosSalidaDerecha4Thunck());

    dispatch(getArrayNumerosRegresoIzquierda1Thunck());
    dispatch(getArrayNumerosRegresoDerecha2Thunck());
    dispatch(getArrayNumerosRegresoIzquierda3Thunck());
    dispatch(getArrayNumerosRegresoDerecha4Thunck());
  }, [])

  const addArrayNumeros = () => {
    const objectNumber = {
      "id": 1,
      "asientosSalidaIzquierda1": noDisponibleSalidaRapidaIzquierda1,
      "asientosSalidaDerecha2": noDisponibleSalidaRapidaDerecha1,
      "asientosSalidaIzquierda3": noDisponibleEstandarIzquierda1,
      "asientosSalidaDerecha4": noDisponibleEstandarDerecha1,

      "asientosRegresoIzquierda1": noDisponibleSalidaRapidaIzquierda2,
      "asientosRegresoDerecha2": noDisponibleSalidaRapidaDerecha2,
      "asientosRegresoIzquierda3": noDisponibleEstandarIzquierda2,
      "asientosRegresoDerecha4": noDisponibleEstandarDerecha2
    }
    axios.post(arrayNumeros, objectNumber)
    .then(res => console.log(res.data))
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
      <InfoRecervacion handleAsientos={handleAsientos} objetoApiVulos={objetoApiVulos} addArrayNumeros={addArrayNumeros}/>
    </div>
  );
};

export default ConfirmacionVuelos;
