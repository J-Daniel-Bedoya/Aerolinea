import { createSlice } from '@reduxjs/toolkit';
  
export const valorMaletas2 = createSlice({
  name: 'valorMaletas2',
  initialState: 0,
  reducers: {
    setValorMaletas2: (state, actions) => {
  
      return actions.payload
    }
  }
})
  
export const { setValorMaletas2 } = valorMaletas2.actions;
export default valorMaletas2.reducer;