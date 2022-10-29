import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
  
const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

export const asientosDerecha2Slice = createSlice({
  name: 'asientosDerecha2',
  initialState: [],
  reducers: {
    setAsientosDerecha2: (state, actions) => {
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
  
export const getArrayNumerosSalidaDerecha2Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosDerecha2(res.data.asientosSalidaDerecha2))
  });
}


export const { setAsientosDerecha2 } = asientosDerecha2Slice.actions;
export default asientosDerecha2Slice.reducer;