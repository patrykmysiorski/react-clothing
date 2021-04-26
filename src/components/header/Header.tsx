import React, {FunctionComponent} from "react";
import "./header.scss";
import {texts} from "../../texts";
import {Link} from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import useCart from "../../hooks/useCart";

const Header: FunctionComponent = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const { isCartOpen, setIsCartOpen } = useCart();

  return (
    <div className={"header"}>
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
        <div className="border">7</div>
      </div>
    </div>
  );
};

export default Header;
