import React, { useContext, useState } from "react";
import { datacontext } from "../datacontext/DataContext";

const CartProduct = ({
  productImage,
  productName,
  productDescription,
  productPrice,
  product,
}) => {
  const { cart, setcart } = useContext(datacontext);

  const [quantity, setquantity] = useState(product.quantity);

  const decreaseQuantityHandler = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
      const index = cart.findIndex(obj => obj.id === product.id)
      product.quantity = quantity -1;
      var copyCart = [...cart]
      copyCart[index] = product;
      setcart([...copyCart])
      localStorage.setItem("cart", JSON.stringify([...copyCart]));

    }
  };
  const increaseQuantityHandler = () => {
    setquantity(quantity + 1);
      const index = cart.findIndex(obj => obj.id === product.id)
      product.quantity = quantity +1;
      var copyCart = [...cart]
      copyCart[index] = product;
      setcart([...copyCart])
      localStorage.setItem("cart", JSON.stringify([...copyCart]));
  };
  console.log(product);
  return (
    <div className="cartProduct flex w-full justify-between items-center border-b border-zinc-800 py-3 px-5">
      <div className="cartProductLeft flex items-center gap-4">
        <i className="ri-close-large-fill text-2xl"></i>
        <div className="flex items-center gap-2">
          <div className="h-full w-fit bg-zinc-800 rounded-md overflow-hidden">
            <img
              className="h-[5vw] w-[5vw] object-contain"
              src={productImage}
              alt=""
            />
          </div>
          <div className="w-[15vw] leading-none">
            <h1 className="text-xl font-bold">{productName}</h1>
            <h3 className="text-xs font-light">
              {productDescription.split(" ").length < 8
                ? productDescription
                : `${productDescription.split(" ").slice(0, 8).join(" ")}...`}
            </h3>
          </div>
        </div>
      </div>
      <div className="cartProductRight flex items-center gap-10">
        <div className="quantity flex gap-4 items-center">
          <div
            onClick={decreaseQuantityHandler}
            className="w-[2vw] h-[2vw] bg-zinc-800 rounded-full flex items-center justify-center"
          >
            <i className="ri-subtract-line"></i>
          </div>
          <div>{quantity}</div>
          <div
            onClick={increaseQuantityHandler}
            className="w-[2vw] h-[2vw] bg-zinc-800 rounded-full flex items-center justify-center"
          >
            <i className="ri-add-line"></i>
          </div>
        </div>
        <div className="price">
          <span className="font-semibold">$ {productPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
