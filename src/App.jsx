import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import PaginaVuelos from "./components/Paginavuelos";
import ConfirmacionVuelos from "./components/confirmacionVuelos/ConfirmacionVuelos";
import FinalizarCompra from "./components/finalizacionDeCompra/FinalizarCompra";
import axios from "axios";
import Personas from "./components/personas/Personas";


function App() {

  const apiInfoVuelos = "https://apiaerolinea-production.up.railway.app/api/v1";
  const [objetoApiVuelos, setObjetoApiVuelos] = useState([]);
  // const getPeticionApiVuelos = () => {

  // };
  useEffect(() => {
    axios
      .get(`${apiInfoVuelos}/recerva`)
      .then((res) => {
        setObjetoApiVuelos(res.data);
      })
      .catch((err) => console.log(err));
    }, []);
    console.log(objetoApiVuelos)

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PaginaVuelos objetoApiVuelos={objetoApiVuelos} setObjetoApiVuelos={setObjetoApiVuelos}/>}/>
          <Route path="/confirmacion_vuelos" element={<ConfirmacionVuelos />}/>
          <Route path="/personas" element={<Personas />}/>
          <Route path="/finalizar_compra" element={<FinalizarCompra />}/>
        </Routes>
        
      </div>
    </HashRouter>
  );
}

export default App;
