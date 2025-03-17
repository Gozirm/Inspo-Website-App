import React from "react";
import line from "../assets/vertical line.svg";
import { useEffect, useState } from "react";


const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toLocaleString();
};

const Details = () => {
  const [users, setUsers] = useState(0);
  const [ideas, setIdeas] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((prev) => (prev < 10000 ? prev + 100 : 10000));
      setIdeas((prev) => (prev < 2000 ? prev + 20 : 2000));
      setReviews((prev) => (prev < 300 ? prev + 3 : 300));
      setClients((prev) => (prev < 59 ? prev + 1 : 59));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="my-10">
        <div className="flex flex-col lg:flex-row justify-between items-center py-10">
          <div className="text-center md:text-left mb-6 lg:mb-0 lg:pr-4">
            <p className="text-4xl lg:text-7xl text-gray-300">
              {formatNumber(users)}
            </p>
            <p className="text-lg lg:text-xl text-gray-300">Users</p>
          </div>
          <img src={line} alt="vertical line" className="h-20 lg:h-40" />
          <div className="text-center md:text-left mb-6 lg:mb-0 lg:pr-4">
            <p className="text-4xl lg:text-7xl text-gray-300">
              {formatNumber(ideas)}
            </p>
            <p className="text-lg lg:text-xl text-gray-300">Ideas generated</p>
          </div>
          <img src={line} alt="vertical line" className="h-20 lg:h-40" />
          <div className="text-center md:text-left mb-6 lg:mb-0 lg:pr-4">
            <p className="text-4xl lg:text-7xl text-gray-300">
              {formatNumber(reviews)}
            </p>
            <p className="text-lg lg:text-xl text-gray-300">Reviews</p>
          </div>
          <img src={line} alt="vertical line" className="h-20 lg:h-40" />
          <div className="text-center md:text-left">
            <p className="text-4xl lg:text-7xl text-gray-300">
              {formatNumber(clients)}
            </p>
            <p className="text-lg lg:text-xl text-gray-300">Happy Clients</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Details;
