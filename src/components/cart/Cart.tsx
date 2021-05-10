import React, { FunctionComponent } from "react";
import styles from "./cart.module.scss";
import useCart from "../../hooks/useCart";
import { Product } from "models/product";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/cart/cartSelectors";
import CartProduct from "./cartProduct/CartProduct";
import { texts } from "texts";

const Cart: FunctionComponent = () => {
  const { isCartOpen } = useCart();
  const products: Product[] = useSelector(cartSelector);
  console.log(products);
  return (
    <div className={`${styles.cart} ${isCartOpen && styles.cartActive}`}>
      <h3 className={"m-top-1"}>{texts.cart.header}</h3>
      <div className={`${styles.cartProductContainer} m-top-1`}>
        {products.map((product) => (
          <CartProduct product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
