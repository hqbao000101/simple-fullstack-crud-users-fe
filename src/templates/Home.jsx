import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-blue-400">
      <div className="flex items-center justify-center min-h-screen mx-auto max-w-screen-2xl">
        <div className="w-[90%] p-10 bg-white rounded-lg shadow-xl lg:w-3/5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
