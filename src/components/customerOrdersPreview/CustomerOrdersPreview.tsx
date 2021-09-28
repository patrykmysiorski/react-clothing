import React, { FunctionComponent, useEffect } from "react";
import { orderSelector } from "../../redux/orders/ordersSelectors";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { asyncFetchOrdersStart } from "../../redux/orders/ordersReducer";
import { useAuth } from "../../hooks/useAuth";

interface OwnProps {}

type Props = OwnProps;

const CustomerOrdersPreview: FunctionComponent<Props> = (props) => {
  const { orders } = useSelector(orderSelector);
  const dispatch = useDispatch();
  const {
    // @ts-ignore
    user: { uid },
  } = useAuth();

  useEffect(() => {
    dispatch(asyncFetchOrdersStart(uid));
  }, []);

  return (
    <>
      elo
      {orders.map((order, key) => (
        <Button key={key}>Dupa jasia {order.uid}</Button>
      ))}
    </>
  );
};

export default CustomerOrdersPreview;
