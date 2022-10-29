import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
  
const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

export const asientosDerechaRegreso4Slice = createSlice({
  name: 'asientosDerechaRegreso4',
  initialState: [],
  reducers: {
    setAsientosDerechaRegreso4: (state, actions) => {
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

export const getArrayNumerosRegresoDerecha4Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosDerechaRegreso4(res.data.asientosRegresoDerecha4))
  });
}

export const { setAsientosDerechaRegreso4 } = asientosDerechaRegreso4Slice.actions;
export default asientosDerechaRegreso4Slice.reducer;