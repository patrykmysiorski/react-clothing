import React, { FunctionComponent } from "react";
import styles from "./cartProduct.module.scss";
import {
  addToCart,
  ICartProduct,
  reduceQuantity,
  removeFromCart,
} from "redux/cart/cartReducer";
import { useAppDispatch } from "redux/hooks";

interface OwnProps {
  product: ICartProduct;
}

type Props = OwnProps;

const CartProduct: FunctionComponent<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const prepareProductName = (name: string) => {
    if (name.length > 10) {
      return `${name.slice(0, 10)}...`;
    } else {
      return name;
    }
  };
  return (
    <div className={`${styles.cartProduct} m-top-1`}>
      <img src={product.imageUrl} width={50} height={80} alt={"product"} />
      <div className={styles.name}>{prepareProductName(product.name)}</div>
      <span
        onClick={() => dispatch(removeFromCart(product.id))}
        className={`${styles.delete} material-icons`}
      >
        close
      </span>
      <div className={styles.description}>
        <i>small / medium</i>
      </div>
      <div className={styles.quantity}>
        <div onClick={() => dispatch(reduceQuantity(product))}>-</div>
        <div>{product.quantity}</div>
        <div onClick={() => dispatch(addToCart(product))}>+</div>
      </div>
      <div className={styles.price}>${product.price * product.quantity}</div>
    </div>
  );
};

export default CartProduct;
