import React, {FunctionComponent, ReactElement} from "react";
import "./subPageContainer.scss";

interface OwnProps {
  children: ReactElement;
}

type Props = OwnProps;

const SubPageContainer: FunctionComponent<Props> = ({ children }) => (
  <div className={"sub-page"}>{children}</div>
);

export default SubPageContainer;
