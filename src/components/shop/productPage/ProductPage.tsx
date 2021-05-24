import React, {FunctionComponent} from "react";
import {useRouteMatch} from "react-router-dom";
import {useSelector} from "react-redux";
import {productSelector} from "redux/shop/shopSelectors";

interface OwnProps {}

type Props = OwnProps;

interface Params {
  productId: string;
}

const ProductPage: FunctionComponent<Props> = () => {
  const {
    params: { productId },
  } = useRouteMatch<Params>();
  const product = useSelector(productSelector);
  console.log(product);
  return <p>{123}</p>;
};

export default ProductPage;
