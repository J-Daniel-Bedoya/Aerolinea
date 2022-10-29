import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
  
const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

export const asientosIzquierda3Slice = createSlice({
  name: 'asientosIzquierda3',
  initialState: [],
  reducers: {
    setAsientosIzquierda3: (state, actions) => {
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

export const getArrayNumerosSalidaIzquierda3Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosIzquierda3(res.data.asientosSalidaIzquierda3))
  });
}

export const { setAsientosIzquierda3 } = asientosIzquierda3Slice.actions;
export default asientosIzquierda3Slice.reducer;