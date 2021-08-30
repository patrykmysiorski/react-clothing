import React, { FunctionComponent, useState } from "react";
import AddressForm from "../../address-form/AddressForm";
import { Button, Container, Grid } from "@material-ui/core";
import DeliveryType from "../../delivery-type/DeliveryType";

interface OwnProps {
  onFinish: () => void;
}

type Props = OwnProps;

const CheckoutSecondStep: FunctionComponent<Props> = ({ onFinish }) => {
  const [isAddressFilled, setIsAddressFilled] = useState(false);

  return (
    <Container>
      <Grid container>
        <Grid xs={8}>
          {isAddressFilled ? (
            <Button onClick={() => setIsAddressFilled(false)}>
              Zajebioza kurwa
            </Button>
          ) : (
            <AddressForm onSubmit={() => setIsAddressFilled(true)} />
          )}
        </Grid>
        <Grid xs={4}>
          <DeliveryType />
        </Grid>
      </Grid>
      {isAddressFilled && (
        <Button variant="contained" color="primary" onClick={onFinish}>
          Dalej kurła
        </Button>
      )}
    </Container>
  );
};

export default CheckoutSecondStep;
