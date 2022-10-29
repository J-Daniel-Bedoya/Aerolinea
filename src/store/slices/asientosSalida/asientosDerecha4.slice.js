import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
  
const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

export const asientosDerecha4Slice = createSlice({
  name: 'asientosDerecha4',
  initialState: [],
  reducers: {
    setAsientosDerecha4: (state, actions) => {
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

export const getArrayNumerosSalidaDerecha4Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosDerecha4(res.data.asientosSalidaDerecha4))
  });
}
  

export const { setAsientosDerecha4 } = asientosDerecha4Slice.actions;
export default asientosDerecha4Slice.reducer;