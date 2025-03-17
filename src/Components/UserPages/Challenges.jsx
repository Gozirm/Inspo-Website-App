import React from "react";
import Masonry from "react-masonry-css";
import events from "../../dummyApis/Events";

const Challenges = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1,
  };

  return (
    <main className="flex justify-center ">
      <div className="w-full max-w-screen-xl">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="backdrop-contrast-90 rounded-xl overflow-hidden m- w-full p-5"
            >
              <img
                alt={event.alt}
                className="w-full"
                height="200"
                src={event.imageUrl}
                width="300"
              />
              <div className="pt-4">
                <h1 className="text-sm font-bold mb-2">{event.title}</h1>
                <p className="text-gray-400 mb-4 text-sm">{event.description}</p>
                <button className="bg-white text-gray-900 font-bold py-2 px-4 rounded-full w-full cursor-pointer">
                  Interested
                </button>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </main>
  );
};

export default Challenges;
