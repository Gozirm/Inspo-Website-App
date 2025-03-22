import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbars/Navbar";
import PhonePage from "./PhonePage";
import Details from "./Details";
import Hiw from "./Hiw";
import Testimonal from "./Testimonal";
import Footer from "./Footer";

const HomePage = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.main
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col justify-center items-center container mx-auto"
      >
        <Navbar />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-10"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-5xl md:text-6xl lg:text-8xl font-semibold bg-gradient-to-b from-white to-[#dddd] bg-clip-text text-transparent"
          >
            Consistent Creativity <br />
            One Idea at a Time
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-extralight mt-4 md:mt-6 text-lg"
          >
            Get daily human and AI-curated content ideas tailored to your skills
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="outline cursor-pointer rounded-4xl px-4 py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 mt-4 text-white bg-black"
            onClick={() => (window.location.href = "/signup")}
          >
            Get your first Idea
          </motion.button>
        </motion.div>
      </motion.main>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <PhonePage />
        <Details />
        <Hiw />
        <Testimonal />
        <Footer />
      </motion.div>
    </>
  );
};

export default HomePage;
