import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import PaginaVuelos from "./components/Paginavuelos";
import ConfirmacionVuelos from "./components/confirmacionVuelos/ConfirmacionVuelos";


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PaginaVuelos />}/>
          <Route path="/confirmacion_vuelos" element={<ConfirmacionVuelos />}/>
        </Routes>
        
      </div>
    </HashRouter>
  );
}

export default App;
