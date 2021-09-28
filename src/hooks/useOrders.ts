import { useDispatch, useSelector } from "react-redux";
import { orderSelector } from "../redux/orders/ordersSelectors";
import { useAuth } from "./useAuth";
import { useEffect } from "react";
import { asyncFetchOrdersStart } from "../redux/orders/ordersReducer";

export const useOrders = () => {
  const { orders } = useSelector(orderSelector);
  const dispatch = useDispatch();
  const {
    // @ts-ignore
    user: { uid },
  } = useAuth();

  useEffect(() => {
    dispatch(asyncFetchOrdersStart(uid));
  }, []);

  return { orders };
};
