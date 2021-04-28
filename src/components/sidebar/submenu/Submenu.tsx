import React, { FunctionComponent } from "react";
import { texts } from "../../../texts";
import "./submenu.scss";
import { Link } from "react-router-dom";

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
          <Link to={`/${value}`}>
            {texts.menuSidebar[menuItem].links[value]}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Submenu;