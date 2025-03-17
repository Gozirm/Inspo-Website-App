import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-300 text-center mt-20 pt-15">
        <ul className="list-none p-0 flex justify-center m-0 space-x-5 font-extralight">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <h1 className="mt-10 text-2xl ">
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
