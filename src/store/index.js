import { configureStore } from '@reduxjs/toolkit';
import infoPaisApiSlice from './slices/infoPaisApi.slice';
import valorMaletasSlice from './slices/valorMaletas.slice';
import valorMaletas2Slice from './slices/valorMaletas2.slice';


export default configureStore({
  reducer: {
    infoPaisApi: infoPaisApiSlice,
    valorMaletas: valorMaletasSlice,
    valorMaletas2: valorMaletas2Slice,
  }
})