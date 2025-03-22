import React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import events from "../../dummyApis/Events";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 2,
  500: 1,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const hoverVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Challenges = () => {
  return (
    <main className="flex justify-center">
      <div className="w-full max-w-screen-xl">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={hoverVariants}
                className="backdrop-contrast-90 rounded-xl overflow-hidden p-5"
              >
                <img
                  alt={event.alt}
                  className="w-full rounded-lg"
                  height="200"
                  src={event.imageUrl}
                  width="300"
                />
                <div className="pt-4">
                  <h1 className="text-sm font-bold mb-2">{event.title}</h1>
                  <p className="text-gray-400 mb-4 text-sm">{event.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-gray-900 font-bold py-2 px-4 rounded-full w-full cursor-pointer"
                  >
                    Interested
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </div>
    </main>
  );
};

export default Challenges;
