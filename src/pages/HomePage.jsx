import React from "react";
import Navbar from "../Navbars/Navbar";
import PhonePage from "./PhonePage";
import Details from "./Details";
import Hiw from "./Hiw";
import Testimonal from "./Testimonal";
import Footer from "./Footer";
import { useState, useEffect, useRef } from "react";

const HomePage = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main
        className={`h-screen flex flex-col justify-center items-center px-4 md:px-8 transition-opacity duration-1000 ${
          isBlurred ? "opacity-0 blur-md" : "opacity-100 blur-0"
        }`}
      >
        <Navbar />
        <div className="text-center mt-10">
          <h1 className=" text-6xl md:text-6xl lg:text-8xl font-semibold bg-gradient-to-b from-white to-[#dddd] bg-clip-text text-transparent">
            Consistent Creativity <br />
            One Idea at a Time
          </h1>
          <p className="font-extralight mt-4 md:mt-6 text-lg">
            Get daily human and Ai curated content ideas tailored to your skills
          </p>
          <button
            className="outline cursor-pointer rounded-4xl px-4 py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 mt-4 text-white bg-black"
            onClick={() => window.location.href = '/dashboard'}
          >
            Get your first Idea
          </button>
        </div>
      </main>
      <PhonePage />
      <Details />
      <Hiw />
      <Testimonal />
      <Footer />
    </>
  );
};

export default HomePage;
