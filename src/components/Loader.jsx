// components/Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
          PEC HACKS 3.0
        </h1>

        <div className="flex justify-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>

        <p className="text-gray-300 text-lg">
          Loading the future of innovation...
        </p>

        <div className="mt-6 w-64 mx-auto bg-gray-800 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
