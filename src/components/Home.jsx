import React from "react";

const Home = () => {
  return (
    <div className="h-full w-full flex items-start overflow-hidden mt-[3vh]">
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
          veniam quam nobis, reprehenderit reiciendis nam a debitis assumenda
          unde pariatur aliquam doloremque cupiditate ipsum eius fugiat. Eveniet
          sunt tenetur iure dicta?
        </h5>
        <div className="price text-[#15adf5] font-medium font-['Lato'] my-[1vw] text-3xl">
          $ 99.99
        </div>
        <div className="flex items-center gap-4">
          <button className="uppercase bg-[#15adf5] px-5 py-3 rounded-sm text-xs font-medium">
            Add to cart
          </button>
          <button className="uppercase border border-zinc-400 px-5 py-3 rounded-sm text-xs font-medium">
            More Details
          </button>
        </div>
      </div>
      <div className="rightHome relative ">
        <div className="ml-[18vw] mt-[15vh]">
          <span className="text-[#15adf5] rotate-[90deg] inline-block text-[12vw] font-bold pointer-events-none">
            G502
          </span>
        </div>
        <div className="landingImage w-[22vw] absolute top-0 left-[18%]">
          <img className="h-full w-full object-cover" src="/images/landingMouse.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
