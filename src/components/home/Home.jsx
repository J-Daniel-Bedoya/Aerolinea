import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SelecionarPaisDestino from "./SeleccionarPaisDestino";
import imagenAvion from "../../../images/avion.png";

const Home = () => {
  const urlPais =
    "https://api.mymappi.com/v2/geocoding/reverse?apikey=c829b7f1-0151-42ab-83b8-a7d1c7528d81";

  const { register, handleSubmit } = useForm();
  const [paisOrigen, setPaisOrigen] = useState("");
  const [modalSeleccionPais, setModalSeleccionPais] = useState(false);
  const [modalSeleccionFecha, setModalSeleccionFechas] = useState(false);
  const [mostrarSeleccionPais, setMostrarSeleccionPais] = useState("");
  const submit = (form) => {
    console.log(form);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
      const coordenadas = pos.coords;
      const latitud = coordenadas.latitude;
      const longitud = coordenadas.longitude;

      paisOrigenGeolocalizacion(latitud, longitud);
    }
  }, []);
  const paisOrigenGeolocalizacion = (log, lat) => {
    axios
      .get(`${urlPais}&lat=${log}&lon=${lat}`)
      .then((res) => {
        setPaisOrigen(res.data.data.address.country);
      })
      .catch((error) => console.log(error));
  };

  const seleccionPais = (dato) => {
    setMostrarSeleccionPais(dato);
    setModalSeleccionPais(!modalSeleccionPais);
  };
  return (
    <div className="Home">
      <img src={imagenAvion} className="imgAvion" />
      <div className="Home__card">
        <h2>
          Busca un nuevo destino y <br /> comienza la aventura.
        </h2>
        <p className="title_card2">
          Descubre vuelos al mejor precio y perfectos para cualquier vieaje.
        </p>

        <form onSubmit={handleSubmit(submit)}>
          <div className="vuelo_style">
            <label htmlFor="">
              Vuelo redondo
              <input
                type="radio"
                name="redondo"
                {...register("vuelo")}
                checked
              />
            </label>
            <label htmlFor="">
              Vuelo sencillo
              <input type="radio" name="sencillo" {...register("vuelo")} />
            </label>
          </div>
          <div className="Home__card--selection">
            <div className="selection" id="pais_org">
              <p>{paisOrigen}</p>
              <p>pais origen</p>
            </div>
            <div
              className="selection"
              onClick={() => setModalSeleccionPais(!modalSeleccionPais)}
              id="pais_dest"
            >
              <p>{mostrarSeleccionPais ? mostrarSeleccionPais : "---"}</p>
              <p>Selecione un destino</p>
            </div>
            <div className="selection">
              <p>Salid</p>
            </div>
            <div className="selection">
              <p>Regreso</p>
            </div>
            <div className="selection">
              <p>Cantidad pasajeros</p>
            </div>
            <div className="selection">
              <p>Codigos de promoción</p>
            </div>
          </div>
          <div>
            <button className="btn_vuelo">Buscar vuelos</button>
          </div>
        </form>
        <div></div>
      </div>
      {modalSeleccionPais && (
        <SelecionarPaisDestino
          setModalSeleccionPais={setModalSeleccionPais}
          modalSeleccionPais={modalSeleccionPais}
          seleccionPais={seleccionPais}
        />
      )}
    </div>
  );
};
export default Home;