import React from "react";

interface Props {
  children: string;
  //   color?: string; //optional property
  color?: "primary" | "secondary" | "danger"; //optional property, with only certain values allowed, if none are passed, used the first one
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
