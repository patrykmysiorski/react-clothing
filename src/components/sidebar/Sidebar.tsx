import React, {FunctionComponent, useState} from "react";
import "./sidebar.scss";
import useMenu from "../../hooks/useMenu";
import {texts} from "../../texts";
import Submenu from "./submenu/Submenu";
import ExpandIcon from "./expandIcon/ExpandIcon";

const Sidebar: FunctionComponent = () => {
  const { isMenuOpen } = useMenu();
  const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);

  return (
    <div className={`sidebar ${isMenuOpen ? "active" : ""}`}>
      <h2 className={"m-bottom-4"}>{texts.menuSidebar.menu}</h2>
      <div className="list">
        <div className={"list-item"}>
          <p>{texts.menuSidebar.shop.header}</p>
          <ExpandIcon isOpen={isShopOpen} setIsOpen={setIsShopOpen} />
          <Submenu isMenuOpen={isShopOpen} menuItem={"shop"} />
        </div>
        <div className={"list-item"}>
          <p>{texts.menuSidebar.brand}</p>
        </div>
        <div className={"list-item"}>
          <p>{texts.menuSidebar.help.header}</p>
          <ExpandIcon isOpen={isHelpOpen} setIsOpen={setIsHelpOpen} />
          <Submenu isMenuOpen={isHelpOpen} menuItem={"help"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
