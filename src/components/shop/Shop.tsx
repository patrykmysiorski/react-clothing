import SubNavigation from "components/subNavigation/SubNavigation";
import SubPageContainer from "components/subPageContainer/SubPageContainer";
import React, { FunctionComponent, useEffect } from "react";
import { useAppDispatch } from "redux/hooks";
import { asyncFetchCollectionsStart } from "redux/shop/shopReducer";
import { texts } from "texts";
import "./shop.scss";
import { useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
import Collection from "./collection/Collection";
import { Product } from "models/product";
import {collectionSelector, isShopFetchingSelector } from "redux/shop/shopSelectors";
import { usePath } from "hooks/usePath";

const Shop: FunctionComponent = () => {
  const tabsNames: string[] = Object.values(texts.menuSidebar.shop.links);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(asyncFetchCollectionsStart());
  }, [dispatch]);
  const isLoading = useSelector(isShopFetchingSelector);
  const pathname = usePath();

  const collection: Product[] = useSelector(collectionSelector)(pathname);
  return (
    <SubPageContainer>
      <div className="shop">
        <SubNavigation items={tabsNames} />
        <div>
          {isLoading ? <Spinner /> : <Collection collection={collection} />}
        </div>
      </div>
    </SubPageContainer>
  );
};

export default Shop;
