import React, { useContext, useEffect } from "react";
import MainRouter from "./Routes/MainRouter";
import Nav from "./components/Nav";
import { datacontext } from "./datacontext/DataContext";
import { useNavigate } from "react-router-dom";

const App = () => {

  const {isAdmin} = useContext(datacontext)
  const navigate = useNavigate()
  isAdmin && navigate('/myProducts');
  
  
  return (
    <div className="h-screen w-full bg-zinc-900 text-zinc-200 px-[4vw] font-['montserrat'] tracking-tight overflow-x-hidden">
      <Nav />
      <MainRouter />
    </div>
  );
};

export default App;
