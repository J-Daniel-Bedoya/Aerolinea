import { configureStore } from '@reduxjs/toolkit'
import infoPaisApiSlice from './slices/infoPaisApi.slice'

export default configureStore({
  reducer: {
    infoPaisApi: infoPaisApiSlice
  }
})