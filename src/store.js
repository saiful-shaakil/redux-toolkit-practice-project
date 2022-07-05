import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Components/features/cart/cartSlice";
import modalReducer from "./Components/features/cart/modalSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
