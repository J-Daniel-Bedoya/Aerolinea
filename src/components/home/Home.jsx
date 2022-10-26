import axios from "axios"; // con esto puedo consumir una api
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"; //esta es la librería para formularios
import SelecionarPaisDestino from "./SeleccionarPaisDestino"; // este es el componente para seleccionar un país
import SeleccionCantidadPersonas from "./SeleccionCantidadPersonas"; //este es el componente para seleccionar cantidad de personas
import imagenAvion from "../../assets/imgs/avion.png";
import SeleccionarFecha from "./SeleccionarFecha";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMostrarSelccionPais } from "../../store/slices/infoPaisApi.slice";
// import Pagos from "./Pagos";

const Home = () => {
  const dispatch = useDispatch()
  const mostrarSeleccionPais = useSelector((state) => state.infoPaisApi)
  // esta es la url de la api mymapi
  const urlPais =
    "https://api.mymappi.com/v2/geocoding/reverse?apikey=c829b7f1-0151-42ab-83b8-a7d1c7528d81";
  const apiInfoVuelos = "https://server-vuelos-production.up.railway.app/api/vuelos"
  // const apiInfoVuelos = "https://servidor-casero-production.up.railway.app/users"
  const { register, handleSubmit } = useForm(); // este es el formulario que contiene todos los datos del vuelo
  // pais origen y de destino
  const [paisOrigen, setPaisOrigen] = useState(""); //este contiene el pais en el que recide la persona que hace la recervacion
  // const [mostrarSeleccionPais, setMostrarSeleccionPais] = useState(''); //este contiene el nombre del país seleccionado
  // total de personas a viajar
  const [adultos, setAdultos] = useState(0); //este es el total de adultos que viajaran
  const [niños, setNiños] = useState(0); //este es el total de niños que viajaran
  const [bebes, setBebes] = useState(0); //este es el total de bebés que viajaran
  // cambios
  const [objetoApi, setObjetoApi] = useState({});
  // modales
  const [modalSeleccionPais, setModalSeleccionPais] = useState(false); // este es el boton del modal para selecionar pais
  const [modalSeleccionFecha, setModalSeleccionFechas] = useState(false); //este es el boton para selecionar fechas
  const [modalSeleccionCantidadPersonas, setModalSeleccionCantidadPersonas] = useState(false); //este es el boton para selcionar catidad de personas
  const [numActual, setNumActual] = useState(true)

  // fechas
  const [selecionAñoSalida, setSelecionAñoSalida] = useState(0)
  const [selecionAñoRegreso, setSelecionAñoRegreso] = useState(0)
  const [mesElegidoSalida, setMesElegidoSalida] = useState("")
  const [mesElegidoRegreso, setMesElegidoRegreso] = useState("")
  const [diaSalida, setDiaSalida] = useState(0)
  const [diaRegreso, setDiaRegreso] = useState(0)
  // navegación
  const navigate = useNavigate()

  // consumo de apis
  const getPeticionApiVuelos = () => {
    axios.get(apiInfoVuelos)
    .then(res => {
      console.log(res.data.data[res.data.data.length-1])
      setObjetoApi(res.data.data[res.data.data.length-1])
    })
    .catch(err => console.log(err))
  }
  const postPeticionApiVuelos = (registroVuelos) => {
    axios.post(apiInfoVuelos, registroVuelos)
    .then((res) => {
      getPeticionApiVuelos()
      // setObjetoApi(res.data)
      // console.log(res.data)
    })
    .catch(error => console.log(error))
  }
  // esta es la funcion que me llevará a la siguiente página
  const submit = async(form) => { 
    const registroVuelos = {
      "tipoVuelo": {
        "redondo": false,
        "sencillo": false
      },
      "paisOrigen": paisOrigen,
      "paisDestino": mostrarSeleccionPais,
      "fechaSalida": `${diaSalida}/${mesElegidoSalida}/${selecionAñoSalida}`,
      "fechaLlegada": `${diaRegreso}/${mesElegidoRegreso}/${selecionAñoRegreso}`,
      "cupon": false,
      "totalPersonas": {
          "adultos": adultos,
          "niños": niños,
          "bebes": bebes
      }
    }
    console.log(adultos)
    postPeticionApiVuelos(registroVuelos)
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
    dispatch(setMostrarSelccionPais())
    getPeticionApiVuelos()
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
    dispatch(setMostrarSelccionPais(dato))
    setModalSeleccionPais (!modalSeleccionPais)
    getPeticionApiVuelos()
  }
// esta funcion cuando se ejecuta me trae el nombre la cantidad de personas que iran de viaje
  const totalPersonas = (adultos, niños, bebes) => {
    setModalSeleccionCantidadPersonas(!modalSeleccionCantidadPersonas);
    setAdultos(adultos);
    setNiños(niños);
    setBebes(bebes);
    getPeticionApiVuelos()
    setNumActual(false)
  };

  const infoFechaRecerva = (
    selecionAñoSalida,
    selecionAñoRegreso,
    mesElegidoSalida,
    mesElegidoRegreso,
    diaSalida,
    diaRegreso
  ) => {
    setModalSeleccionFechas(!modalSeleccionFecha)
    setSelecionAñoSalida(selecionAñoSalida)
    setSelecionAñoRegreso(selecionAñoRegreso)
    setMesElegidoSalida(mesElegidoSalida)
    setMesElegidoRegreso(mesElegidoRegreso)
    setDiaSalida(diaSalida)
    setDiaRegreso(diaRegreso)
  }
  

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
                  type="checkbox"
                  name="redondo"
                  {...register("redondo")}
                />
              </label>
              <label htmlFor="">
                Vuelo sencillo
                <input 
                  type="checkbox" 
                  name="sencillo" 
                  {...register("sencillo")} 
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
                <p>{mostrarSeleccionPais !== "" ? mostrarSeleccionPais : "---"}</p>
                <p>Selecione un destino</p>
              </div>


              <div className="selection" onClick={() => setModalSeleccionFechas(!modalSeleccionFecha)}>
                <p>Salida</p>
                <p>{ 
                    selecionAñoSalida ? 
                    `${diaSalida}/${mesElegidoSalida}/${selecionAñoSalida}` :
                    objetoApi.fechaSalida !== "22/10/2022" ?  
                    `${objetoApi.fechaSalida}` : "----"}
                </p>
              </div>
              <div className="selection" onClick={() => setModalSeleccionFechas(!modalSeleccionFecha)}>
                <p>Regreso</p>
                <p>{
                    numActual ? 
                    `${objetoApi.fechaLlegada}` :
                    selecionAñoRegreso ? 
                    `${diaRegreso}/${mesElegidoRegreso}/${selecionAñoRegreso}` : "----"}</p>
              </div>


              <div className="selection" onClick={() => setModalSeleccionCantidadPersonas(!modalSeleccionCantidadPersonas)}>
                <b>Personas</b>
                <div>
                  <p>
                    {
                      numActual ? 
                      ` ${objetoApi?.totalPersonas?.adultos} Adultos` :
                      adultos !== null ? `${adultos} Adultos` : "--"
                    }
                  </p>
                  <p>
                    { 
                      numActual ? 
                      `${objetoApi?.totalPersonas?.niños} Niños`:
                      niños !== null ? `${niños} Niños` : "--" 
                    }
                  </p>
                  <p>
                    { 
                      numActual ?
                      `${objetoApi?.totalPersonas?.bebes} Bebés`:
                      bebes !== null ? `${bebes} Bebes` : "--"
                    }
                  </p>
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
          <SeleccionarFecha 
            infoFechaRecerva={infoFechaRecerva}
            objetoApi={objetoApi}
          />
        }
        {modalSeleccionCantidadPersonas && 
          <SeleccionCantidadPersonas 
          totalPersonas={totalPersonas}
          adultos={adultos}
          niños={niños}
          bebes={bebes}
          objetoApi={objetoApi}
          />
        }
      </div>

    </div>
  );
};
export default Home;

