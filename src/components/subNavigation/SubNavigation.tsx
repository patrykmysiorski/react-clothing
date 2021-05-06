import { usePath } from "hooks/usePath";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./subNavigation.scss";

interface OwnProps {
  items: string[];
}

type Props = OwnProps;

const checkPath = (path: string, name: string) =>
  path === name ? "active" : "";

const SubNavigation: FunctionComponent<Props> = ({ items }) => {
  const path = usePath();
  return (
    <div className={"sub-navigation m-bottom-5"}>
      {items.map((item) => (
        <div className={"nav-item"} key={item}>
          <Link
            className={`link ${checkPath(path, item)}`}
            to={`/shop/${item}`}
          >
            {item}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SubNavigation;
