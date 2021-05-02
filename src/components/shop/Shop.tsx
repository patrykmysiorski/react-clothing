import SubNavigation from "components/subNavigation/SubNavigation";
import SubPageContainer from "components/subPageContainer/SubPageContainer";
import React, {FunctionComponent, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "redux/hooks";
import {asyncFetchCollectionsStart, selectShop} from "redux/shop/shopReducer";
import {texts} from "texts";
import "./shop.scss";

const Shop: FunctionComponent = () => {
  const values: string[] = Object.values(texts.menuSidebar.shop.links);
  const dispatch = useAppDispatch();
  const shopStore = useAppSelector(selectShop);
  useEffect(() => {
    dispatch(asyncFetchCollectionsStart());
  }, [dispatch]);

  return (
    <SubPageContainer>
      <div className="shop">
        <SubNavigation items={values} />
        <div>
          {shopStore.isFetching ? (
            <p>extra spinner :)...</p>
          ) : (
            <p>extra content!!</p>
          )}
        </div>
      </div>
    </SubPageContainer>
  );
};

export default Shop;
