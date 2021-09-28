import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../models/product";
import { Address } from "../../components/address-form/AddressForm";

export interface Order {
  products: Product[];
  address: Address;
  uid: any;
  orderId?: any;
  date: string;
}

export interface OrderState {
  orders: Order[];
  isFetching: boolean;
  isFailed: boolean;
}

const initialState: OrderState = {
  orders: [],
  isFetching: false,
  isFailed: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    fetchOrdersSuccess: (state, action: PayloadAction<Order[]>) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    asyncFetchOrdersStart: (state, action: PayloadAction<string>) => {
      state.isFetching = true;
    },
    fetchOrdersFailed: (state) => {
      state.isFetching = false;
      state.isFailed = true;
    },
    postOrderSuccess: (state) => {
      state.isFetching = false;
    },
    asyncPostOrderStart: (state, action: PayloadAction<Order>) => {
      state.isFetching = true;
    },
    postOrderFailed: (state) => {
      state.isFetching = false;
      state.isFailed = true;
    },
  },
});

export const {
  fetchOrdersSuccess,
  fetchOrdersFailed,
  postOrderFailed,
  postOrderSuccess,
  asyncFetchOrdersStart,
  asyncPostOrderStart,
} = orderSlice.actions;

export const selectOrder = (state: RootState) => state.order;

export default orderSlice.reducer;
