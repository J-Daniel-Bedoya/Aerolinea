import { configureStore } from '@reduxjs/toolkit'
import infoPaisApiSlice from './slices/infoPaisApi.slice'
import valorMaletasSlice from './slices/valorMaletas.slice'

export default configureStore({
  reducer: {
    infoPaisApi: infoPaisApiSlice,
    valorMaletas: valorMaletasSlice,
  }
})