import React, {FunctionComponent} from "react";

interface OwnProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

type Props = OwnProps;

const ExpandIcon: FunctionComponent<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <span className="material-icons" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "remove" : "add"}
    </span>
  );
};

export default ExpandIcon;
