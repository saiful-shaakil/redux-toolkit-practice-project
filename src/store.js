import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Components/features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
