import React, { FunctionComponent } from "react";
import LoginForm from "../../login/LoginForm";
import useCheckoutStepper from "../../../hooks/useCheckoutStepper";

interface OwnProps {
  onFinish: () => void;
}

type Props = OwnProps;

const CheckoutFirstStep: FunctionComponent<Props> = (props) => {
  const { goToNextStep } = useCheckoutStepper();
  return <LoginForm onSubmitSuccess={goToNextStep} />;
};

export default CheckoutFirstStep;
