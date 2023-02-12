import axios from "axios"; // con esto puedo consumir una api
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"; //esta es la librería para formularios
import SelecionarPaisDestino from "./SeleccionarPaisDestino"; // este es el componente para seleccionar un país
import SeleccionCantidadPersonas from "./SeleccionCantidadPersonas"; //este es el componente para seleccionar cantidad de personas
import SeleccionarFecha from "./SeleccionarFecha";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMostrarSelccionPais } from "../../store/slices/infoPaisApi.slice";


const Home = ({objetoApi, setObjetoApi}) => {
  const dispatch = useDispatch();
  const mostrarSeleccionPais = useSelector((state) => state.infoPaisApi);
  // esta es la url de la api mymapi
  const urlPais =
    "https://api.mymappi.com/v2/geocoding/reverse?apikey=c829b7f1-0151-42ab-83b8-a7d1c7528d81";
  // const apiInfoVuelos = "https://server-vuelos-production.up.railway.app/api/vuelos"
  const apiInfoVuelos = "https://apiaerolinea-production.up.railway.app/api/v1";

  const { handleSubmit } = useForm(); // este es el formulario que contiene todos los datos del vuelo
  const [typeVuelo, setTypeVuelo] = useState(null);
  // pais origen y de destino
  const [paisOrigen, setPaisOrigen] = useState(""); //este contiene el pais en el que recide la persona que hace la recervacion
  // const [mostrarSeleccionPais, setMostrarSeleccionPais] = useState(''); //este contiene el nombre del país seleccionado
  // total de personas a viajar
  const [adultos, setAdultos] = useState(0); //este es el total de adultos que viajaran
  const [niños, setNiños] = useState(0); //este es el total de niños que viajaran
  const [bebes, setBebes] = useState(0); //este es el total de bebés que viajaran
  // cambios
  // const [objetoApi, setObjetoApi] = useState({});
  // modales
  const [modalSeleccionPais, setModalSeleccionPais] = useState(false); // este es el boton del modal para selecionar pais
  const [modalSeleccionFecha, setModalSeleccionFechas] = useState(false); //este es el boton para selecionar fechas
  const [modalSeleccionCantidadPersonas, setModalSeleccionCantidadPersonas] =
    useState(false); //este es el boton para selcionar catidad de personas


  // fechas
  const [selecionAñoSalida, setSelecionAñoSalida] = useState(0);
  const [selecionAñoRegreso, setSelecionAñoRegreso] = useState(0);
  const [mesElegidoSalida, setMesElegidoSalida] = useState("");
  const [mesElegidoRegreso, setMesElegidoRegreso] = useState("");
  const [diaSalida, setDiaSalida] = useState(0);
  const [diaRegreso, setDiaRegreso] = useState(0);
  // navegación
  const navigate = useNavigate();
  const [datos, setDatos] = useState({});
  // consumo de apis
  const getPeticionApiVuelos = () => {
    axios
      .get(`${apiInfoVuelos}/recerva/2`)
      .then((res) => {
        setObjetoApi(res.data);
        setDatos(res.data);
      })
      .catch((err) => console.log(err));
  };

  const putPeticionApiVuelos = (registroVuelos) => {
    axios
      .put(
        `${apiInfoVuelos}/recerva/1`,
        registroVuelos
      )
      .then((res) => {
        setObjetoApi(res.data);
        Swal.fire({
          icon: "success",
          title: "Recervación exitosa",
          timer: 4000,
          text: "Tu recervación ha sido agregada correctamente",
          customClass: {
            confirmButton: "btn btn-success",
          },
          confirmButtonText: "Listo",
        });
        
      })
      .catch((error) => console.log(error));
  };

  const fechaSalida = `${diaSalida}/${mesElegidoSalida}/${selecionAñoSalida}`;
  const fechaLlegada = `${diaRegreso}/${mesElegidoRegreso}/${selecionAñoRegreso}`

  const submit = async () => {

    const registroVuelos = {
      tipoVuelo: typeVuelo,
      paisOrigen: paisOrigen,
      paisDestino: mostrarSeleccionPais,
      salida: fechaSalida,
      regreso: fechaLlegada,
      adultos: adultos,
      niños: niños,
      bebes: bebes,
    };

    putPeticionApiVuelos(registroVuelos);
    getPeticionApiVuelos();
    navigate("/confirmacion_vuelos");
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
    }
    dispatch(setMostrarSelccionPais());
    getPeticionApiVuelos();
  }, []);
  // esta funcion consume la APPI de mymappi para poder obtener el nombre del país de donde recide la persona
  const paisOrigenGeolocalizacion = (log, lat) => {
    axios
      .get(`${urlPais}&lat=${log}&lon=${lat}`)
      .then((res) => {
        setPaisOrigen(res.data.data.address.country);
        // console.log(res.data.data.address.country)
      })
      .catch((error) => console.log(error));
  };
  // esta funcion cuando se ejecuta me trae el nombre del país elegido
  const seleccionPais = (dato) => {
    dispatch(setMostrarSelccionPais(dato));
    setModalSeleccionPais(!modalSeleccionPais);
    getPeticionApiVuelos();
  };
  // esta funcion cuando se ejecuta me trae el nombre la cantidad de personas que iran de viaje
  const totalPersonas = (adultos, niños, bebes) => {
    setModalSeleccionCantidadPersonas(!modalSeleccionCantidadPersonas);
    setAdultos(adultos);
    setNiños(niños);
    setBebes(bebes);
    getPeticionApiVuelos();
    setNumActual(false);
  };

  const infoFechaRecerva = (
    selecionAñoSalida,
    selecionAñoRegreso,
    mesElegidoSalida,
    mesElegidoRegreso,
    diaSalida,
    diaRegreso
  ) => {
    setModalSeleccionFechas(!modalSeleccionFecha);
    setSelecionAñoSalida(selecionAñoSalida);
    setSelecionAñoRegreso(selecionAñoRegreso);
    setMesElegidoSalida(mesElegidoSalida);
    setMesElegidoRegreso(mesElegidoRegreso);
    setDiaSalida(diaSalida);
    setDiaRegreso(diaRegreso);
  };

  return (
    <div className="Home">
      <div className="home__title--description">
        <h2>Busca un nuevo destino y comienza la aventura.</h2>
        <h4 className="title_card2" htmlFor="vuelo">
          Descubre vuelos al mejor precio y perfectos para cualquier vieaje.
        </h4>
      </div>

      <div className="Home__card">
        <div className="Home__card--content">
          {/* formulario de registro para vuelos */}
          <form onSubmit={handleSubmit(submit)}>
            {/* Tipo de vuelos */}
            <div className="vuelo_style">
              <h2>Vuelo</h2>
              <input
                onClick={() => setTypeVuelo(true)}
                type="radio"
                id="redondo"
                name="vuelo"
              />{" "}
              <label htmlFor="redondo">Redondo</label>
              <input
                onClick={() => setTypeVuelo(false)}
                type="radio"
                id="sencillo"
                name="vuelo"
              />
              <label htmlFor="sencillo">Sencillo</label>
            </div>
            <div className="home__card--selection">
              {/* seleccion destinos */}
              <div className="home__card--destino">
                <div
                  className="selection"
                  id="pais_org"
                  onClick={() => setModalSeleccionPais(!modalSeleccionPais)}
                >
                  <p>Pais de Origen</p>
                  <b>{paisOrigen}</b>
                </div>
                <div
                  className="selection"
                  id="pais_dest"
                  onClick={() => setModalSeleccionPais(!modalSeleccionPais)}
                >
                  <p>Selecione un Destino</p>
                  <b>
                    {mostrarSeleccionPais !== "" ? mostrarSeleccionPais : "---"}
                  </b>
                </div>
              </div>
              {/* seleccion de fechas */}
              <div className="home__card--fechas">
                <div
                  className="selection"
                  id="fecha_sali"
                  onClick={() => setModalSeleccionFechas(!modalSeleccionFecha)}
                >
                  <p>Salida</p>
                  <p>
                    {selecionAñoSalida && mesElegidoSalida && diaSalida 
                      ? `${diaSalida}/${mesElegidoSalida}/${selecionAñoSalida}`
                      : "----"}
                  </p>
                </div>
                <div
                  className="selection"
                  id="fecha_reg"
                  onClick={() => setModalSeleccionFechas(!modalSeleccionFecha)}
                >
                  <p>Regreso</p>
                  <p>
                    {selecionAñoRegreso && mesElegidoRegreso && diaRegreso
                      ? `${diaRegreso}/${mesElegidoRegreso}/${selecionAñoRegreso}`
                      : "----"}
                  </p>
                </div>
              </div>
              {/* cantidad de personas que viajaran */}
              <div
                className="selection"
                onClick={() =>
                  setModalSeleccionCantidadPersonas(
                    !modalSeleccionCantidadPersonas
                  )
                }
              >
                <p>Personas</p>
                <div className="cantidad__personas">
                  <p>
                    {adultos !== 0
                      && `${adultos}`
                    } <i className="fa-solid fa-user"></i>
                  </p>
                  <p>
                    {niños !== 0
                      && `${niños}`
                    } <i className="fa-solid fa-child"></i>
                  </p>
                  <p>
                    {bebes !== 0
                      && `${bebes}`
                    } <i className="fa-solid fa-baby-carriage"></i>
                  </p>
                </div>
              </div>
              <div className="Home__btn--submit">
                <button type="submit" className="btn_vuelo">
                  <i className="fa-solid fa-check"></i>
                </button>
              </div>
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
        {modalSeleccionFecha && (
          <SeleccionarFecha
            infoFechaRecerva={infoFechaRecerva}
            objetoApi={objetoApi}
            selecionAñoSalida2={selecionAñoSalida}
            selecionAñoRegreso2={selecionAñoRegreso}
            mesElegidoSalida2={mesElegidoSalida}
            mesElegidoRegreso2={mesElegidoRegreso}
            diaSalida2={diaSalida}
            diaRegreso2={diaRegreso}
          />
        )}
        {modalSeleccionCantidadPersonas && (
          <SeleccionCantidadPersonas
            totalPersonas={totalPersonas}
            adultos={adultos}
            niños={niños}
            bebes={bebes}
            objetoApi={objetoApi}
          />
        )}
      </div>
    </div>
  );
};
export default Home;
