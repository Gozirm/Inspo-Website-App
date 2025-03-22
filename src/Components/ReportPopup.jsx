import React, { useState } from "react";
import { motion } from "framer-motion";

const ReportPopup = ({ onClose }) => {
  const [showWritePopup, setShowWritePopup] = useState(false);

  const handleWriteClick = () => {
    setShowWritePopup(true);
  };

  const handleSendClick = () => {
    alert("Report sent!");
    setShowWritePopup(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="backdrop-blur-md p-4 sm:p-8 rounded-lg w-full max-w-md outline-1 outline-white/20 relative"
      >
        {!showWritePopup ? (
          <>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Report</h2>
            <button
              className="bg-white text-black px-4 py-2 rounded w-full sm:w-auto"
              onClick={handleWriteClick}
            >
              Write Report
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Write Report</h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mb-4"
              rows="4"
              placeholder="Write your report here..."
            ></textarea>
            <button
              className="bg-white text-black px-4 py-2 rounded w-full sm:w-auto"
              onClick={handleSendClick}
            >
              Send
            </button>
          </>
        )}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
      </motion.div>
    </div>
  );
};

export default ReportPopup;
