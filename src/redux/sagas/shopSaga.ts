import { all, put, takeLatest } from "redux-saga/effects";
import {
  asyncFetchCollectionsStart,
  asyncPostClothStart,
  fetchCollectionsFailed,
  fetchCollectionsSuccess,
  postClothFailed,
  postClothSuccess,
} from "redux/shop/shopReducer";
import { Collections } from "models/collections";
import { addCloth, getAll } from "../../firebase/clothes/clothesCrud";

function* fetchCollections() {
  try {
    /*  const data: Collections = yield axios
                                                    .get(GET_COLLECTIONS)
                                                    .then((response) => response.data);*/
    const data: Collections = yield getAll();
    yield put(fetchCollectionsSuccess(data));
  } catch {
    yield put(fetchCollectionsFailed());
  }
}

function* postCloth(payload: any) {
  try {
    yield addCloth(payload.payload);
    yield put(postClothSuccess());
  } catch {
    yield put(postClothFailed());
  }
}

function* watchClothPost() {
  yield takeLatest([asyncPostClothStart], postCloth);
}

function* watchClothPostSuccess() {
  yield takeLatest([postClothSuccess], fetchCollections);
}

function* watchCollectionsFetch() {
  yield takeLatest([asyncFetchCollectionsStart], fetchCollections);
}

export default function* shopSaga() {
  yield all([
    watchCollectionsFetch(),
    watchClothPost(),
    watchClothPostSuccess(),
  ]);
}
