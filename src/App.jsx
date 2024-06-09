import React, { useEffect } from "react";
import MainRouter from "./Routes/MainRouter";
import Nav from "./components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { load } from "./store/slice/productSlice";

const App = () => {
  
  return (
    <div className="h-screen w-full bg-zinc-900 text-zinc-200 px-[4vw] font-['montserrat'] tracking-tight overflow-x-hidden transition-all">
      <Nav />
      <MainRouter />
    </div>
  );
};

export default App;
