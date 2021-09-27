import { all, call } from "redux-saga/effects";
import shopSaga from "./shopSaga";
import orderSaga from "./ordersSaga";

export default function* rootSaga() {
  yield all([call(shopSaga), call(orderSaga)]);
}
