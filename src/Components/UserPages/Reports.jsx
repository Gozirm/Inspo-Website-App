import React, { useState } from "react";
import { motion } from "framer-motion";
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
        }}
        className="flex flex-col md:flex-row md:justify-between items-center gap-5"
      >
        {[
          { title: "Completed", icon: completedIcon, value: "100%" },
          { title: "Saved", icon: savedIcon, value: "10" },
          { title: "Ideas", icon: ideasIcon, value: "67" },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="p-5 bg-[#1E1E1E] rounded-xl flex flex-col gap-5 justify-between w-full md:w-1/3"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-lg md:text-xl">{item.title}</h1>
              <img src={item.icon} alt="" className="w-5 md:w-6" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">{item.value}</h1>
          </motion.div>
        ))}
      </motion.div>

      {["Completed", "Saved"].map((section, index) => (
        <div key={index}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex my-5 gap-4"
          >
            <h1 className="text-3xl font-extralight">{section}</h1>
            <img src={arrow} alt="" className="w-7" />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {getCurrentItems(section === "Completed" ? completedPage : savedPage).map((item, i) => (
              <motion.div
                key={i}
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
              onClick={() =>
                handlePageChange(
                  section === "Completed" ? setCompletedPage : setSavedPage,
                  (section === "Completed" ? completedPage : savedPage) - 1
                )
              }
              disabled={section === "Completed" ? completedPage === 1 : savedPage === 1}
              className="px-4 py-2 mx-1 rounded"
            >
              Prev
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                handlePageChange(
                  section === "Completed" ? setCompletedPage : setSavedPage,
                  (section === "Completed" ? completedPage : savedPage) + 1
                )
              }
              disabled={section === "Completed" ? completedPage === totalPages : savedPage === totalPages}
              className="px-4 py-2 mx-1 rounded"
            >
              Next
            </motion.button>
          </motion.div>
        </div>
      ))}
    </main>
  );
};

export default Reports;
