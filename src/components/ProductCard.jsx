import React, { useContext, useState } from "react";
import Button2 from "./Button2";
import { datacontext } from "../datacontext/DataContext";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({
  product,
  imageUrl,
  productName,
  productPrice,
  productDescription,
}) => {
  const { cart, setcart } = useContext(datacontext);
  const [buttonText, setbuttonText] = useState(
    cart.find((cartProduct) => cartProduct.id == product.id)
      ? "remove from cart"
      : "add to cart"
  );
  const [buttonType, setbuttonType] = useState(
    cart.find((cartProduct) => cartProduct.id == product.id) ? "border" : "fill"
  );

  const navigate = useNavigate()

  const addToCart = () => {
    if (cart.find((cartProduct) => cartProduct.id == product.id)) {
      const filtered = cart.filter(
        (cartProduct) => cartProduct.id !== product.id
      );
      setcart([...filtered]);
      setbuttonText("Add to cart");
      setbuttonType("fill");
      localStorage.setItem("cart", JSON.stringify(filtered));
    } else {
      setcart([...cart, {...product, quantity:1}]);
      setbuttonText("remove from cart");
      setbuttonType("border");
      localStorage.setItem("cart", JSON.stringify([...cart, {...product, quantity:1}]));
      navigate('/cart')
    }
  };

  return (
    <div className="product w-[15vw] text-center bg-zinc-800/[.5] px-[2vw] py-[1vw] rounded-md">
      <Link to={`/showProduct/${product.id}`}>
        <div className="productImage h-[13vw] text-center">
          <img
            className="h-full object-cover text-center mx-auto"
            src={imageUrl}
            alt=""
          />
        </div>
      </Link>
      <div className="productDetails mt-[1vw] text-center">
        <div className="productName text-xl font-bold capitalize">
          {productName}
        </div>
        <div className="productPrice font-medium">$ {productPrice}</div>
        <div className="productDescription text-[.7vw] leading-none font-thin mb-[.7vw]">
          {productDescription}
        </div>
        <span onClick={addToCart}>
          <Button2 text={buttonText} type={buttonType} />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
