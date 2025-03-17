import React from "react";
import logo from "../assets/Inspo Logo white 2.svg";

const Navbar = () => {
  return (
    <>
      <na className="flex justify-between items-center p-5 backdrop-blur-md fixed top-0 w-full z-50 mx-auto">
        <img src={logo} alt="Inspo Logo" className="w-20 cursor-pointer" />
        <div className="flex space-x-5">
          <button className="cursor-pointer px-4 py-2 bg-white text-black rounded-4xl hover:bg-black hover:text-white outline-1 outline-white transition ease-in-out duration-300">
            Sign In
          </button>
          <button className="cursor-pointer px-4 py-2 text-white outline-1 outline-white rounded-4xl hover:text-black hover:bg-white transition ease-in-out duration-300">
            Sign Up
          </button>
        </div>
      </na>
    </>
  );
};

export default Navbar;
