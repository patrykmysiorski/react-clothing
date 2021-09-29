import { all, put, takeLatest } from "redux-saga/effects";
import { getOrders, postOrder } from "../../firebase/orders/ordersCrud";
import {
  asyncFetchOrdersStart,
  asyncPostOrderStart,
  fetchOrdersFailed,
  fetchOrdersSuccess,
  Order,
  postOrderFailed,
  postOrderSuccess,
} from "../orders/ordersReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { removeAllFromCart } from "redux/cart/cartReducer";

function* fetchOrders({ payload: uid }: PayloadAction<string>) {
  try {
    // @ts-ignore
    const data: Orders[] = yield getOrders(uid);
    yield put(fetchOrdersSuccess(data));
  } catch {
    yield put(fetchOrdersFailed());
  }
}

// @ts-ignore
function* laPostOrder({ payload }: PayloadAction<Order>) {
  try {
    yield postOrder(payload);
    yield put(postOrderSuccess());
    yield put(removeAllFromCart());
  } catch {
    yield put(postOrderFailed());
  }
}

export function* watchOrderPost() {
  // @ts-ignore
  yield takeLatest([asyncPostOrderStart], laPostOrder);
}

export function* watchOrderPostSuccess() {
  // @ts-ignore
  yield takeLatest([postOrderSuccess], fetchOrders);
}

export function* watchOrdersFetch() {
  // @ts-ignore
  yield takeLatest([asyncFetchOrdersStart], fetchOrders);
}

export default function* orderSaga() {
  yield all([watchOrdersFetch(), watchOrderPost(), watchOrderPostSuccess()]);
}
