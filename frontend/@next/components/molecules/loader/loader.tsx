import React from "react";

export const Loader = () => {
  return (
    <div className="w-screen h-full bg-gray-700 opacity-50 absolute flex justify-center items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-white"></div>
    </div>
  );
};
