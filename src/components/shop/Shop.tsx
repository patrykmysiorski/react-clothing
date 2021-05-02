import React, { FunctionComponent, useEffect, useState } from "react";
import "./shop.scss";
import SubPageContainer from "../subPageContainer/SubPageContainer";
import SubNavigation from "../subNavigation/SubNavigation";
import { texts } from "../../texts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { decrement, elo, increment } from "../../redux/shop/shopReducer";
import axios from "axios";
import store from "../../redux/store";
import { useDispatch } from "react-redux";
import { $CombinedState } from "redux";

interface OwnProps {}

type Props = OwnProps;

const Shop: FunctionComponent<Props> = (props) => {
  const values: string[] = Object.values(texts.menuSidebar.shop.links);
  const dispatch = useAppDispatch();
  const shopStore = useAppSelector((state) => state.shop?.value);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("/test").then((response) => setData(response.data));
  }, []);
  console.log("data", data);

  // @ts-ignore
  const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
    <div>
      <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
      <button onClick={onIncrement}>Increment</button>{" "}
      <button onClick={onDecrement}>Decrement</button>
      <hr />
      <div>Clicked: {value} times</div>
    </div>
  );
  console.log(store.getState());
  const dispatchWithoutType = useDispatch();
  return (
    <SubPageContainer>
      <div className="shop">
        <Counter
          value={store.getState()["shop"].value.number}
          onIncrement={() => dispatchWithoutType("INCREMENT")}
          onDecrement={() => dispatch(decrement)}
          onIncrementAsync={() => dispatchWithoutType("INCREMENT_ASYNC")}
        />
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
