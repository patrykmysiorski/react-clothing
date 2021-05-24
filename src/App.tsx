import React, { useState } from "react";
import Header from "./components/header/Header";
import "./app.scss";
import { Route, Switch } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Brand from "./components/brand/Brand";
import Contact from "./components/contact/Contact";
import Help from "./components/help/Help";
import MainPage from "./components/mainPage/MainPage";
import Sidebar from "./components/sidebar/Sidebar";
import MenuContext from "./contexts/MenuContext";
import CartContext from "./contexts/CartContext";
import Cart from "./components/cart/Cart";
import ProductPage from "components/shop/productPage/ProductPage";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const hideSidebars = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // if (isCartOpen) {
    //   setIsCartOpen(false);
    // }
  };

  return (
    <>
      <div className="app">
        <MenuContext.Provider
          value={{
            isMenuOpen,
            setIsMenuOpen,
          }}
        >
          <CartContext.Provider
            value={{
              isCartOpen,
              setIsCartOpen,
            }}
          >
            <Sidebar />
            <Cart />
            <div
              onClick={hideSidebars}
              className={`main-content ${
                isMenuOpen ? "sidebar-menu-open" : ""
              } ${isCartOpen ? "cart-open" : ""}`}
            >
              <Header />
              <Switch>
                <Route path="/shop">
                  <Shop />
                </Route>
                <Route path="/brand">
                  <Brand />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/help">
                  <Help />
                </Route>
                <Route path="/product/:productId">
                  <ProductPage />
                </Route>
                <Route path="/">
                  <MainPage />
                </Route>
              </Switch>
            </div>
          </CartContext.Provider>
        </MenuContext.Provider>
      </div>
    </>
  );
};

export default App;
