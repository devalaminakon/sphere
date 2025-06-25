import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, leftIcon, rightIcon, to, version, outLine }) => {

  return (
    <>
      {leftIcon && (
        <Link
          to={to}
          className={`border bg-${version} ${outLine ? ' border-black text-black ' : 'text-white border-transparent'} font-medium text-base leading-[20px] py-4 px-9 rounded-full inline-flex items-center gap-2.5 `}
        >
          {leftIcon} {text}
        </Link>
      )}
      {rightIcon && (
        <Link
          to={to}
          className={`border bg-${version} ${outLine && ' border-black text-black '} text-white font-medium text-base leading-[20px] py-4 px-9 rounded-full inline-flex items-center gap-2.5 `}
        >
          {text} {rightIcon}
        </Link>
      )}
    </>
  );
};

export default Button;
