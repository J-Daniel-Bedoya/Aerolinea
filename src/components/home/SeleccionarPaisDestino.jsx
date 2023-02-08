import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";


const SelecionarPaisDestino = ({
  setModalSeleccionPais,
  modalSeleccionPais,
  seleccionPais,
}) => {
  const [infoSeleccion, setInfoSeleccion] = useState("");
  const apiAerolineaPais = "https://apiaerolinea-production.up.railway.app/api/v1";
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    axios.get(`${apiAerolineaPais}/pais`)
    .then(res => {
      setPaises(res.data)
    })

  }, []);


  return (
    <div id="seleccionarPais" className="seleccionarPais">
      <div id="seleccionarPais__card" className="seleccionarPais__card">
        <h3>A donde viajas</h3>
        <select
          value={infoSeleccion}
          onChange={(e) => setInfoSeleccion(e.target.value)}
        >
          <option value={""}>seleccionar pais</option>
          {paises.map((pais,i) => (
            <option key={i} value={`${pais.name}`}>{pais.name}</option>
          ))}
        </select>
        <button
          className="btnSeleccion"
          onClick={() => seleccionPais(infoSeleccion)}
        >
          {" "}
          Guardar
        </button>
        <i
          className="fa-regular fa-circle-xmark"
          onClick={() => setModalSeleccionPais(!modalSeleccionPais)}
        ></i>
      </div>
    </div>
  );
};

export default SelecionarPaisDestino;
