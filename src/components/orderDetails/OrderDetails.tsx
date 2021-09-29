import React, { FunctionComponent } from "react";
import { useOrders } from "hooks/useOrders";

interface OwnProps {
  id: any;
}

const OrderDetails: FunctionComponent = (props: any) => {
  const { orders } = useOrders();
  const id = props.match.params.id
  const order = orders.find(o => o.orderId == id);
console.log(order);
  return (
    <>
      <div>{order?.orderId}</div>
    </>
  );
};

export default OrderDetails;
