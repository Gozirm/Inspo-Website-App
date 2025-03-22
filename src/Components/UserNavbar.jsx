import React from "react";
import { Outlet } from "react-router";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileNavbar from "../Navbars/MobileNavbar";

const sidebarVariants = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const navbarVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const UserNavbar = () => {
  return (
    <div className="flex min-h-screen container px-5 mx-auto py-[20px] md:px-0 md:pb-0">
      <motion.div
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:block"
      >
        <Sidebar />
      </motion.div>

      <div className="flex-1 flex flex-col w-full md:ml-50 pb-16">
        <motion.div
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
        >
          <Navbar />
        </motion.div>

        <motion.div
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
          className="md:hidden"
        >
          <MobileNavbar />
        </motion.div>

        <motion.div variants={pageVariants} initial="hidden" animate="visible">
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};

export default UserNavbar;
