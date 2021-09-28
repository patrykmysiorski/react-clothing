import { all, put, takeLatest } from "redux-saga/effects";
import {
  asyncFetchCollectionsStart,
  asyncPostClothStart,
  fetchCollectionsFailed,
  fetchCollectionsSuccess,
  postClothFailed,
  postClothSuccess,
  removeClothFailed,
  removeClothStart,
  removeClothSuccess,
} from "redux/shop/shopReducer";
import { Collections } from "models/collections";
import {
  addCloth,
  deleteCloth,
  getAllProducts,
} from "../../firebase/clothes/clothesCrud";
import { ClothesFetchParams } from "../../components/shop/Shop";

function* fetchCollections(fetchParams: ClothesFetchParams) {
  try {
    /*  const data: Collections = yield axios
                                                                                                                    .get(GET_COLLECTIONS)
                    
                                                                                                                    .then((response) => response.data);*/
    // @ts-ignore
    const data: Collections = yield getAllProducts(fetchParams);
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
  // @ts-ignore
  yield takeLatest([postClothSuccess], fetchCollections);
}

function* removeCloth(payload: any) {
  try {
    yield deleteCloth(payload.payload);
    yield put(removeClothSuccess());
  } catch {
    yield put(removeClothFailed());
  }
}

function* watchClothDelete() {
  yield takeLatest([removeClothStart], removeCloth);
}

function* watchClothDeleteSuccess() {
  // @ts-ignore
  yield takeLatest([removeClothSuccess], fetchCollections);
}

function* watchCollectionsFetch() {
  // @ts-ignore
  yield takeLatest([asyncFetchCollectionsStart], fetchCollections);
}

export default function* shopSaga() {
  yield all([
    watchCollectionsFetch(),
    watchClothPost(),
    watchClothPostSuccess(),
    watchClothDelete(),
    watchClothDeleteSuccess(),
  ]);
}
