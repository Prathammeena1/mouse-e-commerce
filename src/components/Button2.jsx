import React, { useContext } from "react";
import { datacontext } from "../datacontext/DataContext";

const Button = ({ text, type,type2 }) => {
  return (
    <button type={type2}
      className={
        type == "fill"
          ? `uppercase bg-primary hover:bg-primaryHover px-5 py-2 w-full rounded-full text-xs font-medium`
          : "uppercase border border-zinc-400 px-5 py-2 w-full rounded-full text-xs font-medium"
      }
    >
      {text}
    </button>
  );
};

export default Button;
