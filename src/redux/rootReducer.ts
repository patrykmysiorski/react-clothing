import { combineReducers } from "redux";
import shopReducer from "./shop/shopReducer";
import cartReducer from "./cart/cartReducer";
import addressReducer from "./address/addressReducer";
import ordersReducer from "./orders/ordersReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  order: ordersReducer,
  cart: cartReducer,
  address: addressReducer,
});

export default rootReducer;
