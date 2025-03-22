import React from "react";
import { motion } from "framer-motion";
import arrow from "../assets/Icon.svg";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerVariants = {
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const testimonials = [
  {
    text: "This service is amazing! Highly recommend to everyone.",
    name: "John Doe",
  },
  { text: "A wonderful experience from start to finish.", name: "Jane Smith" },
  {
    text: "Exceptional quality and fantastic customer support.",
    name: "Michael Brown",
  },
];

const Testimonal = () => {
  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerVariants}
      className="mt-15 container mx-auto px-5 md:px-0"
    >
      <motion.div
        variants={fadeUpVariants}
        className="flex items-center gap-5 mb-5 justify-center md:justify-start"
      >
        <h2 className="text-4xl md:text-6xl text-white">Testimonials</h2>
        <img src={arrow} alt="arrow" className="w-8 md:w-10" />
      </motion.div>

      <motion.div
        variants={staggerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariants}
            className="bg-[#1E1E1E] bg-opacity-70 p-6 rounded-xl shadow-lg border border-[#dddd] text-white"
          >
            <p className="text-lg">"{testimonial.text}"</p>
            <h4 className="text-sm text-[#dddd] mt-4">- {testimonial.name}</h4>
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
};

export default Testimonal;
