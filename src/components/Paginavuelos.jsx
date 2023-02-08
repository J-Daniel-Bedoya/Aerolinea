import React from 'react'
import Home from './home/Home';
import Pagos from './home/Pagos';
 
const PaginaVuelos = ({objetoApi, setObjetoApi}) => {
  return (
    <div>
      <Home objetoApi={objetoApi} setObjetoApi={setObjetoApi}/>
      <Pagos />
    </div>
 
  )
}
 
export default PaginaVuelos;