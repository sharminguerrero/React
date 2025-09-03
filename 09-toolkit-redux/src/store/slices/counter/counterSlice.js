import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState : {
    counter: 0,
    times: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },

    decrement: (state) => {
      state.counter -= 1;
    },

    incrementby: (state, action) => {
      state.counter += action.payload;
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementby, reset} = counterSlice.actions;
