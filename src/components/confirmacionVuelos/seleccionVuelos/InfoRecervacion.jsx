import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
 

const InfoRecervacion = ({handleAsientos, objetoApiVulos}) => {

  const valores = objetoApiVulos.paisOrigen; 
  const siglas = valores?.slice(0,3);
  const valores1 = objetoApiVulos.paisDestino; 
  const siglas1 = valores1?.slice(0,3);

  const valorMaletas = useSelector(state => state.valorMaletas);
  const sumaValoresMaletas = valorMaletas.reduce((a,b) => a+b);
  const string = sumaValoresMaletas.toString();
  const stringNum = sumaValoresMaletas.toString().length;
  const [costoMaletas, setConstoMaletas] = useState("");
  const [total, setTotal] = useState("");
  const totalValor = sumaValoresMaletas + 450;
  const stringTotal = totalValor.toString();
  const stringTotalNum = totalValor.toString().length;
  useEffect(() => {
    if (stringNum > 3) {
      const addPuntoEnUno = string.slice(0,1);
      const addPuntoBody = string.slice(1,string.length);
      const stringConcatenado = `${addPuntoEnUno}.${addPuntoBody}`;
      setConstoMaletas(stringConcatenado);
    }else{
      setConstoMaletas(string);
    }
    if (stringTotalNum > 3){
      const addPuntoEnUno = stringTotal.slice(0,1);
      const addPuntoBody = stringTotal.slice(1,stringTotal.length);
      const stringTotalConcatenado = `${addPuntoEnUno}.${addPuntoBody}`;
      setTotal(stringTotalConcatenado);
    }else{
      setTotal(stringTotal);
    }
  }, [stringNum, stringTotal]);

  return (
    <>
      <div className="info__reservacion">
        <div className="info__reservacion--container1">
          <p>Tu reservacion</p>
          <div className="info__div">
            <div className="info__pasajeros" id="info__pasajeros">
              <p>pasajeros</p>
              <div>
                <p>{objetoApiVulos.totalPersonas?.adultos} adulto</p>
                <p>{objetoApiVulos.totalPersonas?.niños} niños</p>
                <p>{objetoApiVulos.totalPersonas?.bebes} bebes</p>
              </div>
            </div>
            <div className="info__date">
              <div className="info__div--date">
                <p className="p">Vuelo de salida</p>
                <div className="info__div--text">
                  <div className="info__salida">

                    <p>{siglas}</p>
                    <p>_____</p>
                    <p>{siglas1}</p>
                  </div>
                  <div className="info__hora">
                    <p>05:45 PM </p>
                    <p>06:47 PM</p>
                  </div>
                  <p className="fecha__text">{objetoApiVulos.fechaSalida}</p>
                </div>
              </div>
              <div className="info__div--date">
                <p className="p">Vuelo de regreso</p>
                <div className="info__div--text">
                  <div className="info__salida">
                    <p>{siglas1}</p>
                    <p>_____</p>
                    <p>{siglas}</p>
                  </div>
                  <div className="info__hora">
                    <p>05:45 PM </p>
                    <p>06:47 PM</p>
                  </div>
                  <p className="fecha__text">{objetoApiVulos.fechaLlegada}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="title_costoVuelo">Costo Vuelo</h4>
          <div className="card_costoVuelo">
            <div className="tarifa_base">
              <p>tarifa base</p>
              <p>$450.000</p>
            </div>
            <div className="costo_equipaje">
              <p>Costo equipaje</p>
              <p>${costoMaletas}.000</p>
            </div>
            <div className="costo_total">
              <p>Total</p>
              <p>${total}.000</p>
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => handleAsientos()} className="btn_seleccionarAsientos" >Seleccionar asientos</button>
        </div>
      </div>
    </>
 
  )
}
 
export default InfoRecervacion;