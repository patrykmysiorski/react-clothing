import React, { FunctionComponent } from "react";
import PaymentForm from "../../payment-form/PaymentForm";
import { Container } from "@material-ui/core";

interface OwnProps {
  onFinish: () => void;
}

type Props = OwnProps;

const CheckoutThirdStep: FunctionComponent<Props> = ({ onFinish }) => {
  return (
    <Container maxWidth={"sm"}>
      <PaymentForm onSuccessfulPayment={onFinish} />
    </Container>
  );
};

export default CheckoutThirdStep;
