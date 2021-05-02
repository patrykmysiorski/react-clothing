import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./subNavigation.scss";

interface OwnProps {
  items: string[];
}

type Props = OwnProps;

const SubNavigation: FunctionComponent<Props> = ({ items }) => {
  return (
    <div className={"sub-navigation"}>
      {items.map((item) => (
        <div className="nav-item" key={item}>
          <Link to={`/${item}`}>{item}</Link>
        </div>
      ))}
    </div>
  );
};

export default SubNavigation;
