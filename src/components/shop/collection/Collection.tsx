import { Product } from "models/product";
import React, { FunctionComponent } from "react";
import { addToCart } from "redux/cart/cartReducer";
import "./collection.scss";
import { useAppDispatch } from "redux/hooks";
import useCart from "hooks/useCart";

interface Props {
  collection: Product[];
}

const Collection: FunctionComponent<Props> = ({ collection }) => {
  const dispatch = useAppDispatch();
  const { setIsCartOpen } = useCart();

  const onAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    setIsCartOpen(true);
  };

  return (
    <div className={"collection-container"}>
      {collection.map((product) => (
        <div className="product" key={product.id}>
          <div
            onClick={() => onAddToCart(product)}
            className="image"
            style={{
              backgroundImage: `url(${product.imageUrl})`,
            }}
          />
          <p className={"m-top-1 m-bottom-1"}>{product.name}</p>
          <p>{`${product.price}$`}</p>
        </div>
      ))}
    </div>
  );
};

export default Collection;
