import React, { useState } from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
import { nanoid } from "nanoid";

const Products = () => {
  const [products, setproducts] = useState([
    {
      productId: nanoid(),
      imageUrl: "/images/mouse1.png",
      productName: "Gaming Mouse",
      productPrice: "$99.99",
      productDescription: "This the best gaming mouse as it is very smooth.",
    },
    
  ]);
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
              key={product.productId}
              imageUrl={product.imageUrl}
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
