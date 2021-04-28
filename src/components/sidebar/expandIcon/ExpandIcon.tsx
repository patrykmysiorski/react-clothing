import React, {FunctionComponent} from "react";
import "./expandIcon.scss";

interface OwnProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

type Props = OwnProps;

const ExpandIcon: FunctionComponent<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <span
      className="expand-icon material-icons"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? "remove" : "add"}
    </span>
  );
};

export default ExpandIcon;
