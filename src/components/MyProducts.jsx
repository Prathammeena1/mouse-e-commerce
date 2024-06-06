import React, { useContext, useState } from "react";
import Heading from "./Heading";
import ProductCard2 from "./ProductCard2";
import { datacontext } from "../datacontext/DataContext";
import { Link } from "react-router-dom";


const Products = () => {
  const { products } = useContext(datacontext);
  return (
    <div>
      {products.length > 0 &&  <Heading
        mainHeading="My Products"
        subHeading="Discover and Admire Your Amazing Creations!"
      />}
      
      <div className=" my-5 products flex flex-wrap gap-[2vw]">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard2
              id={product.id}
              key={product.id}
              image={product.image}
              productName={product.productName}
              productPrice={product.productPrice}
              productDescription={product.productDescription}
            />
          ))
        ) : (
          <div className="w-full  mt-[30vh]">
          <h1 className="w-fit m-auto text-4xl text-center">No Products Yet! <br /> <Link to='/addProducts' className="text-xl text-blue-400 hover:border-b hover:border-blue-400">Add Products</Link> </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
