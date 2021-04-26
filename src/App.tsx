import React, {useState} from "react";
import Header from "./components/header/Header";
import "./app.scss";
import {Route, Switch} from "react-router-dom";
import Shop from "./components/shop/Shop";
import Brand from "./components/brand/Brand";
import Contact from "./components/contact/Contact";
import Help from "./components/help/Help";
import MainPage from "./components/mainPage/MainPage";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="app">
        <Sidebar isOpen={isOpen} />
        <div className={`main-content ${isOpen ? "sidebar-menu-open" : ""}`}>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
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
      </div>
    </>
  );
};

export default App;
