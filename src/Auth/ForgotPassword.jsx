import React, { useState } from "react";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("If this email is registered, you will receive a reset link.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen  text-white p-4">
      <motion.div
        className="bg-white/5 p-6 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
        <p className=" text-center mb-6">
          Enter your email to receive a password reset link.
        </p>
        {message && <p className="text-[#dddd] text-center mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <motion.input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mb-4 rounded-lg  text-white outline-2 focus:outline focus:ring-2 focus:ring-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            required
          />
          <motion.button
            type="submit"
            className="w-full py-2 rounded-lg bg-white hover:bg-white/20 text-black transition-all font-semibold"
            whileTap={{ scale: 0.95 }}
          >
            Send Reset Link
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
