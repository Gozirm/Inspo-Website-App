import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between mb-8 sticky top-0 z-50 backdrop-blur-md ">
      <h1 className="text-2xl md:text-3xl ">Welcome Back, Gozirim</h1>
      <div className="flex items-center space-x-4">
        <i className="fas fa-bell text-xl"></i>
        <img
          alt="User Avatar"
          className=" w-15 rounded-full"
          src="https://storage.googleapis.com/a1aa/image/JyE2XYdpcYOUj2484g9IAqhtxS-oogyR4ql5D-bj560.jpg"
        />
      </div>
    </header>
  );
};

export default Navbar;
