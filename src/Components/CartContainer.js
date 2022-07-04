import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
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
            Total <span>${total}</span>
          </h4>
        </div>
        <div className="btn clear-btn">Clear Cart</div>
      </footer>
    </section>
  );
};

export default CartContainer;
