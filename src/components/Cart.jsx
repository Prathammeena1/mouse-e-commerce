import React, { useContext } from "react";
import Heading from "./Heading";
import CartProduct from "./CartProduct";
import { datacontext } from "../datacontext/DataContext";

const Cart = () => {
  const { cart, setcart } = useContext(datacontext);


  return (
    <div>
      <Heading mainHeading="Cart" subHeading="Add to cart now and save big!" />
      <div className="h-[80vh] w-full mt-1">
        <div className="cartLeft h-full w-[65%]  flex flex-col">
          {cart.length > 0
            ? cart.map((cartProduct) => (
                <CartProduct
                  key={cartProduct.id}
                  productImage={cartProduct.image}
                  productName={cartProduct.productName}
                  productDescription={cartProduct.productDescription}
                  productPrice={cartProduct.productPrice}
                  product={cartProduct}
                />
              ))
            : " no product in cart"}
        </div>
        <div className="cartRight "></div>
      </div>
    </div>
  );
};

export default Cart;
