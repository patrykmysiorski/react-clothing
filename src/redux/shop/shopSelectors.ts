import { RootState } from "../store";
import { flatArray } from "utils/arrayUtils";
import { Product } from "models/product";
import { createSelector } from "@reduxjs/toolkit";

export const shopSelector = (state: RootState) => state.shop;

export const isShopFetchingSelector = createSelector(
  shopSelector,
  (shop) => shop.isFetching
);

export const collectionsSelector = createSelector(
  shopSelector,
  (shop) => shop?.collections || {}
);

export const collectionSelector = (url: string) =>
  createSelector<any, any, Product[]>(collectionsSelector, (collections) => {
    if (url === "all" || url === "shop") {
      const collectionsArray: Product[][] = Object.values(collections);
      return flatArray(collectionsArray);
    }
    return collections[url] || [];
  });

export const productSelector = createSelector(
  collectionsSelector,
  (collections) => collections
);
