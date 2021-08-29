import React, { FunctionComponent } from "react";
import LoginForm from "../../login/LoginForm";

interface OwnProps {}

type Props = OwnProps;

const CheckoutFirstStep: FunctionComponent<Props> = (props) => {
  return <LoginForm />;
};

export default CheckoutFirstStep;
