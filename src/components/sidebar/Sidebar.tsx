import React, {FunctionComponent} from "react";
import "./sidebar.scss";

interface OwnProps {
  isOpen: boolean;
}

type Props = OwnProps;

const Sidebar: FunctionComponent<Props> = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "active" : ""}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
