import React, { FunctionComponent } from "react";
import "./header.scss";
import { texts } from "../../texts";
import { Link, useLocation } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import useCart from "../../hooks/useCart";
import { useSelector } from "react-redux";
import { cartItemsNumberSelector } from "redux/cart/cartSelectors";
import classNames from "classnames";
import { useAuth } from "../../hooks/useAuth";

const Header: FunctionComponent = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const { isCartOpen, setIsCartOpen } = useCart();
  const location = useLocation();
  const itemsNumber = useSelector(cartItemsNumberSelector);
  const isMainPage = location?.pathname === "/";
  // @ts-ignore
  const { user } = useAuth();
  return (
    <div
      className={classNames(
        "header",
        { "black-font": !isMainPage },
        { "brzydki-pasek": !isMainPage }
      )}
    >
      <span
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="menu-element material-icons"
      >
        {isMenuOpen ? "close" : "menu"}
      </span>
      <Link to="/shop">{texts.header.shop}</Link>
      <Link to="/brand">{texts.header.brand}</Link>
      <Link to="/" className={"element-4"}>
        {texts.header.logo}
      </Link>
      <Link to="/contact">{texts.header.contact}</Link>
      <Link to="help">{texts.header.help}</Link>
      <div
        className="menu-element cart-icon"
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <div className={classNames("border", { "black-border": !isMainPage })}>
          {itemsNumber}
        </div>
      </div>
    </div>
  );
};

export default Header;
