import React, { useState } from "react";
import { motion } from "framer-motion";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        if (img.width >= 800 && img.height >= 800) {
          console.log("Image is valid and can be uploaded");
        } else {
          alert("Image must be at least 800 x 800 pixels.");
        }
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const handleToggleChange = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className=""
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="backdrop-contrast-90 p-4 sm:p-8 rounded-xl shadow-lg w-full"
      >
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl mb-4 sm:mb-6"
        >
          Profile Information
        </motion.h1>
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            alt="Profile picture"
            className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-6"
            height="100"
            src="https://storage.googleapis.com/a1aa/image/aJjJkNtM29M0v1sxfYDFjzO09kpDLeluAZnoewxLwpo.jpg"
            width="100"
            htmlFor="upload-photo"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={handleImageUpload}
              className="hidden"
              id="upload-photo"
            />
            <label
              htmlFor="upload-photo"
              className="cursor-pointer text-white py-3 px-4 rounded-lg border border-gray-600 w-full sm:w-auto"
            >
              Upload New Photo
            </label>
            <p className="text-gray-400 mt-3">
              At least 800 x 800 px recommended. JPEG or PNG is allowed.
            </p>
          </motion.div>
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {[
            { label: "First Name", value: "Gozirim" },
            { label: "Last Name", value: "Joshua" },
            {
              label: "Email",
              value: "divinefavourjoshua03@gmail.com",
              type: "email",
            },
            { label: "Password", value: "00000000", type: "password" },
          ].map((input, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <label className="block text-gray-400 mb-2">{input.label}</label>
              <input
                className="w-full text-white py-2 px-4 rounded-lg border border-gray-600"
                type={input.type || "text"}
                value={input.value}
                readOnly
              />
            </motion.div>
          ))}
          <div className="flex items-center mt-4">
            <label className="block text-gray-400 mr-4" htmlFor="checkbox">
              Notifications
            </label>
            <label className="switch">
              <input
                id="checkbox"
                type="checkbox"
                checked={notificationsEnabled}
                onChange={handleToggleChange}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </motion.div>
        <motion.div className="flex mt-4 sm:mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 py-2 px-6 rounded-lg cursor-pointer"
          >
            Save Changes
          </motion.button>
        </motion.div>
        <motion.div className="sm:hidden flex mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white py-2 px-6 rounded-lg opacity-50"
          >
            Logout
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default Settings;
