import React, { FunctionComponent } from "react";
import LoginForm from "../../login/LoginForm";

interface OwnProps {
  onFinish: () => void;
}

type Props = OwnProps;

const CheckoutFirstStep: FunctionComponent<Props> = ({ onFinish }) => {
  return <LoginForm onSubmitSuccess={onFinish} />;
};

export default CheckoutFirstStep;
