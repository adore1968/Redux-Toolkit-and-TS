import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      return { ...state, counter: state.counter + 1 };
    },
    decrement: (state) => {
      return { ...state, counter: state.counter - 1 };
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
