import React, { ReactNode } from "react";

import classes from "./Button.module.css";

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  children: ReactNode;
  onClick?: () => void;
}
const Button = (props: ButtonProps) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
