import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link } from "react-router";

const SignOut = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const professions = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "Mobile App Developer",
    "Cyber Security Expert",
  ];

  const levels = ["Junior", "Mid", "Senior"];

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto py-10 px-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#dddd]/10 backdrop-blur-lg shadow-lg p-8 rounded-lg border border-white/20"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Your Account 🚀
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            {/* First Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 flex-1"
            >
              <label className="block text-gray-300 text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#dddd]/20 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder:text-sm"
                placeholder="Enter your first name"
                {...register("firstName", { required: "First Name is required" })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName.message}</p>
              )}
            </motion.div>

            {/* Last Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-4 flex-1"
            >
              <label className="block text-gray-300 text-sm mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#dddd]/20 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder:text-sm"
                placeholder="Enter your last name"
                {...register("lastName", { required: "Last Name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName.message}</p>
              )}
            </motion.div>
          </div>

          {/* Email */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4"
          >
            <label className="block text-gray-300 text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-[#dddd]/20 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder:text-sm"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </motion.div>

          {/* Profession Selection */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-4"
          >
            <label className="block text-gray-300 text-sm mb-2">
              Profession
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg bg-[#dddd]/20 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder:text-sm"
              {...register("profession", {
                required: "Profession is required",
              })}
            >
              <option value="" disabled>
                Select your profession
              </option>
              {professions.map((profession, index) => (
                <option
                  key={index}
                  value={profession}
                  className="text-black bg-white"
                >
                  {profession}
                </option>
              ))}
            </select>
            {errors.profession && (
              <p className="text-red-500 text-sm">
                {errors.profession.message}
              </p>
            )}
          </motion.div>

          {/* Level of Profession */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-4"
          >
            <label className="block text-gray-300 text-sm mb-2">
              Level of Profession
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg bg-[#dddd]/20 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder:text-sm"
              {...register("level", {
                required: "Level of Profession is required",
              })}
            >
              <option value="" disabled>
                Select your level
              </option>
              {levels.map((level, index) => (
                <option
                  key={index}
                  value={level}
                  className="text-black bg-white"
                >
                  {level}
                </option>
              ))}
            </select>
            {errors.level && (
              <p className="text-red-500 text-sm">
                {errors.level.message}
              </p>
            )}
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-4"
          >
            <label className="block text-gray-300 text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-[#dddd]/20 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder:text-sm"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </motion.div>
          <Link to="/tags">
            <motion.button
              type="submit"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-full py-2 rounded-lg bg-white hover:bg-white/70 text-black font-bold"
            >
              Sign Up
            </motion.button>
          </Link>
        </form>
        <div className="text-center mt-4">
          <Link to="/signin" className="text-gray-300 hover:underline">
            Already have an account? Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SignOut;
