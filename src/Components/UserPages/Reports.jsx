import React, { useState } from "react";
import completedIcon from "../../assets/completeIcon.svg";
import savedIcon from "../../assets/saveIcon.svg";
import ideasIcon from "../../assets/ideaIcon.svg";
import arrow from "../../assets/Icon.svg";
import archives from "../../dummyApis/Archives";

const Reports = () => {
  const [completedPage, setCompletedPage] = useState(1);
  const [savedPage, setSavedPage] = useState(1);
  const [filterDate, setFilterDate] = useState("");
  const itemsPerPage = 4;

  const filteredArchives = archives.filter((item) =>
    filterDate ? item.date === filterDate : true
  );

  const totalPages = Math.ceil(filteredArchives.length / itemsPerPage);

  const getCurrentItems = (page) => {
    return filteredArchives.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
  };

  const handlePageChange = (pageSetter, page) => {
    pageSetter(page);
  };

  return (
    <>
      <main>
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-5">
          <div className="p-5 bg-[#1E1E1E] rounded-xl flex flex-col gap-5 justify-between w-full md:w-1/3">
            <div className="flex items-center justify-between">
              <h1 className="text-lg md:text-xl">Completed</h1>
              <img src={completedIcon} alt="" className="w-5 md:w-6" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">100%</h1>
          </div>
          <div className="p-5 bg-[#1E1E1E] rounded-xl flex flex-col gap-5 justify-between w-full md:w-1/3">
            <div className="flex items-center justify-between">
              <h1 className="text-lg md:text-xl">Saved</h1>
              <img src={savedIcon} alt="" className="w-5 md:w-6" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">10</h1>
          </div>
          <div className="p-5 bg-[#1E1E1E] rounded-xl flex flex-col gap-5 justify-between w-full md:w-1/3">
            <div className="flex items-center justify-between">
              <h1 className="text-lg md:text-xl">Ideas</h1>
              <img src={ideasIcon} alt="" className="w-5 md:w-6" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">67</h1>
          </div>
        </div>

        <div>
          <div className="flex my-5 gap-4">
            <h1 className="text-3xl font-extralight">Completed</h1>
            <img src={arrow} alt="" className="w-7" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {getCurrentItems(completedPage).map((item, index) => (
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
              onClick={() =>
                handlePageChange(setCompletedPage, completedPage - 1)
              }
              disabled={completedPage === 1}
              className="px-4 py-2 mx-1 rounded"
            >
              Prev
            </button>
            <button
              onClick={() =>
                handlePageChange(setCompletedPage, completedPage + 1)
              }
              disabled={completedPage === totalPages}
              className="px-4 py-2 mx-1 rounded"
            >
              Next
            </button>
          </div>
        </div>

        <div>
          <div className="flex my-5 gap-4">
            <h1 className="text-3xl font-extralight">Saved</h1>
            <img src={arrow} alt="" className="w-7" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {getCurrentItems(savedPage).map((item, index) => (
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
              onClick={() => handlePageChange(setSavedPage, savedPage - 1)}
              disabled={savedPage === 1}
              className="px-4 py-2 mx-1 rounded"
            >
              Prev
            </button>
            <button
              onClick={() => handlePageChange(setSavedPage, savedPage + 1)}
              disabled={savedPage === totalPages}
              className="px-4 py-2 mx-1 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Reports;
