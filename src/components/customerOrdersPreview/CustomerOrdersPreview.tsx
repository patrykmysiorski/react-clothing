import React, { FunctionComponent } from "react";
import { useOrders } from "../../hooks/useOrders";
import OrderPreview from "./orderPreview/OrderPreview";

interface OwnProps {}

type Props = OwnProps;

const CustomerOrdersPreview: FunctionComponent<Props> = (props) => {
  const { orders } = useOrders();
  return (
    <>
      {orders.map((order, key) => (
        <OrderPreview order={order} key={key} />
      ))}
    </>
  );
};

export default CustomerOrdersPreview;
