import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { datacontext } from "../datacontext/DataContext";

const Nav = () => {
  const { primaryColor, isAdmin } = useContext(datacontext);
  return (
    <div className="nav flex justify-between py-4 items-center">
      <div className="navLeft text-3xl font-bold ">Mousemania</div>
      <div className="navRight flex gap-[3vw] text-sm font-medium">
        {isAdmin ? (
          <>
            <NavLink
              className={(e) =>
                e.isActive
                  ? `text-[${primaryColor}] scale-[1.1] transition-all `
                  : ""
              }
              to="/addProducts"
            >
              Add Products
            </NavLink>
            <NavLink
              className={(e) =>
                e.isActive
                  ? `text-[${primaryColor}] scale-[1.1] transition-all `
                  : ""
              }
              to="/myProducts"
            >
              My Products
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              className={(e) =>
                e.isActive
                  ? `text-[${primaryColor}] scale-[1.1] transition-all `
                  : ""
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={(e) =>
                e.isActive
                  ? `text-[${primaryColor}] scale-[1.1] transition-all `
                  : ""
              }
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className={(e) =>
                e.isActive
                  ? `text-[${primaryColor}] scale-[1.1] transition-all `
                  : ""
              }
              to="/cart"
            >
              Cart
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
