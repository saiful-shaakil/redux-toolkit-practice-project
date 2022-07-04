import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../icons";
import { store } from "../store";

const Navbar = () => {
  const amount = useSelector((store) => store.cart.amount);
  //   const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit Project</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <div className="total-amount">{amount}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
