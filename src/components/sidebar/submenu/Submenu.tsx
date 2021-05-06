import React, { FunctionComponent } from "react";

import "./submenu.scss";
import { Link } from "react-router-dom";
import { texts } from "texts";
import { usePath } from "../../../hooks/usePath";

interface OwnProps {
  isMenuOpen: boolean;
  menuItem: "shop" | "help";
}

type Props = OwnProps;

const checkPath = (path: string, name: string) =>
  path === name ? "active" : "";

const Submenu: FunctionComponent<Props> = ({ isMenuOpen, menuItem }) => {
  const values: string[] = Object.values(texts.menuSidebar[menuItem].links);
  const path = usePath();
  return (
    <div
      className={`sub-list ${isMenuOpen ? `${menuItem}-sub-menu-active` : ""}`}
    >
      {values.map((value) => (
        <div className={`sub-list--item`} key={value}>
          <Link className={`${checkPath(path, value)}`} to={`/shop/${value}`}>
            {texts.menuSidebar[menuItem].links[value]}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Submenu;
