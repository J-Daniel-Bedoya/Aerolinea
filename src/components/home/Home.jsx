import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SelecionarPaisDestino from "./SeleccionarPaisDestino";

const Home = () => {

  // esta es la url de la api mymapi
  const urlPais =
    "https://api.mymappi.com/v2/geocoding/reverse?apikey=c829b7f1-0151-42ab-83b8-a7d1c7528d81";
  const { register, handleSubmit } = useForm();
  const [paisOrigen, setPaisOrigen] = useState("");
  const [modalSeleccionPais, setModalSeleccionPais] = useState(false)
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
    };
  }, []);
const paisOrigenGeolocalizacion = (log, lat) => {
  axios.get(`${urlPais}&lat=${log}&lon=${lat}`)
      .then((res) => {
        setPaisOrigen(res.data.data.address.country);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="Home">
      <div className="Home__card">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>

        <form onSubmit={handleSubmit(submit)}>
          <div>
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
              <input 
                type="radio" 
                name="sencillo" 
                {...register("vuelo")} 
              />
            </label>
          </div>
          <div className="Home__card--selection">
            <div>
              <p>{paisOrigen}</p>
              <p>pais origen</p>
            </div>
            <div onClick={() => setModalSeleccionPais(!modalSeleccionPais)}>
              <p>----</p>
              <p>Selecione un destino</p>
              {modalSeleccionPais ? <SelecionarPaisDestino /> : ""}
            </div>
            <div>
              <p>Salid</p>
            </div>
            <div>
              <p>Regreso</p>
            </div>
            <div>
              <p>Cantidad pasajeros</p>
            </div>
            <div>
              <p>Codigos de promoción</p>
            </div>
          </div>
          <div>
            <button>Vuelo</button>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
