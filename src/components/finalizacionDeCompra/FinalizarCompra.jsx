import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import letrasRandom from "../../../public/letrasRandom.json";

const FinalizarCompra = () => {
  const apiInfoVuelos = "https://apiaerolinea-production.up.railway.app/api/v1";
  const navigate = useNavigate();

  const [personas, setPersonas] = useState([]);
  const [recerva, setRecerva] = useState([]);
  const [randomReserva, setRandomReserva] = useState(0);
  const [randomCodigo, setRandomCodigo] = useState(0);
  const [randomLetra, setRandomLetra] = useState(0);

  useEffect(() => {
    axios.get(`${apiInfoVuelos}/recerva/1`).then((res) => {
      setRecerva(res.data);
      console.log(res.data);
    });
  }, []);

  const totalPersonas = recerva?.adultos + recerva?.niños + recerva?.bebes;

  useEffect(() => {
    axios.get(`${apiInfoVuelos}/persona`).then((res) => {
      setPersonas(res.data);
      console.log(res.data);
    });
    const numRandom = Math.floor(Math.random() * 10000);
    const num2Random = Math.floor(Math.random() * 100);
    const num3Random = Math.floor(Math.random() * 6);
    setRandomReserva(numRandom);
    setRandomCodigo(num2Random);
    setRandomLetra(num3Random);
  }, []);

  const arregloPersonas = personas.slice(
    personas.length - totalPersonas,
    personas.length
  );
  console.log(randomReserva);

  const finalizarCompra = () => {
    navigate('/');
  };

  return (
    <div className="finalizarCompra">
      <div className="finalizarCompra__container">
        {arregloPersonas.map((person, i) => (
          <div key={i} className="finalizarCompra__card adultos__card">
            <div className="infoReserva">
              <p>
                Número de Vuelo:
                <b>{letrasRandom[randomLetra+1]}{randomCodigo}</b>
              </p>
              <p>
                Número de Reserva:
                <b>{(randomReserva + i)}</b>
              </p>
            </div>
            <div>
              <div className="nombre">
                <p>
                  Tikete a nombre de:{" "}
                  <b>
                    {person.nombres} {person.apellidos}
                  </b>
                </p>
                <p>
                  {(person?.edad >= 18 && "Adulto: $450") ||
                    (person?.edad > 3 && "Niño: $350") ||
                    (recerva?.edad < 18 && "Niño: $350") ||
                    (person?.edad > 0 && "Bebe: $250") ||
                    (recerva?.edad <= 3 && "Bebe: $250")}
                </p>
              </div>
              <div className="paisOrigen">
                <p>
                  Pais de Orige: {recerva.paisOrigen}
                  <b></b>
                </p>
                <p>Fecha de salida: {recerva.salida}</p>
              </div>
              <div className="paisDestino">
                <p>
                  Pais de Destino: {recerva.paisDestino}
                  <b></b>
                </p>
                <p>Fecha de llegada: {recerva.regreso}</p>
              </div>
            </div>
          </div>
        ))}
        <button
          className="btn__finalizarCompra"
          onClick={() => finalizarCompra()}
        >
          Finalizar
        </button>
      </div>
    </div>
  );
};

export default FinalizarCompra;
