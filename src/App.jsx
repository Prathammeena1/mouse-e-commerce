import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import MainRouter from "./Routes/MainRouter";

const App = () => {
  return (
    <div className="h-screen w-full bg-zinc-900 text-zinc-200 px-[4vw] font-['montserrat'] tracking-tight overflow-hidden">
      <Nav />

      <MainRouter/>
    </div>
  );
};

export default App;
