import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../Components/features/cart/cartSlice";
import { openModal } from "./features/cart/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, total, cartItems } = useSelector((store) => store.cart);
  return amount < 1 ? (
    <section className="cart">
      <header>
        <h2>Your Cart</h2> <h4 className="empty-cart">is currently empty</h4>
      </header>
    </section>
  ) : (
    <section className="cart">
      <header>
        <h2>Your Cart</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <div onClick={() => dispatch(openModal())} className="btn clear-btn">
          Clear Cart
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
