import React, { FunctionComponent } from "react";
import styles from "./cart.module.scss";
import useCart from "../../hooks/useCart";
import { useSelector } from "react-redux";
import { cartSelector, totalPriceSelector } from "redux/cart/cartSelectors";
import CartProduct from "./cartProduct/CartProduct";
import { texts } from "texts";
import Button from "../button/Button";
import { ICartProduct, removeAllFromCart } from "redux/cart/cartReducer";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useAppDispatch } from "redux/hooks";

const Cart: FunctionComponent = () => {
  const { isCartOpen } = useCart();
  const products: ICartProduct[] = useSelector(cartSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const dispatch = useAppDispatch();

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
      <Link to={"/checkout"}>
        <Button
          disabled={products?.length === 0}
          text={"CHECK OUT"}
          className={styles.button}
          revertColors={true}
        />
      </Link>
      <h4 className={"m-top-3"} onClick={() => dispatch(removeAllFromCart())}>
        {texts.cart.clearCart}
      </h4>
    </div>
  );
};

export default Cart;
