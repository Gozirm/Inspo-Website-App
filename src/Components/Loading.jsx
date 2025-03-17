import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-4 p-4">
      <div className="animate-spin rounded-full h-10 w-10 sm:h-16 sm:w-16 border-t-4 border-white mb-4"></div>
      <h1 className="text-xl sm:text-2xl">Loading</h1>
    </div>
  );
};

export default Loading;
