import {all, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {asyncFetchCollectionsStart, fetchCollectionsFailed, fetchCollectionsSuccess,} from "redux/shop/shopReducer";
import {Collections} from "models/collections";
import {GET_COLLECTIONS} from "constants/endpoints";

function* fetchCollections() {
  try {
    const data: Collections = yield axios
      .get(GET_COLLECTIONS)
      .then((response) => response.data);
    yield put(fetchCollectionsSuccess(data));
  } catch {
    yield put(fetchCollectionsFailed());
  }
}

function* watchCollectionsFetch() {
  yield takeLatest(asyncFetchCollectionsStart, fetchCollections);
}

export default function* shopSaga() {
  yield all([watchCollectionsFetch()]);
}
