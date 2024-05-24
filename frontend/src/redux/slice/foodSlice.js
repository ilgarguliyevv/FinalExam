import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';

const initialState = {
  basket: JSON.parse|(localStorage.getItem("basket")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // setBasket: (state,action) => {
    //     let elemIndex = state.basket.findIndex((elem) => elem._id === action.payload._id)
    //     if (elemIndex===-1) {
    //         state.basket=[...state.basket , {...action.payload, count: 1 }]
    //     } else {
    //         state.basket[elemIndex].count++
    //     }
    //     localStorage.setItem("basket", JSON.stringify([...state.basket]))
    // },
    setBasket: (state, action) => {
        let elemIndex = state.basket.findIndex(
          (elem) => elem._id == action.payload._id
        );
        if (elemIndex === -1) {
          state.basket = [...state.basket, { ...action.payload, count: 1 }];
        } else {
          state.basket[elemIndex].count++;
        }
        localStorage.setItem("basket", JSON.stringify([...state.basket]));
      },

    setFavorite: (state,action) => {
        let elemIndex = state.favorite.findIndex((elem) => elem._id === action.payload._id)
        if (elemIndex === -1) {
            state.favorite = [...state.favorite , {...action.payload}]
        } else {
            state.favorite=state.favorite.filter((el)=> el._id !== action.payload._id)
        }
        localStorage.setItem("favorite", JSON.stringify([...state.favorite]))
    },
    decreaseCount: (state,action) => {
        let elemIndex = state.basket.findIndex((elem) => elem._id === action.payload._id)
        state.basket[elemIndex].count--
        if (action.payload._id === -1) {
            state.basket=state.basket.filter((elem)=> elem._id !== action.payload._id)
        }
        localStorage.setItem("basket", JSON.stringify([...state.basket]))
    },
    removeBasket: (state,action) => {
        state.basket = state.basket.filter((elem) => elem._id !== action.payload._id)
        localStorage.setItem("basket", JSON.stringify([...state.basket]))
    },
    removeAllBasket: (state) => {
        state.basket=[], localStorage.setItem("basket", JSON.stringify([]))
    }
  },
})

export const { setBasket, setFavorite, decreaseCount, removeBasket, removeAllBasket } = counterSlice.actions

export default counterSlice.reducer