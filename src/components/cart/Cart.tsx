import React, { FunctionComponent } from "react";
import styles from "./cart.module.scss";
import useCart from "../../hooks/useCart";
import { useSelector } from "react-redux";
import {
  cartSelector,
  totalPriceSelector,
} from "redux/cart/cartSelectors";
import CartProduct from "./cartProduct/CartProduct";
import { texts } from "texts";
import Button from "../button/Button";
import { ICartProduct } from "redux/cart/cartReducer";
import classNames from "classnames";

const Cart: FunctionComponent = () => {
  const { isCartOpen } = useCart();
  const products: ICartProduct[] = useSelector(cartSelector);
  const totalPrice = useSelector(totalPriceSelector);

  return (
    <div
      className={classNames(styles.cart, { [styles.cartActive]: isCartOpen })}
    >
      <h3 className={"m-top-1"}>{texts.cart.header}</h3>
      <div className={`${styles.cartProductContainer} m-top-1`}>
        {products.map((product) => (
          <CartProduct product={product} key={product.id} />
        ))}
      </div>
      <div className={`${styles.totalPrice} m-top-2`}>
        <p>{texts.cart.totalPrice}</p>
        <p>${totalPrice}</p>
      </div>
      <Button
        text={"CHECK OUT"}
        wrapperClassName={styles.button}
        revertColors={true}
      />
    </div>
  );
};

export default Cart;
