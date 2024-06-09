import React, { useContext, useEffect, useState } from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
import { datacontext } from "../datacontext/DataContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../store/slice/productSlice";

const Products = () => {

  const {products} = useSelector(state => state.productSlice)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(load())
    },[false])



  return (
    <div>
      <Heading
        mainHeading="Products"
        subHeading="Which type of gear are you looking for?"
      />
      <div className=" my-5 products flex flex-wrap gap-[2vw]">
        {products.length > 0 ? (
          products.map((product) => (
              <ProductCard
              key={product.id}
              product={product}
                imageUrl={product.image}
                productName={product.productName}
                productPrice={product.productPrice}
                productDescription={product.productDescription}
              />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Products;
