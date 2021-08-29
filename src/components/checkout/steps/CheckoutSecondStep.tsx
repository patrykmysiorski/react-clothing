import React, { FunctionComponent } from "react";
import AddressForm from "../../address-form/AddressForm";
import { Grid } from "@material-ui/core";
import DeliveryType from "../../delivery-type/DeliveryType";

interface OwnProps {}

type Props = OwnProps;

const CheckoutSecondStep: FunctionComponent<Props> = (props) => {
  return (
    <Grid container>
      <Grid xs={8}>
        <AddressForm />
      </Grid>
      <Grid xs={4}>
        <DeliveryType />
      </Grid>
    </Grid>
  );
};

export default CheckoutSecondStep;
