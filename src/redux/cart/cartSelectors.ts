import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {ICartProduct} from "./cartReducer";

export const cartSelector = (state: RootState): ICartProduct[] =>
  state.cart.products;

export const totalPriceSelector = createSelector(cartSelector, (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);

export const cartItemsNumberSelector = createSelector(cartSelector, (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
);
