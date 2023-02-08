import { createSlice } from '@reduxjs/toolkit';
  
export const valorMaletasSlice = createSlice({
  name: 'valorMaletas',
  initialState: 0,
  reducers: {
    setValorMaletas: (state, actions) => {
      
      return actions.payload
    }
  }
})
  
export const { setValorMaletas } = valorMaletasSlice.actions;
export default valorMaletasSlice.reducer;
