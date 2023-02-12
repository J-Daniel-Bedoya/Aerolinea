import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 
const InfoRecervacion = ({handleAsientos, objetoApiVulos, addArrayNumeros}) => {

  const valores = objetoApiVulos?.paisOrigen; 
  const siglas = valores?.slice(0,3);
  const valores1 = objetoApiVulos?.paisDestino; 
  const siglas1 = valores1?.slice(0,3);

  const valorMaletas = useSelector(state => state.valorMaletas);
  const valorMaletas2 = useSelector(state => state.valorMaletas2);

  const tlAdultos = objetoApiVulos?.adultos * 450;
  const tlNiños = objetoApiVulos?.niños * 350;
  const tlBebes = objetoApiVulos?.bebes * 250;
  const totalTarifaBase = tlAdultos + tlNiños + tlBebes;
  
  const sumaValoresMaletas = valorMaletas + valorMaletas2;
  const costoMaletas = sumaValoresMaletas

  const total = Number(costoMaletas) + Number(totalTarifaBase);
  const navigate = useNavigate();

  const seguir = () => {
    navigate('/personas')
  }

  return (
    <>
      <div className="info__reservacion">
        <div className="info__reservacion--container1">
          <p>Tu reservacion</p>
          <div className="info__div">
            <div className="info__pasajeros" id="info__pasajeros">
              <p>pasajeros</p>
              <div>
                <p>{objetoApiVulos?.adultos} adultos</p>
                <p>{objetoApiVulos?.niños} niños</p>
                <p>{objetoApiVulos?.bebes} bebes</p>
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
                  <p className="fecha__text">{objetoApiVulos?.fechaSalida}</p>
                </div>
              </div>
              {
                objetoApiVulos?.tipoVuelo &&
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
                    <p className="fecha__text">{objetoApiVulos?.fechaLlegada}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
        <div>
          <h4 className="title_costoVuelo">Costo Vuelo</h4>
          <div className="card_costoVuelo">
            <div className="tarifa_base">
              <p>Tarifa base</p>
              <p>${totalTarifaBase} USD</p>
            </div>
            <div className="costo_equipaje">
              <p>Costo equipaje</p>
              <p>${costoMaletas} USD</p>
            </div>
            <div className="costo_total">
              <p>Total</p>
              <p>${total} USD</p>
            </div>
          </div>
        </div>
        <div>
          {
            valorMaletas !== 0 &&
            <button onClick={() => seguir()} className="btn_seleccionarAsientos" >Seguir</button>
          }
          {/* {
            valorMaletas !== 0 &&
            <button onClick={() => handleAsientos()} className="btn_seleccionarAsientos" >Seleccionar asientos</button>
          }
          <button onClick={() => addArrayNumeros()} className="btn_seleccionarAsientos" >Guardar selecciones</button> */}
        </div>
      </div>
    </>
 
  )
}
 
export default InfoRecervacion;


  