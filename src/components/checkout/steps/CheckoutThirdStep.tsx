import React, { FunctionComponent } from "react";
import PaymentForm from "../../payment-form/PaymentForm";
import { Container } from "@material-ui/core";

interface OwnProps {}

type Props = OwnProps;

const CheckoutThirdStep: FunctionComponent<Props> = (props) => {
  return (
    <Container maxWidth={"sm"}>
      <PaymentForm />
    </Container>
  );
};

export default CheckoutThirdStep;
