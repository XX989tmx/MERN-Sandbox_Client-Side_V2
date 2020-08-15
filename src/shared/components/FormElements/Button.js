import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        href={props.href}
        className={` button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"} ${
          props.primary && "button--primary"
        } ${props.btnBlack && "button--btnBlack"} ${
          props.btnBlackInverse && "button--btnBlack__inverse"
        } ${props.btnGreen && "button--green"} ${
          props.btnPremium && "button--premium"
        }`}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={` button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"} ${
          props.primary && "button--primary"
        } ${props.btnBlack && "button--btnBlack"} ${
          props.btnBlackInverse && "button--btnBlack__inverse"
        } ${props.btnGreen && "button--green"} ${
          props.btnPremium && "button--premium"
        }`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={` button--${props.size || "default"} ${
        props.inverse && "button--inverse"
      } ${props.danger && "button--danger"} ${
        props.primary && "button--primary"
      } ${props.btnBlack && "button--btnBlack"} ${
        props.btnBlackInverse && "button--btnBlack__inverse"
      } ${props.btnGreen && "button--green"} ${
        props.btnPremium && "button--premium"
      }`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
