import {combineReducers} from "redux";
import shopReducer from "./shop/shopReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
});

export default rootReducer;
