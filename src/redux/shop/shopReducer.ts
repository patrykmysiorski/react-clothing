import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jacketsMock } from "../../mocks/jackets";
import { Product } from "../../models/product";
import { RootState } from "../store";

interface ShopState {
  value: {
    jackets: Product[];
    number: number;
  };
}

const initialState: ShopState = {
  value: {
    jackets: jacketsMock,
    number: 0,
  },
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    increment: (state) => {
      state.value.number += 1;
    },
    decrement: (state) => {
      state.value.number -= 1;
    },
    elo: (state, action: PayloadAction<number>) => {
      state.value.number += action.payload;
    },
  },
});

export const { increment, decrement, elo } = shopSlice.actions;

export const selectCount = (state: RootState) => state.shop.value;

export default shopSlice.reducer;
