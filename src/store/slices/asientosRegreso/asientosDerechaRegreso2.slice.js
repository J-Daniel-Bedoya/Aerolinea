import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
  
const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

export const asientosDerechaRegreso2Slice = createSlice({
  name: 'asientosDerechaRegreso2',
  initialState: [],
  reducers: {
    setAsientosDerechaRegreso2: (state, actions) => {
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
  
export const getArrayNumerosRegresoDerecha2Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosDerechaRegreso2(res.data.asientosRegresoDerecha2))
  });
}

export const { setAsientosDerechaRegreso2 } = asientosDerechaRegreso2Slice.actions;
export default asientosDerechaRegreso2Slice.reducer;