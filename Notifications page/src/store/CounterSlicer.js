import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 3,
  mark: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      } else state.value = 0;
    },
    markAll: (state, action) => {
      state.value = 0;
    },
    Seen: (state, action) => {
      state.mark = true;
    },
  },
});

export const { increment, decrement, markAll, Seen } = counterSlice.actions;

export default counterSlice.reducer;
