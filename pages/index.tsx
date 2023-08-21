import React from "react";
import Login from "@/components/Login/Login";

const Home = () => {
  return (
    <div className="flex w-full h-full tablet:h-[1180px] py-[139px] justify-center items-center bg-[var(--sidebar-bg)]">
      <Login />
    </div>
  );
};

export default Home;
