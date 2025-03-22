import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const tagsList = [
  "Web Development",
  "UI/UX Design",
  "Graphic Design",
  "Mobile App Dev",
  "DevOps",
  "Video Editing",
  "E-commerce",
  "Freelancing",
  "Front-end Development",
  "Back-end Development",
  "Full Stack Development",
  "Internet of Things",
  "Software Testing",
  "Project Management",
  "Product Management",
  "SEO",
  "Social Media Marketing",
  "Copywriting",
  "Technical Writing",
  "Illustration",
  "Animation",
  "3D Modeling",
  "Photography",
  "Branding",
  "Typography",
  "Print Design",
  "Motion Graphics",
  "Prototyping",
  "Wireframing",
  "Interaction Design",
  "Information Architecture",
  "Usability Testing",
  "Design Thinking",
  "Design Systems",
];

const tagContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Tag = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const isLimitExceeded = selectedTags.length > 5;
  const isButtonDisabled = selectedTags.length !== 5;

  const handleContinue = () => {
    if (!isButtonDisabled) {
      navigate("/dashboard");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center h-screen container mx-auto px-5"
    >
      <div className="w-full max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-[#dddd] text-center "
        >
          Select Your Interests
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 text-center mb-4"
        >
          Please select 5 tags only
        </motion.p>
        {isLimitExceeded && (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-red-500 text-center mb-4"
          >
            You can only select up to 5 tags.
          </motion.p>
        )}

        <motion.input
          type="text"
          placeholder="Search tags..."
          className="w-full text-white px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white  placeholder-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Tags List */}
        <motion.div
          variants={tagContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2"
        >
          {tagsList
            .filter((tag) => tag.toLowerCase().includes(search.toLowerCase()))
            .slice(0, 10)
            .map((tag) => (
              <motion.button
                key={tag}
                variants={tagVariants}
                animate={{
                  backgroundColor: selectedTags.includes(tag)
                    ? "#ffff"
                    : "transparent",
                  color: selectedTags.includes(tag) ? "#000" : "#fff",
                  outlineStyle: "solid",
                  outlineWidth: "1px",
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all `}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </motion.button>
            ))}
        </motion.div>

        {/* Submit Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`w-full cursor-pointer mt-6 py-2 rounded-lg text-lg font-semibold transition-all ${
            isButtonDisabled
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-white text-[#1E1E1E] hover:bg-black hover:text-white border border-[#1E1E1E]"
          }`}
          onClick={handleContinue}
          disabled={isButtonDisabled}
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Tag;
