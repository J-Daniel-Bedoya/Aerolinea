import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import PaginaVuelos from "./components/Paginavuelos";
import ConfirmacionVuelos from "./components/confirmacionVuelos/ConfirmacionVuelos";
import FinalizarCompra from "./components/finalizacionDeCompra/FinalizarCompra";
import axios from "axios";


function App() {

  const apiInfoVuelos = "https://apiaerolinea-production.up.railway.app/api/v1";
  const [objetoApi, setObjetoApi] = useState({});
  // const getPeticionApiVuelos = () => {

  // };
  useEffect(() => {
    axios
      .get(`${apiInfoVuelos}/recerva/2`)
      .then((res) => {
        setObjetoApi(res.data);
        // setDatos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PaginaVuelos objetoApi={objetoApi} setObjetoApi={setObjetoApi}/>}/>
          <Route path="/confirmacion_vuelos" element={<ConfirmacionVuelos objetoApiVulos={objetoApi}/>}/>
          <Route path="/confirmacion_vuelos/finalizar_compra" element={<FinalizarCompra />}/>
        </Routes>
        
      </div>
    </HashRouter>
  );
}

export default App;
