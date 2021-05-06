import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Collections } from "models/collections";
import { RootState } from "redux/store";

interface ShopState {
  collections: Collections;
  isFetching: boolean;
  isFailed: boolean;
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
    asyncFetchCollectionsStart: (state) => {
      state.isFetching = true;
    },
    fetchCollectionsFailed: (state) => {
      state.isFetching = false;
      state.isFailed = true;
    },
  },
});

export const {
  fetchCollectionsSuccess,
  asyncFetchCollectionsStart,
  fetchCollectionsFailed,
} = shopSlice.actions;

export const selectShop = (state: RootState) => state.shop;

export default shopSlice.reducer;
