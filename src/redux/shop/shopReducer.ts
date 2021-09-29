import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Collections } from "models/collections";
import { RootState } from "redux/store";
import { ClothesFetchParams } from "../../components/shop/Shop";

interface ShopState {
  collections: Collections;
  isFetching: boolean;
  isFailed: boolean;
}

export interface ClothRemovePayload {
  userId: string;
  clothId: number;
}

const initialState: ShopState = {
  collections: {},
  isFetching: false,
  isFailed: false,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    fetchCollectionsSuccess: (state, action: PayloadAction<Collections>) => {
      state.isFetching = false;
      state.collections = action.payload;
    },
    asyncFetchCollectionsStart: (
      state,
      action: PayloadAction<ClothesFetchParams>
    ) => {
      state.isFetching = true;
    },
    fetchCollectionsFailed: (state) => {
      state.isFetching = false;
      state.isFailed = true;
    },
    postClothSuccess: (state) => {
      state.isFetching = false;
    },
    asyncPostClothStart: (state, action: PayloadAction<any>) => {
      state.isFetching = true;
    },
    postClothFailed: (state) => {
      state.isFetching = false;
      state.isFailed = true;
    },
    removeClothSuccess: (state) => {
      state.isFetching = false;
    },
    removeClothStart: (state, action: PayloadAction<ClothRemovePayload>) => {
      state.isFetching = true;
    },
    removeClothFailed: (state) => {
      state.isFetching = false;
      state.isFailed = true;
    },
  },
});

export const {
  fetchCollectionsSuccess,
  asyncFetchCollectionsStart,
  fetchCollectionsFailed,
  postClothFailed,
  asyncPostClothStart,
  postClothSuccess,
  removeClothSuccess,
  removeClothStart,
  removeClothFailed,
} = shopSlice.actions;

export const selectShop = (state: RootState) => state.shop;

export default shopSlice.reducer;
