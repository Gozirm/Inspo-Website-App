import React from "react";
import dots from "../../assets/dots.svg";
import completedIcon from "../../assets/completedIcon.svg";
import SavedIcon from "../../assets/savedIcon.svg";
import arrow from "../../assets/Icon.svg";
import { useState } from "react";
import archives from "../../dummyApis/Archives";
const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDate, setFilterDate] = useState("");
  const itemsPerPage = 6;

  const filteredArchives = archives.filter((item) =>
    filterDate ? item.date === filterDate : true
  );

  const totalPages = Math.ceil(filteredArchives.length / itemsPerPage);
  const currentItems = filteredArchives.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <main>
        <div className="bg-black p-5 rounded-2xl ">
          <div className="flex justify-between ">
            <h1 className="font-bold text-xl">
              Build a Dynamic Profile Card With Interactive Animations
            </h1>
            <img src={dots} alt="" />
          </div>
          <p className="mb-5 text-[#dddd]">1/2/2026</p>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              suscipit deserunt commodi, architecto laborum quod cum deleniti
              obcaecati, consectetur ad vitae distinctio maxime quia qui eveniet
              adipisci officia facere vel!
            </p>
            <div className="flex gap-5 mt-5">
              <div className="flex gap-2 cursor-pointer">
                <img src={completedIcon} alt="" className="w-4" />
                <p>Completed</p>
              </div>
              <div className="flex gap-2 cursor-pointer">
                <img src={SavedIcon} alt="" className="w-3" />
                <p>Save for later</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex my-5 gap-4">
            <h1 className="text-3xl font-extralight">Archives</h1>
            <img src={arrow} alt="" className="w-7" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {currentItems.map((item, index) => (
              <div key={index} className="bg-[#1E1E1E] p-5 rounded-2xl mb-5">
                <h1 className="font-bold text-xl">{item.title}</h1>
                <p className="mb-5 text-[#dddd]">{item.date}</p>
                <div>
                  <p className="text-[#dddd]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-5">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 rounded "
            >
              Prev
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 rounded "
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
