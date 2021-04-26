import React, {FunctionComponent} from "react";
import "./sidebar.scss";
import useMenu from "../../hooks/useMenu";

const Sidebar: FunctionComponent = () => {
  const { isMenuOpen } = useMenu();
  return (
    <div className={`sidebar ${isMenuOpen ? "active" : ""}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
