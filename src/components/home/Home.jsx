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


const Home = () => {
  const dispatch = useDispatch();
  const mostrarSeleccionPais = useSelector((state) => state.infoPaisApi);
  // esta es la url de la api mymapi
  
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
  const [objetoApiVuelos, setObjetoApiVuelos] = useState([]);
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

  // consumo de apis
  const getPeticionApiVuelos = () => {
    axios
      .get(`${apiInfoVuelos}/recerva`)
      .then((res) => {
        setObjetoApiVuelos(res.data);
      })
      .catch((err) => console.log(err));
  };

  const putPeticionApiVuelos = (registroVuelos) => {
    axios
      .post(`${apiInfoVuelos}/recerva`, registroVuelos)
      .then((res) => {
        setObjetoApiVuelos(res.data);
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
  const fechaLlegada = `${diaRegreso}/${mesElegidoRegreso}/${selecionAñoRegreso}`;

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
    dispatch(setMostrarSelccionPais(""));
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
  const paisOrigenGeolocalizacion = (lat, log) => {
    console.log({lat, log});
    
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


  console.log(paisOrigen);

  return (
    <div className="Home">


      <div className="home__card">
        <div className="home__card--content">
          {/* formulario de registro para vuelos */}
          <form onSubmit={handleSubmit(submit)}>
            {/* Tipo de vuelos */}
            <div className="vuelo_style">
              <h2>Vuelos</h2>
              <input
                onClick={() => setTypeVuelo(true)}
                type="radio"
                id="redondo"
                name="vuelo"
              />{" "}
              <label htmlFor="redondo">Ida y vuelta</label>
              <input
                onClick={() => setTypeVuelo(false)}
                type="radio"
                id="sencillo"
                name="vuelo"
              />
              <label htmlFor="sencillo">Solo ida</label>
            </div>
            <div className="home__card--selection">
              {/* seleccion destinos */}
              <div className="home__card--destino">
                <div
                  className="selection__pais"
                  id="pais_org"
                  onClick={() => setModalSeleccionPais(!modalSeleccionPais)}
                >
                  <p>Origen</p>
                  <b>{paisOrigen}</b>
                </div>
                <div
                  className="selection__pais"
                  id="pais_dest"
                  onClick={() => setModalSeleccionPais(!modalSeleccionPais)}
                >
                  <p>Destino</p>
                  <b>
                    {mostrarSeleccionPais !== ""
                      ? mostrarSeleccionPais
                      : "----"}
                  </b>
                </div>
              </div>
              {/* seleccion de fechas */}
              <div className="home__card--fechas">
                <div
                  className="selection__fecha"
                  id="fecha_sali"
                  style={{ borderRadius: typeVuelo ? "8px 0 0 8px" : "8px" }}
                  onClick={() => setModalSeleccionFechas(!modalSeleccionFecha)}
                >
                  <p>Salida</p>
                  <p>
                    {selecionAñoSalida && mesElegidoSalida && diaSalida
                      ? `${diaSalida}/${mesElegidoSalida}/${selecionAñoSalida}`
                      : "----"}
                  </p>
                </div>
                {typeVuelo && (
                  <div
                    className="selection__fecha"
                    id="fecha_reg"
                    onClick={() =>
                      setModalSeleccionFechas(!modalSeleccionFecha)
                    }
                  >
                    <p>Regreso</p>
                    <p>
                      {selecionAñoRegreso && mesElegidoRegreso && diaRegreso
                        ? `${diaRegreso}/${mesElegidoRegreso}/${selecionAñoRegreso}`
                        : "----"}
                    </p>
                  </div>
                )}
              </div>
              {/* cantidad de personas que viajaran */}
              <div
                className="selection__personas"
                onClick={() =>
                  setModalSeleccionCantidadPersonas(
                    !modalSeleccionCantidadPersonas
                  )
                }
              >
                <p>Personas</p>
                <div className="cantidad__personas">
                  <p>
                    {adultos !== 0 && `${adultos}`}{" "}
                    <i className="fa-solid fa-user"></i>
                  </p>
                  <p>
                    {niños !== 0 && `${niños}`}{" "}
                    <i className="fa-solid fa-child"></i>
                  </p>
                  <p>
                    {bebes !== 0 && `${bebes}`}{" "}
                    <i className="fa-solid fa-baby-carriage"></i>
                  </p>
                </div>
              </div>
              <div className="home__btn--submit">
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
            objetoApiVuelos={objetoApiVuelos}
            selecionAñoSalida2={selecionAñoSalida}
            selecionAñoRegreso2={selecionAñoRegreso}
            mesElegidoSalida2={mesElegidoSalida}
            mesElegidoRegreso2={mesElegidoRegreso}
            diaSalida2={diaSalida}
            diaRegreso2={diaRegreso}
            typeVuelo={typeVuelo}
          />
        )}
        {modalSeleccionCantidadPersonas && (
          <SeleccionCantidadPersonas
            totalPersonas={totalPersonas}
            adultos={adultos}
            niños={niños}
            bebes={bebes}
            objetoApiVuelos={objetoApiVuelos}
          />
        )}
      </div>
    </div>
  );
};
export default Home;
