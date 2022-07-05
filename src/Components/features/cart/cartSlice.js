import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/* export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch("https://course-api.com/react-useReducer-cart-project")
    .then((res) => res.json())
    .catch((err) => console.log(err));
}); */
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    // here name is an arguement passed from the component where getCartItems is used(if we need, we can also avoid it), and thunkAPI is the tools  of redux toolkit thunk
    try {
      const response = await axios(
        "https://course-api.com/react-useReducer-cart-project"
      );
      return response.data;
    } catch (error) {
      console.log(error.response);
      // return thunkAPI.rejectWithValue("Something is wrong"); // We can use this also
    }
  }
);
// initial state for cartSlice. (We will access  it by using state)
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};
//it is the main thing of this component
const cartSlice = createSlice({
  name: "cart",
  initialState,
  // here reducers is given by redux
  reducers: {
    clearCart: (state) => {
      // here state is actually the initialState object
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      // here action is the thing that works with what we pass as arguement in the component where we use removeItem(it)
      /* Lets say we want to remove a item. So, we need to detect that item by id from the store(array). And we can pass item id as arguement. and action.payload is the thing what we passed */
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
  // here extraReducers is given by redux like reducers
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const {
  clearCart,
  removeItem,
  increaseItemAmount,
  decreaseItemAmount,
  calculateTotal,
} = cartSlice.actions; // here actions is actually reducers

// here reducer is given by redux. Reducer and Reducers are two different things. reducers actually define action that what we are doing with those data.
export default cartSlice.reducer;
