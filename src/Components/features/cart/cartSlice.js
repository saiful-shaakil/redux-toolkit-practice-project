import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 10,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },
    increaseItemAmount: (state, action) => {
      const productId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === productId);
      cartItem.amount = cartItem.amount + 1;
    },
  },
});
export const { clearCart, removeItem, increaseItemAmount } = cartSlice.actions;
export default cartSlice.reducer;
