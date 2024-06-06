import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { datacontext } from "../datacontext/DataContext";
import Button from "./Button"

const ShowProduct = () => {
  const params = useParams();
  const { products } = useContext(datacontext);
  const currentProduct = products.find((product) => product.id == params.id);

  console.log(currentProduct)

  return (
    <div className="h-[90vh] w-full flex items-center gap-[3vw] justify-center">
      <div className="showProductLeft h-[80%] w-[90%]  flex justify-center">
        <img src={currentProduct.image} className="h-[100%] object-cover" alt="" />
      </div>
      <div className="showProductRight h-[80%] w-fit flex items-center ">
        <div>
        <h1 className="text-5xl capitalize">{currentProduct.productName}</h1>
        <h3 className="text-3xl capitalize my-[1vw]">$ {currentProduct.productPrice}</h3>
        <h3 className="text-base capitalize mt-[4vw] w-[50%]">{currentProduct.productDescription} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aliquid doloribus maiores ad ipsam ratione facilis eius consequuntur, amet aspernatur molestiae mollitia excepturi perferendis suscipit cum reiciendis, quas veritatis alias?</h3>
        <div className="buttons my-[2vw]">
        <Button text="ADD TO CART" type="fill" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
