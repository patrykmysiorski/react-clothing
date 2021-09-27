import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

interface OwnProps {
  text: string;
  wrapperClassName?: string;
  revertColors?: boolean;
  disabled?: boolean;
}

type Props = OwnProps & React.HTMLAttributes<HTMLElement>;

const Button: React.FC<Props> = ({
  text,
  className,
  revertColors,
  disabled,
}) => {
  return (
    <div className={classNames(className)}>
      <button
        disabled={disabled}
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
