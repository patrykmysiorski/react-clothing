import React, { FunctionComponent } from "react";
import "./header.scss";
import { texts } from "../../texts";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Shop from "../shop/Shop";
import Brand from "../brand/Brand";
import MainPage from "../mainPage/MainPage";
import Contact from "../contact/Contact";
import Help from "../help/Help";

interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = () => {
  return (
    <BrowserRouter>
      <div className={"header"}>
        <span className="menu-element material-icons">menu</span>
        <Link to="/shop">{texts.header.shop}</Link>
        <Link to="/brand">{texts.header.brand}</Link>
        <Link to="/" className={"element-4"}>
          {texts.header.logo}
        </Link>
        <Link to="/contact">{texts.header.contact}</Link>
        <Link to="help">{texts.header.help}</Link>
        <div className="menu-element cart">
          <div className="border">7</div>
        </div>
      </div>
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
    </BrowserRouter>
  );
};

export default Header;
