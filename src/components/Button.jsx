import React, { useContext } from "react";
import { datacontext } from "../datacontext/DataContext";

const Button = ({ text, type }) => {
  return (
    <button
      className={
        type == "fill"
          ? `uppercase bg-primary hover:bg-primaryHover px-5 py-3 rounded-sm text-xs font-medium`
          : "uppercase border border-zinc-400 px-5 py-3 rounded-sm text-xs font-medium"
      }
    >
      {text}
    </button>
  );
};

export default Button;
