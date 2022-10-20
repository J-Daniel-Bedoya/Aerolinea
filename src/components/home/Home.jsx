import axios from "axios"; // con esto puedo consumir una api
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"; //esta es la librería para formularios
import SelecionarPaisDestino from "./SeleccionarPaisDestino"; // este es el componente para seleccionar un país
import SeleccionCantidadPersonas from "./SeleccionCantidadPersonas"; //este es el componente para seleccionar cantidad de personas
import imagenAvion from "../../assets/imgs/avion.png";
import SeleccionarFecha from "./SeleccionarFecha";
import { useNavigate } from "react-router-dom";
// import Pagos from "./Pagos";

const Home = () => {

  // esta es la url de la api mymapi
  const urlPais =
    "https://api.mymappi.com/v2/geocoding/reverse?apikey=c829b7f1-0151-42ab-83b8-a7d1c7528d81";
  const apiInfoVuelos = "https://json-server-production-7eee.up.railway.app/registroVuelo"
  const { register, handleSubmit } = useForm(); // este es el formulario que contiene todos los datos del vuelo
  // pais origen y de destino
  const [paisOrigen, setPaisOrigen] = useState(""); //este contiene el pais en el que recide la persona que hace la recervacion
  const [mostrarSeleccionPais, setMostrarSeleccionPais] = useState(''); //este contiene el nombre del país seleccionado
  // total de personas a viajar
  const [adultos, setAdultos] = useState(null); //este es el total de adultos que viajaran
  const [niños, setNiños] = useState(null); //este es el total de niños que viajaran
  const [bebes, setBebes] = useState(null); //este es el total de bebés que viajaran
  // modales
  const [modalSeleccionPais, setModalSeleccionPais] = useState(false); // este es el boton del modal para selecionar pais
  const [modalSeleccionFecha, setModalSeleccionFechas] = useState(false); //este es el boton para selecionar fechas
  const [modalSeleccionCantidadPersonas, setModalSeleccionCantidadPersonas] = useState(false); //este es el boton para selcionar catidad de personas
  // navegación
  const navigate = useNavigate()
  // esta es la funcion que me llevará a la siguiente página
  const submit = (form) => {
    const registroVuelo = {
      "id": 1,
      "tipoVuelo": form,
      "paísOrigen": paisOrigen,
      "Destino": mostrarSeleccionPais,
      "totalPersonas": {
        "adultos": adultos,
        "niños": niños,
        "bebes": bebes
      } 
    }
    axios.put(`${apiInfoVuelos}`, registroVuelo)
    .catch(error => console.log(error))
    navigate("/confirmacion_vuelos")
    
  };
// este useEffect contiene la localización de la persona que hace la recerva
// es una función predeterminada que se encuentra MDN Docs
  useEffect(() => { 
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
      const coordenadas = pos.coords;
      const latitud = coordenadas.latitude;
      const longitud = coordenadas.longitude;

      paisOrigenGeolocalizacion(latitud, longitud);
    };
  }, []);
// esta funcion consume la APPI de mymappi para poder obtener el nombre del país de donde recide la persona
const paisOrigenGeolocalizacion = (log, lat) => {
  axios.get(`${urlPais}&lat=${log}&lon=${lat}`)
      .then((res) => {
        setPaisOrigen(res.data.data.address.country);
      })
      .catch((error) => console.log(error));
  };
// esta funcion cuando se ejecuta me trae el nombre del país elegido
  const seleccionPais = (dato) => {
    setMostrarSeleccionPais (dato)
    setModalSeleccionPais (!modalSeleccionPais)
  }
// esta funcion cuando se ejecuta me trae el nombre la cantidad de personas que iran de viaje
  const totalPersonas = (adultos, niños, bebes) => {
    setModalSeleccionCantidadPersonas(!modalSeleccionCantidadPersonas);
    setAdultos(adultos);
    setNiños(niños);
    setBebes(bebes);
  };


  return (
    <div className="Home">

      <div className="Home__card">
        <img src={imagenAvion} className="imgAvion" />
        <div className="Home__card--content">
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
                <input 
                  type="radio" 
                  name="sencillo" 
                  {...register("vuelo")} 
                />
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


              <div className="selection" onClick={() => setModalSeleccionFechas(!modalSeleccionFecha)}>
                <p>Salid</p>
              </div>
              <div className="selection" onClick={() => setModalSeleccionFechas(!modalSeleccionFecha)}>
                <p>Regreso</p>
              </div>


              <div className="selection" onClick={() => setModalSeleccionCantidadPersonas(!modalSeleccionCantidadPersonas)}>
                <b>Personas</b>
                <div>
                  <p>{adultos>0 && ` ${adultos} Adultos`}</p>
                  <p>{niños>0 && `${niños} Niños`}</p>
                  <p>{bebes>0 && `${bebes} Bebés`}</p>
                </div>
              </div>
              <div className="selection">
                <p>Codigos de promoción</p>
              </div>
            </div>
            <div className="Home__btn--submit">
              <button className="btn_vuelo">Buscar vuelos</button>
            </div>
          </form>
          <div></div>
        </div>
        {modalSeleccionPais && 
          <SelecionarPaisDestino 
          setModalSeleccionPais={setModalSeleccionPais} 
          modalSeleccionPais={modalSeleccionPais}
          seleccionPais={seleccionPais}
        />}
        {
          modalSeleccionFecha && 
          <SeleccionarFecha />
        }
        {modalSeleccionCantidadPersonas && 
          <SeleccionCantidadPersonas 
          totalPersonas={totalPersonas}
          />
        }
      </div>

    </div>
  );
};
export default Home;