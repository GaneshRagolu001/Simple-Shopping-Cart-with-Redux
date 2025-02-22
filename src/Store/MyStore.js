import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartContentSlice from "./cartContentSlice";
const store = configureStore({
  reducer: { ui: uiSlice.reducer, cartContent: cartContentSlice.reducer },
});

export default store;
