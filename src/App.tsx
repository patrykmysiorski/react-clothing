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

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const hideMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
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
          <Sidebar />
          <div
            onClick={hideMenu}
            className={`main-content ${isMenuOpen ? "sidebar-menu-open" : ""}`}
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
              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
          </div>
        </MenuContext.Provider>
      </div>
    </>
  );
};

export default App;
