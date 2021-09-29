import React, { FunctionComponent, useState } from "react";
import "./sidebar.scss";

import Submenu from "./submenu/Submenu";
import ExpandIcon from "./expandIcon/ExpandIcon";
import { Link, useHistory } from "react-router-dom";
import { texts } from "texts";
import useMenu from "hooks/useMenu";
import { useAuth } from "../../hooks/useAuth";
import { useSnackbarSuccess } from "hooks/useSnackbarSuccess";
import { removeAllFromCart } from "redux/cart/cartReducer";
import { useDispatch } from "react-redux";

const Sidebar: FunctionComponent = () => {
  const { isMenuOpen } = useMenu();
  const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const { push } = useHistory();
  const dispatch = useDispatch();
  const { enqueueSuccessSnackbar } = useSnackbarSuccess();
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
        {/* <div className={"list-item"}>
          <Link to={"/help"}>{texts.menuSidebar.help.header}</Link>
          <ExpandIcon isOpen={isHelpOpen} setIsOpen={setIsHelpOpen} />
          <Submenu isMenuOpen={isHelpOpen} menuItem={"help"} />
        </div>*/}
        {user && (
          <>
            <div className={"list-item"}>Logged in as {user.email}</div>
            <div className={"list-item"}>
              <span
                onClick={() => {
                  push("/orders");
                }}
              >
                See your orders
              </span>
            </div>
            <div className={"list-item"}>
              <span
                onClick={() => {
                  logout();
                  dispatch(removeAllFromCart());
                  enqueueSuccessSnackbar(
                    "Successfuly logged out, cart's been cleared"
                  );
                  push("/login");
                }}
              >
                Click to Logout
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
