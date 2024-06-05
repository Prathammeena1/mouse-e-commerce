import React from "react";
import Button2 from "./Button2";
import { Link } from "react-router-dom";

const ProductCard2 = ({
  id,
  image,
  productName,
  productPrice,
  productDescription,
}) => {
  return (
    <div className="product w-[15vw] text-center bg-zinc-800/[.5] px-[2vw] py-[1vw] rounded-md">
      <div className="productImage h-[13vw] text-center">
        <img
          className="h-full object-cover text-center mx-auto"
          src={image}
          alt=""
        />
      </div>
      <div className="productDetails mt-[1vw] text-center">
        <div className="productName text-xl font-bold">{productName}</div>
        <div className="productPrice font-medium">{productPrice}</div>
        <div className="productDescription text-[.7vw] leading-none font-thin mb-[.7vw]">
          {productDescription}
        </div>
        <div className="flex">
          <Link to={`/editProducts/${id}`}><Button2 text="edit" type="border" /></Link>
          <Button2 text="delete" type="fill" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
