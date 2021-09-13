import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

interface ButtonType {
  onClick?: () => any;
  className?: string;
  active?: boolean;
  style?: any;
  disabled?: boolean;
}

const Button: React.FC<ButtonType> = ({
  children,
  onClick,
  className,
  style,
  active = false,
  disabled = false,
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={classNames(styles.wrapper, className, {
      [styles.active]: active,
      [styles.disabled]: disabled,
    })}
    style={style}
  >
    {children}
  </button>
);

export default Button;
