import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <div className="nav flex justify-between py-4 items-center">
      <div className="navLeft text-3xl font-bold ">Mousemania</div>
      <div className="navRight flex gap-[3vw] text-sm font-medium">
        <NavLink className={(e)=> e.isActive && "text-[#15adf5] scale-[1.1]" } to='/'>Home</NavLink>
        <NavLink className={(e)=> e.isActive && "text-[#15adf5] scale-[1.1]" } to='/products'>Products</NavLink>
        <NavLink className={(e)=> e.isActive && "text-[#15adf5] scale-[1.1]" } to='/services'>Services</NavLink>
      </div>
      
    </div>
  );
};

export default Nav;
