import React, { useContext, useEffect } from "react";
import MainRouter from "./Routes/MainRouter";
import Nav from "./components/Nav";
import { datacontext } from "./datacontext/DataContext";

const App = () => {
  const { isAdmin, setisAdmin } = useContext(datacontext);

  useEffect(() => {
    const ans = window.prompt('If yu are admin Enter the pin, else cancel it')
    ans == 1 && setisAdmin(true);
  }, [false]);
  return (
    <div className="h-screen w-full bg-zinc-900 text-zinc-200 px-[4vw] font-['montserrat'] tracking-tight overflow-x-hidden">
      <Nav />
      <MainRouter />
    </div>
  );
};

export default App;
