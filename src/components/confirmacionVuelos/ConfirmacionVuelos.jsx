import React from 'react'
import { useNavigate } from 'react-router-dom'; 

const ConfirmacionVuelos = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Hola</h1>
      <button onClick={() => navigate("/")}>Ir atras</button>
    </div>
 
  )
}
 
export default ConfirmacionVuelos;