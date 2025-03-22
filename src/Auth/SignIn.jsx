import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link } from "react-router";

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto px-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/20"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <label className="block text-gray-300 text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-[#dddd] focus:outline-none text-white placeholder-gray-400"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4"
          >
            <label className="block text-gray-300 text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg border border-[#dddd] focus:outline-none text-white placeholder-gray-400"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white hover:bg-white/95 text-black py-2 rounded-lg font-semibold transition-all mt-10"
            type="submit"
          >
            Sign In
          </motion.button>
        </form>

        <div className="text-gray-300 text-sm text-center mt-4">
          <Link to="/forgotpassword" className="hover:text-white/50 transition-all">
            Forgot Password?
          </Link>
          <span className="mx-2">•</span>
          <Link to="/signup" className="hover:text-white/50 transition-all">
            Create an account
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;