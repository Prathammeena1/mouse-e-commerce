import React, { useContext } from "react";
import { datacontext } from "../datacontext/DataContext";

const Button = ({ text, type }) => {
  const {primaryColor, primaryColorHover} = useContext(datacontext);
  return (
    <button
      className={
        type == "fill"
          ? `uppercase bg-[${primaryColor}] hover:bg-[${primaryColorHover}] px-5 py-3 rounded-sm text-xs font-medium`
          : "uppercase border border-zinc-400 px-5 py-3 rounded-sm text-xs font-medium"
      }
    >
      {text}
    </button>
  );
};

export default Button;
