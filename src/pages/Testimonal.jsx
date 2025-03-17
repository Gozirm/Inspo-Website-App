import React from "react";
import arrow from "../assets/Icon.svg";

const Testimonal = () => {
  return (
    <main className="mt-15">
      <div className="flex items-center gap-5 mb-5 justify-center md:justify-start">
        <h2 className="text-4xl md:text-6xl  ">Testimonals</h2>
        <img src={arrow} alt="" className="w-8 md:w-10" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="backdrop-brightness-50 p-6 rounded-lg ">
          <p className="text-lg">
            "This service is amazing! Highly recommend to everyone."
          </p>
          <h4 className="text-sm text-[#dddd] mt-4">- John Doe</h4>
        </div>
        <div className="backdrop-brightness-50 p-6 rounded-lg ">
          <p className="text-lg">
            "A wonderful experience from start to finish."
          </p>
          <h4 className="text-sm text-[#dddd] mt-4">- Jane Smith</h4>
        </div>
        <div className="backdrop-brightness-50 p-6 rounded-lg ">
          <p className="text-lg">
            "Exceptional quality and fantastic customer support."
          </p>
          <h4 className="text-sm text-[#dddd] mt-4">- Michael Brown</h4>
        </div>
      </div>
    </main>
  );
};

export default Testimonal;
