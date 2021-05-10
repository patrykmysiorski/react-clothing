import {Product} from "models/product";
import React, {FunctionComponent} from "react";
import styles from "./cartProduct.module.scss";

interface OwnProps {
  product: Product;
}

type Props = OwnProps;

const CartProduct: FunctionComponent<Props> = ({ product }) => {
  return (
    <div className={`${styles.cartProduct} m-top-1`}>
      <img
        className={""}
        src={product.imageUrl}
        alt=""
        width={60}
        height={80}
      />
      <div className={styles.name}>{product.name}</div>
      <div className={styles.description}>small/medium</div>
      <div className={styles.smallProductImage}>${product.price}</div>
    </div>
  );
};

export default CartProduct;
