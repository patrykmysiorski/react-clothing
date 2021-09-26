import React, { FunctionComponent, useState } from "react";
import "./sidebar.scss";

import Submenu from "./submenu/Submenu";
import ExpandIcon from "./expandIcon/ExpandIcon";
import { Link } from "react-router-dom";
import { texts } from "texts";
import useMenu from "hooks/useMenu";
import { useAuth } from "../../hooks/useAuth";

const Sidebar: FunctionComponent = () => {
  const { isMenuOpen } = useMenu();
  const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  // @ts-ignore
  const { user, logout } = useAuth();
  return (
    <div className={`sidebar ${isMenuOpen ? "active" : ""}`}>
      <h2 className={"m-bottom-4"}>{texts.menuSidebar.menu}</h2>
      <div className="list">
        <div className={"list-item"}>
          <Link to={"/shop/all"}>{texts.menuSidebar.shop.header}</Link>
          <ExpandIcon isOpen={isShopOpen} setIsOpen={setIsShopOpen} />
          <Submenu isMenuOpen={isShopOpen} menuItem={"shop"} />
        </div>
        <div className={"list-item"}>
          <Link to={"/brand"}>{texts.menuSidebar.brand}</Link>
        </div>
        <div className={"list-item"}>
          <Link to={"/help"}>{texts.menuSidebar.help.header}</Link>
          <ExpandIcon isOpen={isHelpOpen} setIsOpen={setIsHelpOpen} />
          <Submenu isMenuOpen={isHelpOpen} menuItem={"help"} />
        </div>
        {user && (
          <>
            <div className={"list-item"}>Logged in as {user.email}</div>
            <div className={"list-item"}>
              <span onClick={logout}>Click to Logout</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
