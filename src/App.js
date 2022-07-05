import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./Components/CartContainer";
import { calculateTotal } from "./Components/features/cart/cartSlice";
import Navbar from "./Components/Navbar";

function App() {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
