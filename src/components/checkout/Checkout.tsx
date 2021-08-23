import React, { FunctionComponent } from "react";
import OrderPreviewSection from "./sections/OrderPreviewSection";

interface OwnProps {}

type Props = OwnProps;

const Checkout: FunctionComponent<Props> = (props) => {
  return (
    <>
      <OrderPreviewSection />
    </>
  );
};

export default Checkout;
