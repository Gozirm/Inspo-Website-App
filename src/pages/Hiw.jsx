import React from "react";
import { useInView } from "react-intersection-observer";
import arrow from "../assets/Icon.svg";
import Img1 from "../assets/Group 29.svg";
import Img2 from "../assets/Group 30.svg";
import Img3 from "../assets/Group 31.svg";

const Hiw = () => {
  const { ref: step1Ref, inView: step1InView } = useInView({ triggerOnce: true });
  const { ref: step2Ref, inView: step2InView } = useInView({ triggerOnce: true });
  const { ref: step3Ref, inView: step3InView } = useInView({ triggerOnce: true });

  return (
    <main className="text-center md:text-left">
      <div className="flex items-center gap-5 mb-5 justify-center md:justify-start">
        <h1 className="text-4xl md:text-6xl">How it Works</h1>
        <img src={arrow} alt="arrow icon" className="w-8 md:w-10" />
      </div>
      <div className="space-y-10">
        <div
          ref={step1Ref}
          className={`flex flex-col md:flex-row gap-5 md:gap-10 items-center transition-opacity duration-1000 ${step1InView ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={Img1} alt="Step 1" className="w-16 md:w-20" />
          <div>
            <h1 className="font-medium text-2xl md:text-3xl">Step 1</h1>
            <p className="text-[#dddd]">
              Create an account & select your skills
            </p>
          </div>
        </div>
        <div
          ref={step2Ref}
          className={`flex flex-col md:flex-row gap-5 md:gap-10 items-center transition-opacity duration-1000 ${step2InView ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={Img2} alt="Step 2" className="w-16 md:w-20" />
          <div>
            <h1 className="font-medium text-2xl md:text-3xl">Step 2</h1>
            <p className="text-[#dddd]">Get a new idea every 24 hours</p>
          </div>
        </div>
        <div
          ref={step3Ref}
          className={`flex flex-col md:flex-row gap-5 md:gap-10 items-center transition-opacity duration-1000 ${step3InView ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={Img3} alt="Step 3" className="w-16 md:w-20" />
          <div>
            <h1 className="font-medium text-2xl md:text-3xl">Step 3</h1>
            <p className="text-[#dddd]">
              Build, record, and share your progress
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hiw;