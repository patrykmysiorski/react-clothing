import React, { FunctionComponent } from "react";
import AddressForm from "../../address-form/AddressForm";
import { Container, Grid } from "@material-ui/core";

interface OwnProps {
  onFinish: () => void;
}

type Props = OwnProps;

const CheckoutSecondStep: FunctionComponent<Props> = ({onFinish}) => {

  return (
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid xs={8}>
            <AddressForm onSubmit={() => onFinish()}/>
          </Grid>
        </Grid>
      </Container>
  );
};

export default CheckoutSecondStep;
