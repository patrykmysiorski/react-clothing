import { Product } from "models/product";
import React, { FunctionComponent } from "react";
import { addToCart } from "redux/cart/cartReducer";
import "./collection.scss";
import { useAppDispatch } from "../../../redux/hooks";

interface Props {
  collection: Product[];
}

const Collection: FunctionComponent<Props> = ({ collection }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={"collection-container"}>
      {collection.map((product) => (
        <div className="product">
          <div
            onClick={() => dispatch(addToCart(product))}
            className="image"
            style={{
              backgroundImage: `url(${product.imageUrl})`,
            }}
          />
          <p
            onClick={() => addToCart(product)}
            className={"m-top-1 m-bottom-1"}
          >
            {product.name}
          </p>
          <p>{`${product.price}$`}</p>
        </div>
      ))}
    </div>
  );
};

export default Collection;
