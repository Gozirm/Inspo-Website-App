import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileNavbar from "../Navbars/MobileNavbar";

const UserNavbar = () => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      <div className="flex-1 flex flex-col w-full md:ml-50 pb-16"> {/* Added pb-16 for padding-bottom */}
        <Navbar />
        <div className="md:hidden">
          <MobileNavbar />
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
