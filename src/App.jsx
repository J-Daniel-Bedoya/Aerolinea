import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import PaginaVuelos from "./components/Paginavuelos";
import ConfirmacionVuelos from "./components/confirmacionVuelos/ConfirmacionVuelos";
import FinalizarCompra from "./components/finalizacionDeCompra/FinalizarCompra";
import axios from "axios";
import Personas from "./components/personas/Personas";
import options from "../public/options";
import optionsConfig from "../public/optionsConfig.json";


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
    
    const [borderColor, setBorderColor] = useState(2);
    const [roseColor, setRoseColor] = useState(2);
    const [colorFont, setColorFont] = useState(2);
    const [colorIcon, setColorIcon] = useState(2);
  
    const borderColorFuction = (num) => {
      setBorderColor(num);
      setRoseColor(num);
      setColorFont(num);
      setColorIcon(num);
    };

  return (
    <HashRouter>
      
      <div className="App">
        
      <div className="home__title">
        <div className="home__tittle">
          <i class="fa-solid fa-feather"></i>
          <p>despegar</p>
        </div>
        <div className="home__title--options">
          {optionsConfig.map((config, i) => (
            <div key={i}>
              <i 
                className={`fa-${config.type} fa-${config.icon}`}
                style={{color: config.icon === "passport" && "#f06b06f5"}}
              ></i>
              <p>{config.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="home__options">
        {options.map((opt, i) => (
          <div
            key={i}
            style={{
              borderBottom: borderColor === i + 1 && "3px solid #270570",
              color: roseColor === i + 1 && "#785ff8",
            }}
            onClick={() => borderColorFuction(i + 1)}
            className="home__options--conter"
            id={opt.textLarge}
          >
            <div
              className="home__options--icons"
              style={{ backgroundColor: colorFont === i + 1 && "#2d0cd3f5" }}
            >
              <i
                style={{ color: colorIcon === i + 1 && "#fff" }}
                className={`fa-${opt.type} fa-${opt.iconName} home__options--icon`}
              ></i>
            </div>
            <p>{opt.option}</p>
          </div>
        ))}
      </div>
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
