import axios from 'axios';

const arrayNumeros = "https://json-serverarraynumeros-production.up.railway.app/seleccionarAsientos";

import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';

export const asientosIzquierda1Slice = createSlice({
  name: 'asientosIzquierda1',
  initialState: [],
  reducers: {
    setAsientosIzquierda1: (state, actions) => {
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

// const [getState, setGetState] = useState()
export const getArrayNumerosSalidaIzquierda1Thunck = () => dispach => {
  axios.get(arrayNumeros)
  .then(res => {
    dispach(setAsientosIzquierda1(res.data.asientosSalidaIzquierda1))
  });
}

export const { setAsientosIzquierda1 } = asientosIzquierda1Slice.actions;
export default asientosIzquierda1Slice.reducer;