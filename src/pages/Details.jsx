import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import line from "../assets/vertical line.svg";

const formatNumber = (num) => {
  if (num >= 1000) return (num / 1000).toFixed(1) + "k";
  return num.toLocaleString();
};

const Details = () => {
  const [users, setUsers] = useState(0);
  const [ideas, setIdeas] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [clients, setClients] = useState(0);

  // Intersection Observer for Scroll Animation
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
      
      // Start Counting Animation
      const interval = setInterval(() => {
        setUsers((prev) => (prev < 10000 ? prev + 100 : 10000));
        setIdeas((prev) => (prev < 2000 ? prev + 20 : 2000));
        setReviews((prev) => (prev < 300 ? prev + 3 : 300));
        setClients((prev) => (prev < 59 ? prev + 1 : 59));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [inView, controls]);

  return (
    <motion.main
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
      className="my-10 container mx-auto"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left mb-6 lg:mb-0 lg:pr-4"
        >
          <p className="text-4xl lg:text-7xl text-gray-300">{formatNumber(users)}</p>
          <p className="text-lg lg:text-xl text-gray-300">Users</p>
        </motion.div>

        <img src={line} alt="vertical line" className="h-20 lg:h-40" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center md:text-left mb-6 lg:mb-0 lg:pr-4"
        >
          <p className="text-4xl lg:text-7xl text-gray-300">{formatNumber(ideas)}</p>
          <p className="text-lg lg:text-xl text-gray-300">Ideas Generated</p>
        </motion.div>

        <img src={line} alt="vertical line" className="h-20 lg:h-40" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center md:text-left mb-6 lg:mb-0 lg:pr-4"
        >
          <p className="text-4xl lg:text-7xl text-gray-300">{formatNumber(reviews)}</p>
          <p className="text-lg lg:text-xl text-gray-300">Reviews</p>
        </motion.div>

        <img src={line} alt="vertical line" className="h-20 lg:h-40" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-4xl lg:text-7xl text-gray-300">{formatNumber(clients)}</p>
          <p className="text-lg lg:text-xl text-gray-300">Happy Clients</p>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Details;
