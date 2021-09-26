import { RootState } from "../store";
import { flatArray } from "utils/arrayUtils";
import { Collections } from "models/collections";
import { Product } from "models/product";

export const shopSelector = (state: RootState) => state.shop;

export const isShopFetchingSelector = (state: RootState): boolean =>
  shopSelector(state).isFetching;

export const collectionsSelector = (state: RootState): Collections =>
  shopSelector(state).collections || {};

export const collectionSelector = (state: RootState) => (
  url: string
): Product[] => {
  const collectionsArray: Product[][] = Object.values(state.shop.collections);
  return flatArray(collectionsArray);
};
