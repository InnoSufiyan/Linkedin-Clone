import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/signInSlice'

export const store = configureStore({
  reducer: {
    userState : userReducer
  },
})