import { all, call } from "redux-saga/effects";
import shopSaga from "./shopSaga";

export default function* rootSaga() {
    yield all([call(shopSaga)]);
}
