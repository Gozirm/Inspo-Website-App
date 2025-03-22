import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-300 text-center mt-20 py-15 container mx-auto">
        <ul className="list-none p-0 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 justify-center m-0 font-extralight">
          <li className="col-span-1 sm:col-span-1 md:col-span-1">
            <Link to="/">Home</Link>
          </li>
          <li className="col-span-1 sm:col-span-1 md:col-span-1">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="col-span-1 sm:col-span-1 md:col-span-1">
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>
          <li className="col-span-1 sm:col-span-1 md:col-span-1">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="col-span-1 sm:col-span-1 md:col-span-1">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <h1 className="mt-10 text-sm ">
          Created by{" "}
          <Link to="https://wa.me/2348110131760" className="underline">
            Gozirim
          </Link>
        </h1>
      </footer>
    </>
  );
};

export default Footer;
