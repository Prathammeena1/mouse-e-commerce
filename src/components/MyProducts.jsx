import React, { useContext, useState } from "react";
import Heading from "./Heading";
import ProductCard2 from "./ProductCard2";
import { datacontext } from "../datacontext/DataContext";

const Products = () => {
  const {products} = useContext(datacontext)
  console.log(products)
  return (
    <div>
      <Heading
        mainHeading="My Products"
        subHeading="Discover and Admire Your Amazing Creations!"
      />
      <div className=" my-5 products flex flex-wrap gap-[2vw]">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard2
              key={product.productId}
              image={product.image}
              productName={product.productName}
              productPrice={product.productPrice}
              productDescription={product.productDescription}
            />
          ))
        ) : (
          <h1>No Product Yet</h1>
        )}
      </div>
    </div>
  );
};

export default Products;
