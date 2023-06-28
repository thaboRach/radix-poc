import classNames from "classnames";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  textColor?: "pink" | "red" | "blue";
  secondary?: boolean;
  onClick: () => void;
  border?: "standard" | "circle";
  type?: "submit" | "button";
  icon?: string;
}

const Button = ({
  children,
  textColor = "red",
  secondary,
  onClick,
  border = "standard",
  type = "button",
  icon,
}: ButtonProps) => {
  const btnClass = classNames({
    "w-[320px] h-[50px] rounded": border === "standard",
    "w-[50px] h-[50px] rounded-full flex justify-center items-center":
      border === "circle",
    "text-[#E23595]": textColor === "pink",
    "text-[#C25457]": textColor === "red",
    "text-[#3D64C3]": textColor === "blue",
    "bg-white shadow-3xl": !secondary,
    " bg-transparent text-white border-[1px] border-solid border-[rgba(238,238,238,0.5)]":
      secondary,
  });

  return (
    <button type={type} className={btnClass} onClick={onClick}>
      {icon && <img className="w-5 h-5 absolute ml-4" src={icon} alt="icon" />}

      {children}
    </button>
  );
};

export default Button;
