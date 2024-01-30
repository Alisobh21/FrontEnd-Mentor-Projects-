import { configureStore } from "@reduxjs/toolkit";
import countrySlicer from "./countrySlicer";

export const store = configureStore({
  reducer: {
    country: countrySlicer,
  },
});
