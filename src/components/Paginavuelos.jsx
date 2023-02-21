import React from 'react'
import Home from './home/Home';
import Pagos from './home/Pagos';
 
const PaginaVuelos = ({objetoApiVuelos, setObjetoApiVuelos}) => {
  return (
    <div>
      <Home objetoApiVuelos={objetoApiVuelos} setObjetoApiVuelos={setObjetoApiVuelos}/>
      <Pagos />
    </div>
 
  )
}
 
export default PaginaVuelos;