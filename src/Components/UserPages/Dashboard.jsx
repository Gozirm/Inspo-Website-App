import React, { useState } from "react";
import { motion } from "framer-motion";
import dots from "../../assets/dots.svg";
import completedIcon from "../../assets/completedIcon.svg";
import SavedIcon from "../../assets/savedIcon.svg";
import arrow from "../../assets/Icon.svg";
import archives from "../../dummyApis/Archives";
import ReportPopup from "../ReportPopup";

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const [showReportPopup, setShowReportPopup] = useState(false);

  const handleReportClick = () => {
    setShowReportPopup(true);
  };

  const handleClosePopup = () => {
    setShowReportPopup(false);
  };

  return (
    <main>
      {showReportPopup && <ReportPopup onClose={handleClosePopup} />}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-black p-5 rounded-2xl outline-1 outline-white/10"
      >
        <div className="flex justify-between ">
          <h1 className="font-bold text-xl">
            Build a Dynamic Profile Card With Interactive Animations
          </h1>
          <img
            src={dots}
            alt=""
            onClick={handleReportClick}
            className="cursor-pointer"
          />
        </div>
        <p className="mb-5 text-[#dddd]">1/2/2026</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          suscipit deserunt commodi, architecto laborum quod cum deleniti
          obcaecati, consectetur ad vitae distinctio maxime quia qui eveniet
          adipisci officia facere vel!
        </p>
        <div className="flex gap-5 mt-5">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex gap-2 cursor-pointer"
          >
            <img src={completedIcon} alt="" className="w-4" />
            <p>Completed</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex gap-2 cursor-pointer"
          >
            <img src={SavedIcon} alt="" className="w-3" />
            <p>Save for later</p>
          </motion.div>
        </div>
      </motion.div>

      <div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex my-5 gap-4"
        >
          <h1 className="text-3xl font-extralight">Archives</h1>
          <img src={arrow} alt="" className="w-7" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1E1E1E] p-5 rounded-2xl mb-5"
            >
              <h1 className="font-bold text-xl">{item.title}</h1>
              <p className="mb-5 text-[#dddd]">{item.date}</p>
              <p className="text-[#dddd]">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex justify-between mt-5"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 rounded"
          >
            Prev
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 rounded"
          >
            Next
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
};

export default Dashboard;
