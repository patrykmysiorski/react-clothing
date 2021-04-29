import React, { FunctionComponent } from "react";
import "./shop.scss";
import SubPageContainer from "../subPageContainer/SubPageContainer";
import SubNavigation from "../subNavigation/SubNavigation";
import { texts } from "../../texts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { elo } from "../../redux/shop/shopReducer";

interface OwnProps {}

type Props = OwnProps;

const Shop: FunctionComponent<Props> = (props) => {
  const values: string[] = Object.values(texts.menuSidebar.shop.links);
  const dispatch = useAppDispatch();
  const shopStore = useAppSelector((state) => state.shop?.value);

  console.log(shopStore);
  return (
    <SubPageContainer>
      <div className="shop">
        <button onClick={() => dispatch(elo(8))}>elo</button>
        <SubNavigation items={values} />
        <div className="row--1">
          <div className="item">1</div>
          <div className="item">1</div>
        </div>
        <div className="row--2">
          <div className="item">2</div>
          <div className="item">2</div>
        </div>
        <div className="row--3">
          <div className="item">3</div>
          <div className="item">3</div>
        </div>
        <div className="row--2">
          <div className="item">2</div>
          <div className="item">2</div>
        </div>
        <div className="row--1">
          <div className="item">1</div>
          <div className="item">1</div>
        </div>
        <div className="row--2">
          <div className="item">2</div>
          <div className="item">2</div>
        </div>
        <div className="row--3">
          <div className="item">3</div>
          <div className="item">3</div>
        </div>
        <div className="row--2">
          <div className="item">2</div>
          <div className="item">2</div>
        </div>
        <div className="row--1">
          <div className="item">1</div>
          <div className="item">1</div>
        </div>
        <div className="row--2">
          <div className="item">2</div>
          <div className="item">2</div>
        </div>
        <div className="row--3">
          <div className="item">3</div>
          <div className="item">3</div>
        </div>
        <div className="row--2">
          <div className="item">2</div>
          <div className="item">2</div>
        </div>
      </div>
    </SubPageContainer>
  );
};

export default Shop;
