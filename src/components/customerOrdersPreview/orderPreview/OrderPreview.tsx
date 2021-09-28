import React, { FunctionComponent } from "react";
import { Order } from "../../../redux/orders/ordersReducer";
import { Button } from "@material-ui/core";

interface OwnProps {
  order: Order;
}

const OrderPreview: FunctionComponent<OwnProps> = ({ order }) => {
  return (
    <>
      <Button>Siema {order.orderId}</Button>
    </>
  );
};

export default OrderPreview;
