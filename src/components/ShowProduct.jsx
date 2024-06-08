import React, { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { datacontext } from "../datacontext/DataContext";
import Button from "./Button"

const ShowProduct = () => {
  const params = useParams();
  const { products,cart,setcart } = useContext(datacontext);
  const currentProduct = products.find((product) => product.id == params.id);

  const [buttonText, setbuttonText] = useState(
    cart.find((cartProduct) => cartProduct.id == currentProduct.id)
      ? "remove from cart"
      : "add to cart"
  );
  const [buttonType, setbuttonType] = useState(
    cart.find((cartProduct) => cartProduct.id == currentProduct.id) ? "border" : "fill"
  );


  const navigate = useNavigate()
  const addToCart = () => {
    if (cart.find((cartProduct) => cartProduct.id == currentProduct.id)) {
      const filtered = cart.filter(
        (cartProduct) => cartProduct.id !== currentProduct.id
      );
      setcart([...filtered]);
      setbuttonText("Add to cart");
      setbuttonType("fill");
      localStorage.setItem("cart", JSON.stringify(filtered));
    } else {
      setcart([...cart, {...currentProduct, quanity:1}]);
      setbuttonText("remove from cart");
      setbuttonType("border");
      localStorage.setItem("cart", JSON.stringify([...cart, {...currentProduct, quanity:1}]));
      navigate('/cart')
    }
  };




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
        <span onClick={addToCart}>
          <Button text={buttonText} type={buttonType} />
        </span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
