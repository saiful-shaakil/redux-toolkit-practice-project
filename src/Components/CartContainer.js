import React from "react";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { amount, total, cartItems } = useSelector((store) => store.cart);
  return amount < 1 ? (
    <section className="cart">
      <header>
        <h2>Your Cart</h2> <h4 className="empty-cart">is currently empty</h4>
      </header>
    </section>
  ) : (
    <div></div>
  );
};

export default CartContainer;
