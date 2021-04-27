import React, {FunctionComponent} from "react";
import {texts} from "../../../texts";
import "./submenu.scss";

interface OwnProps {
  isMenuOpen: boolean;
  menuItem: "shop" | "help";
}

type Props = OwnProps;

const Submenu: FunctionComponent<Props> = ({ isMenuOpen, menuItem }) => {
  const values: string[] = Object.values(texts.menuSidebar[menuItem].links);
  return (
    <div
      className={`sub-list ${isMenuOpen ? `${menuItem}-sub-menu-active` : ""}`}
    >
      {values.map((value) => (
        <div className="sub-list--item">
          {texts.menuSidebar[menuItem].links[value]}
        </div>
      ))}
    </div>
  );
};

export default Submenu;
