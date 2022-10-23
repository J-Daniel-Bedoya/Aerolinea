import React from 'react';
import imagenPagosCreditos from "../../assets/imgs/tarjetasdecredito.png";
import imagenPagosSucursal from "../../assets/imgs/sucursalpago.png";
 
const Pagos = () => {
  return (
    <div className='Pagos'>
      <h1>Pago seguro</h1>
      <div className="metodos_pago">
        <div>
          <p>tarjeta de credito, tarjeta de debito y pago electronico </p>
          <img src={imagenPagosCreditos} id="tarjetasCredito" />
        </div>
        <div>
          <p>Efectivo en cualquiera de las sucursales participantes</p>
          <img src={imagenPagosSucursal} id="PagosSucursal" />
        </div>
      </div>
    </div>
 
  )
}
 
export default Pagos;