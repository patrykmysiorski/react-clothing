import React, { FunctionComponent } from "react";
import CheckoutStepper from "./CheckoutStepper";

interface OwnProps {}

type Props = OwnProps;

const Checkout: FunctionComponent<Props> = (props) => {
  return (
    <>
      <CheckoutStepper />
    </>
  );
};

export default Checkout;
