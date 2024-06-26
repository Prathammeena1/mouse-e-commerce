import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products";
import PageNotFound from "../components/PageNotFound";
import AddProducts from "../components/AddProducts";
import MyProducts from "../components/MyProducts";
import { datacontext } from "../datacontext/DataContext";
import AreYouAdmin from "../components/AreYouAdmin";
import EditProducts from "../components/EditProducts";
import ShowProduct from "../components/ShowProduct";
import Cart from "../components/Cart";

const MainRouter = () => {
  const { isAdmin } = useContext(datacontext);
  return (
    <Routes>
      {isAdmin ? (
        <>
          <Route path="/addProducts" element={<AddProducts />} />
          <Route path="/myProducts" element={<MyProducts />} />
          <Route path="/editProducts/:id" element={<EditProducts />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/showProduct/:id" element={<ShowProduct />} />
          <Route path="/areYouAdmin" element={<AreYouAdmin />} />
        </>
      )}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRouter;
