import React, { FunctionComponent, useEffect, useState } from "react";
import AddressForm, { Address } from "../../address-form/AddressForm";
import { Container, Grid } from "@material-ui/core";
import { useAuth } from "../../../hooks/useAuth";
import { useSelector } from "react-redux";
import { addressSelector } from "../../../redux/address/addressSelectors";
import { asyncFetchOrdersStart } from "../../../redux/orders/ordersReducer";
import { useAppDispatch } from "../../../redux/hooks";
import Spinner from "../../spinner/Spinner";
import { orderSelector } from "../../../redux/orders/ordersSelectors";

interface OwnProps {
  onFinish: () => void;
}

type Props = OwnProps;

const CheckoutSecondStep: FunctionComponent<Props> = ({ onFinish }) => {
  const dispatch = useAppDispatch();
  // @ts-ignore
  const { user } = useAuth();
  const address = useSelector(addressSelector);

  const [state, setState] = useState<Address | undefined>(undefined);

  useEffect(() => {
    if (user) {
      dispatch(asyncFetchOrdersStart(user.uid));
    }
  }, [dispatch, user]);

  const { orders } = useSelector(orderSelector);
  useEffect(() => {
    if (orders.length > 0) {
      setState(orders[0].address);
    } else {
      setState(address);
    }
  }, [orders]);
  return (
    <Container>
      <Grid container justifyContent={"center"}>
        <Grid xs={8}>
          {state ? (
            <AddressForm initFormState={state} onSubmit={() => onFinish()} />
          ) : (
            <Spinner />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutSecondStep;
