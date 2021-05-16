import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

interface OwnProps {
  text: string;
  wrapperClassName?: string;
  revertColors?: boolean;
}

type Props = OwnProps;

const Button: React.FC<Props> = ({ text, wrapperClassName, revertColors }) => {
  return (
    <div className={wrapperClassName}>
      <button
        className={classNames(styles.button, {
          [styles.reverted]: revertColors,
        })}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
