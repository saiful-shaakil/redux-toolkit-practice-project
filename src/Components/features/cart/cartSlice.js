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
    decreaseItemAmount: (state, action) => {
      const productId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === productId);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
export const {
  clearCart,
  removeItem,
  increaseItemAmount,
  decreaseItemAmount,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
