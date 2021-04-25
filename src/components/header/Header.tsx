import React, {FunctionComponent} from "react";
import "./header.scss";
import {texts} from "../../texts";

interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = () => {
  return (
    <div className={"header"}>
      <span className="menu-element material-icons">menu</span>
      <div className="menu-element element-2">{texts.header.shop}</div>
      <div className="menu-element element-3">{texts.header.brand}</div>
      <div className="menu-element element-4">{texts.header.logo}</div>
      <div className="menu-element element-5">{texts.header.contact}</div>
      <div className="menu-element element-6">{texts.header.help}</div>
      <div className="menu-element element-7">
        <div className="border">7</div>
      </div>
    </div>
  );
};

export default Header;
