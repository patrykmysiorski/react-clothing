import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "models/product";

export interface ICartProduct extends Product {
  quantity: number;
}

interface CartState {
  products: ICartProduct[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProduct>) => {
      const indexOfProduct = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (indexOfProduct !== -1) {
        const productQuantity = state.products[indexOfProduct].quantity;
        state.products[indexOfProduct] = {
          ...action.payload,
          quantity: productQuantity + 1,
        };
      } else {
        state.products = [
          ...state.products,
          { ...action.payload, quantity: 1 },
        ];
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    reduceQuantity: (state, action: PayloadAction<ICartProduct>) => {
      const product = action.payload;
      const indexOfProduct = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (product.quantity > 1) {
        state.products[indexOfProduct] = {
          ...product,
          quantity: state.products[indexOfProduct].quantity - 1,
        };
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      }
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
  reduceQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
