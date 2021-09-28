import React, { FunctionComponent } from "react";
import { Button } from "@material-ui/core";
import { useOrders } from "../../hooks/useOrders";

interface OwnProps {}

type Props = OwnProps;

const CustomerOrdersPreview: FunctionComponent<Props> = (props) => {
  const { orders } = useOrders();
  return (
    <>
      {orders.map((order, key) => (
        <Button key={key}>Dupa jasia {order.uid}</Button>
      ))}
    </>
  );
};

export default CustomerOrdersPreview;
