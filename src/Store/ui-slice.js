import { createSlice } from "@reduxjs/toolkit";

const initialui = {
  showCart: false,
  notification: null,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialui,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const UIActions = uiSlice.actions;
export default uiSlice;
