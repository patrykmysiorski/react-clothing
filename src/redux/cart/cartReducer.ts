import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "models/product";

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      console.log(action.payload);
      state.products = [...state.products, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    removeAllFromCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAllFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
