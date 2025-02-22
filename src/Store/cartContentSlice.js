import { createSlice } from "@reduxjs/toolkit";

const initialCartValues = {
  items: [],
  totalQuantiy: 0,
  changed: false,
};

const cartContentSlice = createSlice({
  name: "cartContent",
  initialState: initialCartValues,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantiy = action.payload.totalQuantiy;
      state.items = action.payload.items;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantiy++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
    },

    RemoveItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantiy--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartContentActions = cartContentSlice.actions;
export default cartContentSlice;
