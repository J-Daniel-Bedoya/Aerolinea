import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

export const asientosIzquierdaRegreso3Slice = createSlice({
  name: 'asientosIzquierdaRegreso3',
  initialState: [],
  reducers: {
    setAsientosIzquierdaRegreso3: (state, actions) => {
      const leng = actions.payload?.length
      if (leng === undefined) {
        state.push(actions.payload)
      }else{
        state = actions.payload
      }
      return state
    }
  }
})
  
export const getArrayNumerosRegresoIzquierda3Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosIzquierdaRegreso3(res.data.asientosRegresoIzquierda3))
  });
}

export const { setAsientosIzquierdaRegreso3 } = asientosIzquierdaRegreso3Slice.actions;
export default asientosIzquierdaRegreso3Slice.reducer;