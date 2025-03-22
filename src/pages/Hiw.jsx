import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import arrow from "../assets/Icon.svg";
import Img1 from "../assets/Group 29.svg";
import Img2 from "../assets/Group 30.svg";
import Img3 from "../assets/Group 31.svg";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hiw = () => {
  const { ref: step1Ref, inView: step1InView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: step2Ref, inView: step2InView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: step3Ref, inView: step3InView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <main className="text-center md:text-left container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-5 mb-5 justify-center md:justify-start"
      >
        <h1 className="text-4xl md:text-6xl">How it Works</h1>
        <img src={arrow} alt="arrow icon" className="w-8 md:w-10" />
      </motion.div>

      <div className="space-y-10">
        <motion.div
          ref={step1Ref}
          initial="hidden"
          animate={step1InView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="flex flex-col md:flex-row gap-5 md:gap-10 items-center"
        >
          <img src={Img1} alt="Step 1" className="w-16 md:w-20" />
          <div>
            <h1 className="font-medium text-2xl md:text-3xl">Step 1</h1>
            <p className="text-[#dddd]">Create an account & select your skills</p>
          </div>
        </motion.div>

        <motion.div
          ref={step2Ref}
          initial="hidden"
          animate={step2InView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ delay: 0.2 }} 
          className="flex flex-col md:flex-row gap-5 md:gap-10 items-center"
        >
          <img src={Img2} alt="Step 2" className="w-16 md:w-20" />
          <div>
            <h1 className="font-medium text-2xl md:text-3xl">Step 2</h1>
            <p className="text-[#dddd]">Get a new idea every 24 hours</p>
          </div>
        </motion.div>

        <motion.div
          ref={step3Ref}
          initial="hidden"
          animate={step3InView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ delay: 0.4 }} 
          className="flex flex-col md:flex-row gap-5 md:gap-10 items-center"
        >
          <img src={Img3} alt="Step 3" className="w-16 md:w-20" />
          <div>
            <h1 className="font-medium text-2xl md:text-3xl">Step 3</h1>
            <p className="text-[#dddd]">Build, record, and share your progress</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Hiw;
