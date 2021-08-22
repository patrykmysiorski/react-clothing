import React, { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;

const AvailablePaymentTypes: FunctionComponent<Props> = (props) => {
  return <>We accept przelewy24, karta and bliczek</>;
};

export default AvailablePaymentTypes;
