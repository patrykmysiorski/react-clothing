import { Product } from "models/product";
import React, { FunctionComponent } from "react";
import "./collection.scss";

interface Props {
  collection: Product[];
}

const Collection: FunctionComponent<Props> = ({ collection }) => (
  <div className={"collection-container"}>
    {collection.map((product) => (
      <div className="product">
        <div
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

export default Collection;
