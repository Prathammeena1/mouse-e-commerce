import React from "react";
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

const Home = () => {
  return (
    <div className="h-full w-full flex items-start overflow-hidden mt-[3vh]">
      <HomeLeft/>
      <HomeRight/>
    </div>
  );
};

export default Home;
