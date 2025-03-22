import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-300 text-center mt-20 py-10 container mx-auto px-4">
        <ul className="list-none p-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 justify-center m-0 font-extralight text-sm">
          <li className="col-span-1 text-left md:text-center">
            <Link to="/">Home</Link>
          </li>
          <li className="col-span-1 text-left md:text-center">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="col-span-1 text-left md:text-center">
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>
          <li className="col-span-1 text-left md:text-center">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="col-span-1 text-left md:text-center">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <div className="flex justify-center mt-5 space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl" />
          </a>
        </div>
        <h1 className="mt-10 text-sm">
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
