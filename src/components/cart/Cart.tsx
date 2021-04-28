import React, {FunctionComponent} from "react";
import "./cart.scss";
import useCart from "../../hooks/useCart";

const Cart: FunctionComponent = () => {
  const { isCartOpen } = useCart();
  return (
    <div className={`cart ${isCartOpen ? "cart-active" : ""}`}>
      <p>Your cart is empty!</p>
    </div>
  );
};

export default Cart;
