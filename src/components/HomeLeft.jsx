import React, { useContext } from "react";
import { datacontext } from "../datacontext/DataContext";
import Button from "./Button";

const HomeLeft = () => {
  const [primaryColor] = useContext(datacontext);

  return (
    <div className="leftHome leading-none  mt-[7vw]">
      <h1 className="font-bold text-6xl uppercase tracking-tighter my-[1vw]">
        G502 HERO WIRELESS
      </h1>
      <h3 className="capitalize text-3xl font-semibold w-[40vw] text-zinc-500 my-[1vw]">
        Logitech's High Performace Wireless Gaming Mouse
      </h3>
      <h5 className="w-[50vw] text-99sm font-light leading-4 my-[1vw]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        dignissimos quis animi, ratione similique enim. Quas expedita quaerat
        veniam quam nobis, reprehenderit reiciendis nam a debitis assumenda unde
        pariatur aliquam doloremque cupiditate ipsum eius fugiat. Eveniet sunt
        tenetur iure dicta?
      </h5>
      <div
        className={`price text-[${primaryColor}] font-medium font-['Lato'] my-[1vw] text-3xl`}
      >
        $ 99.99
      </div>
      <div className="flex items-center gap-4">
        <Button text="ADD TO CART" type="fill" />
        <Button text="MORE DETAILS" type="border" />
      </div>
    </div>
  );
};

export default HomeLeft;
