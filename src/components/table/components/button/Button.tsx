import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

interface ButtonType {
  onClick?: (e: any) => any;
  onMouseDown?: (e: any) => any;
  onBlur?: () => any;
  className?: string;
  active?: boolean;
  style?: any;
  disabled?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonType> = ({
  children,
  onClick,
  onMouseDown,
  onBlur,
  className,
  style,
  active = false,
  disabled = false,
  small,
}) => (
  <button
    disabled={disabled}
    onClick={onClick ? (e: any) => onClick(e) : undefined}
    onMouseDown={onMouseDown ? (e: any) => onMouseDown(e) : undefined}
    onBlur={onBlur}
    className={classNames(styles.wrapper, className, {
      [styles.active]: active,
      [styles.disabled]: disabled,
      [styles.small]: small,
    })}
    style={style}
  >
    {children}
  </button>
);

export default Button;
