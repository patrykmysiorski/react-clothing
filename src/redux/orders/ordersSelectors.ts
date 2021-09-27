import { RootState } from "../store";
import { OrderState } from "./ordersReducer";

export const orderSelector = (state: RootState): OrderState => state.order;
