import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../redux/slice/foodSlice.js"

export const store = configureStore({
  reducer: {  counter: counterReducer,},
})